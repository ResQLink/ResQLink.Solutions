
import React from 'react';
import Logo from './Logo';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-700">
      
      {/* Central Pulsing Custom Logo */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gray-400/10 dark:bg-white/5 blur-3xl rounded-full scale-[3] animate-pulse"></div>
        <Logo iconOnly className="scale-[3] animate-pulse-slow relative z-10" />
      </div>

      {/* Progress Bar Container */}
      <div className="w-48 h-[1px] bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden relative">
        {/* The Sleek Progress Line */}
        <div className="absolute top-0 left-0 h-full bg-black dark:bg-white w-[30%] animate-loading-line"></div>
      </div>

      {/* Subtle Status Text */}
      <div className="mt-8 text-center">
        <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400 dark:text-gray-500 animate-pulse">
          ResQLink OS Initializing
        </p>
      </div>

      <style>{`
        @keyframes loadingLine {
          0% { left: -100%; width: 10%; }
          50% { width: 40%; }
          100% { left: 100%; width: 10%; }
        }
        .animate-loading-line {
          animation: loadingLine 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Loader;
