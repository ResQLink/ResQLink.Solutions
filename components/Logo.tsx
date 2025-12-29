
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  const logoUrl = "https://i.ibb.co/KzfTj6Rw/Screenshot-2025-12-19-140748-removebg-preview-1.png";

  return (
    <div className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      {/* Custom Image Logo */}
      <div className="relative overflow-visible shrink-0">
        <img 
          src={logoUrl} 
          alt="ResQLink Logo" 
          className="w-11 h-11 md:w-12 md:h-12 object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        />
        {/* Subtle glow effect behind the logo */}
        <div className="absolute inset-0 bg-white/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {!iconOnly && (
        <span className="text-[20px] md:text-[22px] font-bold tracking-[0.18em] uppercase font-sans text-gray-900 dark:text-white whitespace-nowrap transition-colors duration-300">
          ResQLink
        </span>
      )}
    </div>
  );
};

export default Logo;
