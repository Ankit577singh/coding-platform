// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-gray-900">Codix</span>
            <p className="text-gray-500 mt-2">Sharpen your coding skills</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Codix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;