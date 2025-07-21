import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import problemsData from '../data/problems.json';

const ProblemsPage = () => {
  const problems = problemsData.problems;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy": return "bg-green-100 text-green-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Problems</h1>
            <div className="w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search problems..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acceptance</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topics</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {problems.map((problem) => (
                    <tr 
                      key={problem.id} 
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link 
                          to={`/solve/${problem.id}`}
                          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                          {problem.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{problem.acceptance}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex flex-wrap gap-1">
                          {problem.topics?.slice(0, 2).map(topic => (
                            <span key={topic} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                              {topic}
                            </span>
                          ))}
                          {problem.topics?.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                              +{problem.topics.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden">
              {problems.map((problem) => (
                <Link
                  key={problem.id}
                  to={`/solve/${problem.id}`}
                  className="block p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-blue-600">{problem.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">ID: {problem.id}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs leading-4 font-semibold rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-gray-500">Acceptance: {problem.acceptance}</span>
                    <div className="flex flex-wrap gap-1">
                      {problem.topics?.slice(0, 2).map(topic => (
                        <span key={topic} className="px-1.5 py-0.5 bg-gray-100 text-gray-800 text-xs rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50">
              Previous
            </button>
            <div className="hidden sm:flex gap-1">
              {[1, 2, 3, 4, 5].map(page => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${page === 1 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProblemsPage;