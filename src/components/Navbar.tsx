import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm w-full">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          

          <div className="flex items-center md:hidden z-10">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>


          <div className="flex items-center cursor-pointer absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#7C3AED] flex items-center justify-center text-white font-jakarta font-black text-sm shadow-sm">
                DS
              </div>
              <span className="font-jakarta text-lg font-bold tracking-tight">
                <span className="text-[#0F172A]">Dev</span>
                <span className="text-[#DB2777]"> Stack</span>
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.name === 'Home'
                    ? 'text-[#DB2777] font-semibold'
                    : 'text-[#475569] hover:text-[#DB2777]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <button className="text-xs sm:text-sm font-medium text-[#334155] hover:text-[#DB2777] transition-colors whitespace-nowrap px-1 sm:px-2">
              Sign In
            </button>
            <button className="bg-[#D91B7E] hover:bg-[#0F172A] text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm transition-all whitespace-nowrap">
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 w-full shadow-lg">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                link.name === 'Home' ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;