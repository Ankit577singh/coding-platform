import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LeaderboardPage = () => {
  // Sample leaderboard data
  const leaderboardData = [
  {
    rank: 1,
    username: "code_master",
    avatar: "https://i.pravatar.cc/40?img=1",
    score: 2450,
    problemsSolved: 187,
    recentActivity: "2 hours ago",
  },
  {
    rank: 2,
    username: "algo_queen",
    avatar: "https://i.pravatar.cc/40?img=2",
    score: 2300,
    problemsSolved: 175,
    recentActivity: "30 minutes ago",
  },
  {
    rank: 3,
    username: "dev_guru",
    avatar: "https://i.pravatar.cc/40?img=3",
    score: 2150,
    problemsSolved: 162,
    recentActivity: "1 hour ago",
  },
  {
    rank: 4,
    username: "python_pro",
    avatar: "https://i.pravatar.cc/40?img=4",
    score: 2050,
    problemsSolved: 150,
    recentActivity: "5 hours ago",
  },
  {
    rank: 5,
    username: "js_ninja",
    avatar: "https://i.pravatar.cc/40?img=5",
    score: 1980,
    problemsSolved: 145,
    recentActivity: "Just now",
  },
  {
    rank: 6,
    username: "data_wizard",
    avatar: "https://i.pravatar.cc/40?img=6",
    score: 1850,
    problemsSolved: 135,
    recentActivity: "3 hours ago",
  },
  {
    rank: 7,
    username: "byte_me",
    avatar: "https://i.pravatar.cc/40?img=7",
    score: 1720,
    problemsSolved: 128,
    recentActivity: "Yesterday",
  },
  {
    rank: 8,
    username: "stack_overflow",
    avatar: "https://i.pravatar.cc/40?img=8",
    score: 1650,
    problemsSolved: 120,
    recentActivity: "1 day ago",
  },
  {
    rank: 9,
    username: "bug_slayer",
    avatar: "https://i.pravatar.cc/40?img=9",
    score: 1550,
    problemsSolved: 112,
    recentActivity: "12 hours ago",
  },
  {
    rank: 10,
    username: "ctrl_alt_elite",
    avatar: "https://i.pravatar.cc/40?img=10",
    score: 1420,
    problemsSolved: 105,
    recentActivity: "4 hours ago",
  },
];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Leaderboard</h1>
            <p className="mt-1 sm:mt-2 text-gray-600">
              See how you rank against other coders worldwide.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:ring-blue-500 focus:border-blue-500">
              <option>All Users</option>
              <option>Friends</option>
              <option>Country</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:ring-blue-500 focus:border-blue-500">
              <option>All Time</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solved</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leaderboardData.map((user) => (
                  <tr key={user.rank} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs sm:text-sm font-medium
                        ${user.rank === 1 ? 'bg-yellow-100 text-yellow-800' : 
                           user.rank === 2 ? 'bg-gray-100 text-gray-800' : 
                           user.rank === 3 ? 'bg-amber-100 text-amber-800' : 
                           'bg-blue-50 text-blue-800'}`}>
                        {user.rank}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center">
                        <img className="h-8 w-8 rounded-full mr-3" src={user.avatar} alt={user.username} />
                        <span className="font-medium text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                          {user.username}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {user.score.toLocaleString()}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-500">
                      {user.problemsSolved}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-500 text-sm">
                      {user.recentActivity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">100</span> users
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white font-medium text-blue-600 hover:bg-gray-50 transition-colors">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50 transition-colors">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>

        {/* Current User Highlight Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <img className="h-10 w-10 rounded-full mr-4" src="https://i.pravatar.cc/40?img=6" alt="Your profile" />
              <div>
                <h3 className="font-medium text-gray-900">Your Rank</h3>
                <p className="text-sm text-gray-600">Keep solving problems to move up!</p>
              </div>
            </div>
            <div className="flex gap-6 text-center sm:text-right">
              <div>
                <p className="text-xs text-gray-500">Rank</p>
                <p className="font-medium text-gray-900">#42</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Score</p>
                <p className="font-medium text-gray-900">1,250</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Solved</p>
                <p className="font-medium text-gray-900">85</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeaderboardPage;