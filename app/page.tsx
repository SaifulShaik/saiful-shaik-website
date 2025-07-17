'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <div className="space-y-12 text-center">
          {/* Greeting */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.p 
              className="text-lg sm:text-xl text-secondary font-medium tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Hello, I'm
            </motion.p>
            
            {/* Name with gradient effect */}
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.3,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <motion.span 
                className="bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent animate-gradient-x"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Saiful
              </motion.span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-secondary via-primary to-white bg-clip-text text-transparent animate-gradient-x" 
                style={{ animationDelay: '1s' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Shaik
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Role/Title */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary"
              whileHover={{ scale: 1.02 }}
            >
              Full Stack Developer
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Crafting innovative digital experiences with clean code and user-centered design. 
              Passionate about building scalable web applications that make a difference.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/projects"
                className="group relative px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-white transition-all duration-300 transform hover:shadow-lg hover:shadow-primary/25 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <motion.span 
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -100 }}
                  whileHover={{ x: 0 }}
                ></motion.span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="group relative px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 transform"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav className="pt-8" variants={itemVariants}>
            <ul className="flex flex-wrap items-center justify-center gap-8 text-lg">
              {[
                { href: "/about", label: "About Me" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" }
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link 
                    href={item.href}
                    className="group relative text-text-primary hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Social Links */}
          <motion.div 
            className="flex items-center justify-center gap-6 pt-8"
            variants={itemVariants}
          >
            {[
              { 
                href: "https://github.com", 
                label: "GitHub",
                icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              },
              { 
                href: "https://linkedin.com", 
                label: "LinkedIn",
                icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              },
              { 
                href: "mailto:saiful@example.com", 
                label: "Email",
                icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                stroke: true
              }
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-text-secondary hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <svg className="w-6 h-6" fill={social.stroke ? "none" : "currentColor"} stroke={social.stroke ? "currentColor" : "none"} viewBox="0 0 24 24">
                  <path strokeLinecap={social.stroke ? "round" : undefined} strokeLinejoin={social.stroke ? "round" : undefined} strokeWidth={social.stroke ? 2 : undefined} d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 