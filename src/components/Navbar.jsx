// src/components/Navbar.jsx
import { Link } from 'react-router';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              {'<> Codix'}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link
              to="/problems"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md transition-colors"
            >
              Problems
            </Link>
            <Link
              to="/leaderboard"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md transition-colors"
            >
              Leaderboard
            </Link>
            <Link
              to="/signin"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm hover:shadow-md"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-md">
          <div className="flex flex-col space-y-2">
            <Link
              to="/problems"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-base font-medium rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Problems
            </Link>
            <Link
              to="/leaderboard"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-base font-medium rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <Link
              to="/signin"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-base font-medium rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;