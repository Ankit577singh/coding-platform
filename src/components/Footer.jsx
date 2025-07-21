// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-gray-900">Codix</span>
            <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
              Sharpen your coding skills
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm sm:text-base transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm sm:text-base transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm sm:text-base transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Codix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;