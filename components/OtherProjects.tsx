import React from 'react';
import { OTHER_PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const OtherProjects: React.FC = () => {
  return (
    <section className="py-20 bg-[#FDFCF8]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 uppercase tracking-wide">Другие проекты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OTHER_PROJECTS.map((project, idx) => (
            <a key={idx} href={project.link} className="group block relative overflow-hidden h-[400px] md:h-[500px]">
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                <div className="flex justify-between items-end border-b border-white/30 pb-6 mb-0 group-hover:mb-2 transition-all duration-300">
                  <div>
                    <h3 className="text-3xl font-serif mb-2">{project.title}</h3>
                    <p className="text-gray-200 font-light text-sm max-w-xs">{project.description}</p>
                  </div>
                  <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};