import React from 'react';
import { Send } from 'lucide-react';
import Button from '../components/Button';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  // We use the 'theme' object from context just for conditional rendering if strictly needed in JS, 
  // but mostly we rely on Tailwind 'dark:' classes.
  const isDarkMode = theme === 'dark';

  return (
    <div className="min-h-screen pt-24 bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-white">Get in Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have questions about ResQLink? We're here to help.
            </p>
          </div>

          {/* Liquid Glass Form */}
          <form className="backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-2xl border transition-all duration-500 bg-white/70 border-white dark:bg-white/5 dark:border-white/10 dark:shadow-none">
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all bg-white border border-gray-300 focus:border-black text-black placeholder-gray-400 dark:bg-black/30 dark:border-white/10 dark:focus:border-white/40 dark:text-white dark:placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all bg-white border border-gray-300 focus:border-black text-black placeholder-gray-400 dark:bg-black/30 dark:border-white/10 dark:focus:border-white/40 dark:text-white dark:placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all resize-none bg-white border border-gray-300 focus:border-black text-black placeholder-gray-400 dark:bg-black/30 dark:border-white/10 dark:focus:border-white/40 dark:text-white dark:placeholder-gray-600"
                  placeholder="How can we help you?"
                />
              </div>

              <Button 
                variant={isDarkMode ? 'primary' : 'secondary'} 
                fullWidth
                className="mt-4 flex items-center justify-center gap-2"
                onClick={(e) => e.preventDefault()}
              >
                Send Message <Send size={16} />
              </Button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-600 dark:text-gray-400">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Support</h3>
              <p>support@resqlink.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Press</h3>
              <p>media@resqlink.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">HQ</h3>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;