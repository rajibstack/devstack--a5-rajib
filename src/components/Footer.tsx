import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8 ">
      <div className="px-4 max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16 text-center lg:text-left">

          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#EC4899] to-[#7C3AED] flex items-center justify-center text-white font-jakarta font-black text-sm shadow-sm">DS
            </div>
              <span className="font-jakarta font-bold text-lg tracking-tight text-[#0F172A]">Dev
                <span className="text-[#DB2777]"> Stack</span>
              </span>
            </div>

            <p className="font-jakarta text-gray-500 text-sm max-w-sm mb-6 leading-relaxed text-center lg:text-left">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-gray-600">
              <a href="#github" className="hover:text-[#DB2777] transition-colors">GitHub</a>
              <span className="text-gray-300">•</span>
              <a href="#twitter" className="hover:text-[#DB2777] transition-colors">Twitter</a>
              <span className="text-gray-300">•</span>
              <a href="#linkedin" className="hover:text-[#DB2777] transition-colors">LinkedIn</a>
            </div>
          </div>
  
          <div className="hidden lg:flex flex-col items-start">
            <h4 className="font-inter font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
              Product
            </h4>
            <ul className="space-y-3 font-jakarta text-sm text-gray-500">
              <li><a href="#home" className="hover:text-[#DB2777] transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-[#DB2777]transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-[#DB2777] transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="hidden lg:flex flex-col items-start">
            <h4 className="font-inter font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3 font-jakarta text-sm text-gray-500">
              <li><a href="#about" className="hover:text-[#DB2777] transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-[#DB2777] transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-[#DB2777] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="hidden lg:flex flex-col items-start">
            <h4 className="font-inter font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 font-jakarta text-sm text-gray-500">
              <li><a href="#privacy-policy" className="hover:text-[#DB2777] transition-colors">Privacy Policy</a></li>
              <li><a href="#terms-of-service" className="hover:text-[#DB2777] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-row items-center justify-between gap-4 font-jakarta text-xs text-gray-500 text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#DB2777] transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-[#DB2777] transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};