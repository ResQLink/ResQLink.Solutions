
import React, { useState, useEffect } from 'react';
// Use namespace import to resolve potential export recognition issues in the environment
import * as ReactRouterDOM from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Features from './pages/Features';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Destructure from namespace
const { HashRouter, Routes, Route, useLocation } = ReactRouterDOM;

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (2.5s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        {loading ? (
          <Loader />
        ) : (
          <HashRouter>
            <ScrollToTop />
            {/* Global container defines base text/bg colors for both modes */}
            <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-black dark:text-white font-sans selection:bg-red-500 selection:text-white transition-colors duration-300 animate-fade-in">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/technology" element={<Technology />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </HashRouter>
        )}
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
