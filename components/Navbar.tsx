'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { 
      href: '/', 
      label: 'Home', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      href: '/about', 
      label: 'About', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      href: '/projects', 
      label: 'Projects', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      href: '/contact', 
      label: 'Contact', 
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'bg-black/15 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-black/30' 
          : 'bg-black/10 backdrop-blur-3xl border border-white/10 shadow-lg shadow-black/20'
      }`}>
        <div className="px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo with enhanced styling */}
            <Link 
              href="/" 
              className="group relative text-2xl font-bold tracking-wider text-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Saiful Shaik</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10 px-2 py-1"></div>
            </Link>

            {/* Desktop Navigation with enhanced features */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-5 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10 shadow-lg shadow-primary/20'
                      : 'text-text-primary hover:text-primary hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </span>
                  {/* Active indicator */}
                  {isActive(item.href) && (
                    <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 animate-pulse"></div>
                  )}
                  {/* Hover underline */}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${
                    isActive(item.href) ? 'scale-x-100' : ''
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button with enhanced animation */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-3 text-text-primary hover:text-primary transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl bg-white/5 hover:bg-white/10"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 border-t border-white/10">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group relative px-4 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/10 border-l-4 border-primary'
                        : 'text-text-primary hover:text-primary hover:bg-white/5 border-l-4 border-transparent'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="flex items-center space-x-4">
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="font-medium text-lg">{item.label}</span>
                    </span>
                    {/* Mobile active indicator */}
                    {isActive(item.href) && (
                      <div className="absolute right-4 top-1/2 w-2 h-2 bg-primary rounded-full transform -translate-y-1/2 animate-pulse"></div>
                    )}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Social Links */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/5"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/5"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:saiful@example.com" 
                    className="text-text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-white/5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
