import React from 'react';
import heroIllustration from '../assets/banner-stack.png'; 

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left">
    
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start justify-start">
          <h1 className="font-inter font-extrabold text-[42px] sm:text-[48px] lg:text-[60px] leading-[1.1] text-[#0F172A] mb-6">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          
          <p className="font-jakarta text-[#475569] text-base sm:text-lg mb-8 max-w-[550px]">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
            <a 
              href="#technologies"
              className="px-6 py-3 rounded-[8px] text-white font-semibold bg-gradient-to-r from-[#F97316] to-[#EC4899] shadow-md hover:opacity-95 transition-opacity text-center"
            >
              Explore Technologies
            </a>
            <a 
              href="#learn-more"
              className="px-6 py-3 rounded-[8px] text-gray-700 font-semibold border border-gray-300 hover:bg-gray-50 transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <img 
            src={heroIllustration}
            alt="Development Stack Illustration" 
            className="w-full max-w-[550px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;