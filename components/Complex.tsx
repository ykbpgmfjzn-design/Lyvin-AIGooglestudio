import React from 'react';
import { PROJECT_STATS } from '../constants';
import { Button } from './Button';
import { PlayCircle } from 'lucide-react';

export const Complex: React.FC = () => {
  return (
    <section id="complex" className="py-20 md:py-32 bg-[#F0EBE5]">
      <div className="container mx-auto px-6">
        
        {/* Intro */}
        <div className="mb-20 max-w-3xl">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">
            Комплекс
          </span>
          <p className="text-lg md:text-xl text-dark-900 font-light leading-relaxed mb-8">
            Lyvin Melasti Apartments расположен на отдельно стоящем холме, благодаря чему все апартаменты обладают панорамными видами на океан. Рядом с комплексом каскадом выстроены 18 одноэтажных вилл. Такое расположение обеспечивает резидентам приватность и тишину.
          </p>
          <p className="text-gray-600 mb-8">
            Земля находится в аренде на 89 лет. Фиксированный срок — 39 лет с приоритетным правом продления еще на 50 лет.
          </p>
          <a href="https://www.youtube.com/playlist?list=PLxdzyV31VulU37T1oUopNr6TeqsQ1LBbu" target="_blank" rel="noreferrer">
             <Button variant="outline" className="flex items-center gap-2">
               <PlayCircle className="w-5 h-5"/> Смотреть прогресс строительства
             </Button>
          </a>
        </div>

        {/* Big Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-dark-900/10 pt-16">
          {PROJECT_STATS.map((stat, idx) => (
            <div key={idx} className="text-left">
              <div className="text-5xl md:text-7xl font-serif text-dark-900 mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest text-gray-500 font-medium leading-normal max-w-[150px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Description Block */}
        <div className="mt-24 bg-white p-8 md:p-12 shadow-lg max-w-5xl">
          <h3 className="text-2xl font-serif mb-6">Инфраструктура</h3>
          <p className="text-gray-600 font-light leading-relaxed">
            Комплекс Lyvin Melasti расположен на участке площадью 2,5 га рядом с пляжем Меласти. На отдельно стоящем холме возвышаются 18 обособленных вилл с прямым видом на океан и небольшой корпус с апартаментами. Инфраструктура комплекса включает спа-центр с фитнес-залом, 25-метровый бассейн и ресторан.
          </p>
        </div>

      </div>
    </section>
  );
};