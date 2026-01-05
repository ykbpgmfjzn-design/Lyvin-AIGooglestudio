import React from 'react';
import { Button } from './Button';
import { PROJECT_STATS } from '../constants';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/164/1920/1080" 
          alt="Melasti Apartments" 
          className="w-full h-full object-cover filter brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16 max-w-4xl">
        <div className="inline-flex items-center space-x-3 mb-6 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
           <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
           <span className="text-xs font-bold tracking-widest uppercase">Старт Продаж</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-none tracking-tight">
          Lyvin Melasti<br />
          <span className="text-gold-400">Apartments</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed">
          Коллекционные апартаменты с приватными бассейнами в 5 минутах от пляжа Меласти. Доходность до 15% годовых.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="white" onClick={onOpenModal} className="w-full sm:w-auto">
            Получить презентацию
          </Button>
          <a href="#about" className="w-full sm:w-auto">
             <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dark-900 w-full sm:w-auto">
              О проекте
            </Button>
          </a>
        </div>
      </div>

      {/* Stats Footer in Hero */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-dark-900/40 backdrop-blur-md hidden md:block">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {PROJECT_STATS.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-3xl font-serif text-white mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce md:hidden">
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};