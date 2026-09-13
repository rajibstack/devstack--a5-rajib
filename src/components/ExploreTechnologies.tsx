import React, { useState, useEffect } from 'react';
import technologiesData from '../data/technologies.json';
import { toast } from 'react-toastify';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export const ExploreTechnologies: React.FC = () => {
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologies(technologiesData);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToStack = (tech: Technology) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string, name: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${name} removed from stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed from stack!");
  };

  if (loading) {
    return (
      <div className="w-full min-h-[400px] flex flex-col items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 font-medium">Loading technologies...</p>
      </div>
    );
  }

  return (
    <section id="technologies" className="w-full py-8 lg:py-12 max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10 text-center lg:text-left">
            <h2 className="font-inter font-extrabold text-[30px] lg:text-[40px] text-gray-900 mb-2">Explore the <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Technologies</span>
            </h2>
            
            <p className="font-jakarta text-gray-600 text-sm lg:text-base">
            Pick one technology per category to build your ideal stack.
            </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
        
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech: Technology) => {
            const isAdded = stack.some((item) => item.id === tech.id);

            return (
              <div 
                key={tech.id} 
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 lg:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FCE7F3] text-[#DB2777]">
                      {tech.badge}
                    </span>
                  </div>

                  <div className="text-left mb-6">
                    <h3 className="font-jakarta font-bold text-lg lg:text-xl text-[#0F172A] mb-2">
                      {tech.name}
                    </h3>
                    <p className="font-jakarta text-[#64748B] text-xs lg:text-sm line-clamp-2">
                      {tech.description}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-5 bg-gray-50/70 py-2 px-3 rounded-lg border border-gray-100">
              <span className="font-jakarta text-[#475569] text-[11px] font-medium">{tech.category}</span>
                    <span className="font-jakarta text-[#64748B] text-[11px]">{tech.difficulty}</span>
                    <span className="flex items-center gap-1 font-semibold text-[#334155]">
                      <span className="text-amber-400">★</span> {tech.rating}
                    </span>
                  </div>

                  {isAdded ? (
                    <div className="w-full py-2.5 rounded-xl bg-[#FCE7F3] text-[#EC4899] font-semibold text-xs flex items-center justify-center gap-2 shadow-sm">
                      <span>✓ Added to Stack</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddToStack(tech)}
                      className="w-full py-2.5 rounded-xl font-semibold text-xs transition-all shadow-sm bg-[#0A0F1D] hover:bg-gray-800 text-white cursor-pointer"
                    >
                      Add to Stack
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6 lg:sticky lg:top-24 text-left">
          <div className="mb-4 text-left">
            <h3 className="font-inter font-bold text-lg text-gray-900">Your Stack</h3>
            <p className="font-jakarta text-xs text-gray-500 mt-0.5">
              {stack.length === 0 
                ? "No technologies selected yet." 
                : `${stack.length} Technology Selected`}
            </p>
          </div>

          {stack.length === 0 ? (
            <div className="border-2 border-dashed border-gray-100 rounded-xl py-10 lg:py-12 px-4 text-center">
              <p className="font-jakarta text-sm text-gray-400">Your stack is empty.</p>
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {stack.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-sm text-gray-900">{item.name}</h4>
                      <p className="font-jakarta text-[11px] text-gray-500">{item.category}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemoveFromStack(item.id, item.name)}
                    className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {stack.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="w-full py-2.5 rounded-xl font-semibold text-xs text-red-600 bg-red-50 hover:bg-red-100 transition-colors border border-red-100/60 cursor-pointer"
            >
              Remove All
            </button>
          )}
        </div>

      </div>
    </section>
  );
};