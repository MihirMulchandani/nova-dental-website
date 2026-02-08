import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { LOGO_SRC, CLINIC_NAME, NAV_ITEMS, PHONE_DISPLAY, PHONE_HREF, ADDRESS_LINE_1, ADDRESS_LINE_2, CITY_STATE } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 dark:bg-darkBg/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="h-12 w-12 relative flex-shrink-0 bg-white dark:bg-gray-200 rounded-full p-1 overflow-hidden shadow-sm">
                <img 
                    src={LOGO_SRC} 
                    alt={`${CLINIC_NAME} Logo`} 
                    className="h-full w-full object-contain"
                />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-deepSlate dark:text-white tracking-tight leading-none group-hover:text-medicalBlue transition-colors">
                {CLINIC_NAME.toUpperCase()}
              </span>
              <span className="text-xs font-medium text-softTeal tracking-widest uppercase">
                Ahmedabad
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-medicalBlue ${
                    isActive ? 'text-medicalBlue' : 'text-gray-600 dark:text-gray-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-medicalBlue text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-all shadow-sm"
            >
              <Phone size={16} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-medicalBlue p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-darkCard border-b border-gray-200 dark:border-gray-700 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block text-lg font-medium py-2 ${
                    isActive ? 'text-medicalBlue' : 'text-gray-600 dark:text-gray-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
               <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 w-full bg-medicalBlue text-white px-4 py-3 rounded-lg font-medium"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-white dark:bg-darkCard border-t border-gray-200 dark:border-gray-800 pt-12 pb-6 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
             <div className="h-10 w-10 bg-cream dark:bg-gray-700 rounded-full p-1 flex items-center justify-center overflow-hidden">
                <img 
                    src={LOGO_SRC} 
                    alt="Logo" 
                    className="h-full w-full object-contain"
                />
            </div>
            <h3 className="text-xl font-bold text-deepSlate dark:text-white">{CLINIC_NAME}</h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Gentle, modern, and trustworthy dental care for you and your family in the heart of Ahmedabad.
          </p>
          <div className="text-xs text-gray-400 border px-2 py-1 inline-block rounded border-gray-200 dark:border-gray-700">
            Portfolio Demo Project
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-deepSlate dark:text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-gray-500 dark:text-gray-400 hover:text-medicalBlue text-sm transition-colors">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-deepSlate dark:text-white mb-4">Contact Us</h4>
          <address className="not-italic text-sm text-gray-500 dark:text-gray-400 space-y-2">
            <p>{ADDRESS_LINE_1}</p>
            <p>{ADDRESS_LINE_2}</p>
            <p>{CITY_STATE}</p>
            <p className="pt-2">
                <a href={PHONE_HREF} className="hover:text-medicalBlue font-medium transition-colors">
                    {PHONE_DISPLAY}
                </a>
            </p>
          </address>
        </div>
      </div>
      
      <div className="border-t border-gray-100 dark:border-gray-700 pt-6 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>
        <p className="mt-1 opacity-60">This is a demo website created for portfolio purposes. Nova Dental is an imaginary clinic.</p>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};