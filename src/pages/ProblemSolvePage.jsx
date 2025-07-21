import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Editor from '@monaco-editor/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import problemsData from '../data/problems.json';

const ProblemSolvePage = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const foundProblem = problemsData.problems.find(p => p.id === parseInt(id));
    if (foundProblem) {
      setProblem(foundProblem);
      setCode(foundProblem.defaultCode[language] || '');
    }
  }, [id, language]);

  const runCode = () => {
    setIsRunning(true);
    setOutput('Running test cases...\n');
    
    // Simulate code execution
    setTimeout(() => {
      const testResults = problem.testCases.map((testCase, i) => {
        const passed = Math.random() > 0.3;
        return `Test Case ${i+1}: ${passed ? '✓ Passed' : '✗ Failed'}\n` +
               (passed ? '' : `  Input: ${JSON.stringify(testCase.input)}\n` +
               `  Expected: ${JSON.stringify(testCase.output)}\n` +
               `  Received: ${JSON.stringify(testCase.output)}\n\n`);
      }).join('');
      
      setOutput(prev => prev + testResults + '\nFinished running tests.');
      setIsRunning(false);
    }, 1500);
  };

  const handleEditorMount = (editor) => {
    editor.focus();
  };

  if (!problem) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-pulse text-gray-600">Loading problem...</div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Mobile Tabs */}
      {isMobile && (
        <div className="flex border-b border-gray-200 bg-white">
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('description')}
          >
            Problem
          </button>
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === 'editor' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('editor')}
          >
            Editor
          </button>
        </div>
      )}

      <main className="flex-grow flex flex-col md:flex-row">
        {/* Left Panel - Problem Description */}
        <div className={`w-full md:w-1/2 p-4 md:p-6 overflow-y-auto ${isMobile && activeTab !== 'description' ? 'hidden' : ''}`}>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 h-full">
            <div className="flex justify-between items-start">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">{problem.title}</h1>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {problem.difficulty}
                </span>
                <span className="text-xs md:text-sm text-gray-600">Acceptance: {problem.acceptance}</span>
              </div>
            </div>
            
            <div className="mt-4 prose prose-sm md:prose max-w-none">
              <div className="whitespace-pre-line text-sm md:text-base">{problem.description}</div>
              
              <h3 className="font-medium mt-4 md:mt-6">Examples:</h3>
              {problem.examples.map((example, idx) => (
                <div key={idx} className="bg-gray-50 p-3 md:p-4 rounded my-2">
                  <p className="text-sm md:text-base"><strong>Input:</strong> {example.input}</p>
                  <p className="text-sm md:text-base"><strong>Output:</strong> {example.output}</p>
                  {example.explanation && <p className="text-sm md:text-base"><strong>Explanation:</strong> {example.explanation}</p>}
                </div>
              ))}
              
              <h3 className="font-medium mt-4 md:mt-6">Constraints:</h3>
              <ul className="list-disc pl-5 text-sm md:text-base">
                {problem.constraints.map((constraint, idx) => (
                  <li key={idx}>{constraint}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Right Panel - Code Editor */}
        <div className={`w-full md:w-1/2 bg-gray-800 p-4 md:p-6 flex flex-col ${isMobile && activeTab !== 'editor' ? 'hidden' : ''}`}>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-700 text-white text-xs sm:text-sm rounded px-3 py-1"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
            
            <div className="flex space-x-2">
              <button
                onClick={runCode}
                disabled={isRunning}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium ${
                  isRunning ? 'bg-gray-600 text-gray-400' : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isRunning ? 'Running...' : 'Run Code'}
              </button>
              <button className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm rounded font-medium hover:bg-blue-700">
                Submit
              </button>
            </div>
          </div>
          
          <div className="flex-grow">
            <Editor
              height={isMobile ? '50vh' : '60vh'}
              language={language}
              theme="vs-dark"
              value={code}
              onChange={setCode}
              onMount={handleEditorMount}
              options={{
                minimap: { enabled: false },
                fontSize: 13,
                wordWrap: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true
              }}
            />
          </div>
          
          <div className="mt-4 bg-gray-900 rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-medium text-sm md:text-base">Output</h3>
              <button 
                onClick={() => setOutput('')} 
                className="text-gray-400 hover:text-white text-xs"
              >
                Clear
              </button>
            </div>
            <pre className="bg-black text-green-400 p-2 rounded overflow-auto max-h-32 md:max-h-40 text-xs md:text-sm">
              {output || 'Run your code to see output'}
            </pre>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProblemSolvePage;