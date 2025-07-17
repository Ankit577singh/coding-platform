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
      username: "algorithm_ninja",
      avatar: "https://i.pravatar.cc/40?img=2",
      score: 2300,
      problemsSolved: 165,
      recentActivity: "5 hours ago",
    },
    {
      rank: 3,
      username: "binary_wizard",
      avatar: "https://i.pravatar.cc/40?img=3",
      score: 2150,
      problemsSolved: 150,
      recentActivity: "1 day ago",
    },
    {
      rank: 4,
      username: "react_champ",
      avatar: "https://i.pravatar.cc/40?img=4",
      score: 1950,
      problemsSolved: 132,
      recentActivity: "1 day ago",
    },
    {
      rank: 5,
      username: "python_prodigy",
      avatar: "https://i.pravatar.cc/40?img=5",
      score: 1800,
      problemsSolved: 120,
      recentActivity: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Leaderboard</h1>
          <div className="flex space-x-2">
            <select className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white">
              <option>All Users</option>
              <option>Friends</option>
              <option>Country</option>
            </select>
            <select className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white">
              <option>All Time</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
        </div>
        <p className="mt-2 text-gray-600 mb-6">
          See how you rank against other coders worldwide.
        </p>

        {/* Leaderboard Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solved</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recent Activity</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaderboardData.map((user) => (
                <tr key={user.rank} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-sm font-medium
                      ${user.rank === 1 ? 'bg-yellow-100 text-yellow-800' : 
                         user.rank === 2 ? 'bg-gray-100 text-gray-800' : 
                         user.rank === 3 ? 'bg-amber-100 text-amber-800' : 
                         'bg-blue-100 text-blue-800'}`}>
                      {user.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-8 w-8 rounded-full mr-3" src={user.avatar} alt={user.username} />
                      <span className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                        {user.username}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.score}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.problemsSolved}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.recentActivity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">100</span> users
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white font-medium text-blue-600">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white">
              Next
            </button>
          </div>
        </div>

        {/* Current User Highlight Card */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-10 w-10 rounded-full mr-4" src="https://i.pravatar.cc/40?img=6" alt="Your profile" />
              <div>
                <h3 className="font-medium text-gray-900">Your Rank</h3>
                <p className="text-sm text-gray-600">Keep solving problems to move up!</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">#42</p>
              <p className="text-sm text-gray-600">Score: 1250</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeaderboardPage;