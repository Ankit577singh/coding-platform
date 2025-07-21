import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Create Your Account</h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm md:text-base font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm md:text-base font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 hover:border-blue-300"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm md:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-[1.02] transition-transform duration-200"
            >
              Create Account
            </button>
            <div className="text-center text-sm md:text-base text-gray-600 mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                Log in
              </a>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;