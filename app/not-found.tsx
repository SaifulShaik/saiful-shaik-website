'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary opacity-50 mb-4">404</div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved, 
          deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Go to Homepage
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-text-secondary mb-4">Or explore these pages:</p>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/about" className="text-text-primary hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-text-primary hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-text-primary hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
