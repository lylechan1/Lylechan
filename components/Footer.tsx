import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-12 mt-12">
      <div className="max-w-[1920px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Lyle Chan 陈履安. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;