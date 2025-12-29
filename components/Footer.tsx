
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black py-16 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <Logo className="mb-8 opacity-80" />

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-8">
          <a href="#" className="text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-colors">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-colors">Legal</a>
          <a href="#" className="text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-colors">Contact</a>
          <a href="#" className="text-gray-500 hover:text-black dark:text-gray-500 dark:hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-colors">Support</a>
        </div>

        <p className="text-gray-400 dark:text-gray-600 text-[10px] tracking-widest uppercase">
          &copy; {new Date().getFullYear()} ResQLink. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
