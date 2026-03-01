
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-purple-900/30 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          Chandu Tamada
        </h2>

        <nav className="flex flex-wrap justify-center gap-8 mb-8 text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
        </nav>

        <div className="flex gap-6 mb-10">
          {[
            { name: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', url: '#' },
            { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z', url: '#' },
            { name: 'LinkedIn', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4', url: 'https://www.linkedin.com/in/chandu-tamada/' },
            { name: 'Instagram', icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M21 11.5c0 4.5-3.5 8-8 8s-8-3.5-8-8 3.5-8 8-8 8 3.5 8 8z', url: 'https://www.instagram.com/c.h.a.n.d.u_444/' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url !== '#' ? '_blank' : undefined}
              rel={social.url !== '#' ? 'noopener noreferrer' : undefined}
              className="text-gray-400 hover:text-white transition-all transform hover:scale-125"
              aria-label={social.name}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d={social.icon}></path>
              </svg>
            </a>
          ))}
        </div>

        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Chandu Tamada. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
