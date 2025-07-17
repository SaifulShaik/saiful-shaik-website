import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Saiful Shaik. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <Link 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              GitHub
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              LinkedIn
            </Link>
            <Link 
              href="mailto:saiful@example.com"
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 