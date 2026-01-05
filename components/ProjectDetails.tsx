import React from 'react';

export const ProjectDetails: React.FC = () => {
  return (
    <section id="concept" className="py-20 md:py-32 bg-[#FDFCF8]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
             <img 
              src="https://static.tildacdn.one/tild3039-6437-4637-b136-623139646637/Badge_Melasti_Apt_On.jpg"
              alt="Concept"
              className="w-full h-auto shadow-xl rounded-sm"
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-6 block">
              Концепция
            </span>
            <p className="text-xl md:text-2xl text-dark-900 font-serif leading-relaxed mb-8">
              "Обнаружив три гектара земли на холме посреди тропического леса, мы поняли, что хотим создать здесь нечто особенное. Так родилась идея построить комплекс уединенных вилл с захватывающим видом на океан, который никогда не станет рутиной."
            </p>
            <div className="w-24 h-1 bg-gold-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};