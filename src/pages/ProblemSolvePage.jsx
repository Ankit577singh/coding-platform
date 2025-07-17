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
    
    setTimeout(() => {
      const testResults = problem.testCases.map((testCase, i) => {
        return `Test Case ${i+1}: ${Math.random() > 0.3 ? '✓ Passed' : '✗ Failed'}\n`;
      }).join('');
      
      setOutput(prev => prev + testResults + '\nFinished running tests.');
      setIsRunning(false);
    }, 1500);
  };

  if (!problem) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow flex flex-col md:flex-row">
        {/* Left Panel - Problem Description */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-md p-6 h-full">
            <h1 className="text-2xl font-bold text-gray-800">{problem.title}</h1>
            <div className="flex items-center mt-2 mb-4">
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {problem.difficulty}
              </span>
              <span className="ml-2 text-sm text-gray-600">Acceptance: {problem.acceptance}</span>
            </div>
            
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{problem.description}</p>
              
              <h3 className="font-medium mt-6">Examples:</h3>
              {problem.examples.map((example, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded my-2">
                  <p><strong>Input:</strong> {example.input}</p>
                  <p><strong>Output:</strong> {example.output}</p>
                  {example.explanation && <p><strong>Explanation:</strong> {example.explanation}</p>}
                </div>
              ))}
              
              <h3 className="font-medium mt-6">Constraints:</h3>
              <ul className="list-disc pl-5">
                {problem.constraints.map((constraint, idx) => (
                  <li key={idx}>{constraint}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Right Panel - Code Editor */}
        <div className="w-full md:w-1/2 bg-gray-800 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-700 text-white text-sm rounded px-3 py-1"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
            
            <div className="flex space-x-2">
              <button
                onClick={runCode}
                disabled={isRunning}
                className={`px-4 py-2 rounded text-sm font-medium ${
                  isRunning ? 'bg-gray-600 text-gray-400' : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isRunning ? 'Running...' : 'Run Code'}
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded font-medium hover:bg-blue-700">
                Submit
              </button>
            </div>
          </div>
          
          <div className="flex-grow">
            <Editor
              height="60vh"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={setCode}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on'
              }}
            />
          </div>
          
          <div className="mt-4 bg-gray-900 rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">Output</h3>
            <pre className="bg-black text-green-400 p-3 rounded overflow-auto max-h-40">
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