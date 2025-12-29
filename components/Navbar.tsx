
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Sun, Moon, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import AuthModal from './AuthModal';
import Logo from './Logo';

const { NavLink } = ReactRouterDOM;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Technology', path: '/technology' },
    { label: 'Features', path: '/features' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ];

  // Helper to get a display name or placeholder from the user object
  const getUserDisplayName = () => {
    if (!user) return null;
    const name = user.user_metadata?.full_name || user.user_metadata?.name;
    if (name) return name;
    const emailPrefix = user.email?.split('@')[0];
    return emailPrefix || 'Explorer'; // "Explorer" acts as the placeholder name
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center p-0 md:p-4 pointer-events-none transition-all duration-500">
        <nav 
          className={`pointer-events-auto flex items-center justify-between w-full h-14 md:h-16 px-4 md:px-10 transition-all duration-500 ${
            isScrolled 
              ? 'max-w-6xl rounded-full bg-white/80 dark:bg-black/70 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-xl mt-2' 
              : 'max-w-full bg-transparent border-transparent mt-0'
          }`}
        >
          {/* Logo - Left aligned with Brand Name */}
          <div className="flex-1 flex justify-start items-center min-w-0">
            <NavLink to="/" className="transition-transform hover:scale-[1.02] active:scale-95 shrink-0">
              <Logo className="scale-110 md:scale-125 origin-left" />
            </NavLink>
          </div>

          {/* Center Links - Tesla Style Text Buttons */}
          <div className="hidden md:flex items-center space-x-1 shrink-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `px-4 py-1.5 text-[13px] font-semibold tracking-wide transition-all rounded-md hover:bg-black/5 dark:hover:bg-white/10 uppercase ${
                    isActive 
                      ? 'text-tesla-red dark:text-white' 
                      : 'text-gray-800 dark:text-gray-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Actions - Theme/Login/Name */}
          <div className="flex-1 flex justify-end items-center space-x-1 md:space-x-2 min-w-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-800 dark:text-gray-200 shrink-0"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-md px-1 py-0.5 max-w-[150px] sm:max-w-none">
              <button
                onClick={() => user ? signOut() : setIsAuthModalOpen(true)}
                className="px-3 py-1.5 text-[13px] font-bold uppercase tracking-wider text-gray-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-md transition-all flex items-center gap-2 shrink-0"
              >
                {user ? (
                  'Account'
                ) : (
                  <span className="flex items-center gap-1.5">
                     <User size={16} />
                     <span className="hidden sm:inline">Login</span>
                  </span>
                )}
              </button>

              {/* Display placeholder/user name after the login button */}
              {user && (
                <div className="flex items-center animate-fade-in min-w-0">
                  <div className="h-4 w-[1px] bg-gray-300 dark:bg-white/20 mx-1 shrink-0"></div>
                  <span className="hidden md:inline-block px-2 py-1 text-[11px] font-bold tracking-[0.15em] text-tesla-red dark:text-white uppercase truncate max-w-[100px] lg:max-w-[150px]">
                    {getUserDisplayName()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Navbar;
