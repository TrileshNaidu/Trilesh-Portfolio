import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              Trilesh Pavan Katreddy
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm text-gray-300">
              Made with <Heart size={14} className="inline text-red-400 mx-1" /> | &copy; {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;