import React from 'react';
import { APARTMENT_TYPES } from '../constants';
import { Button } from './Button';
import { Box } from 'lucide-react';

export const ApartmentTypes: React.FC = () => {
  return (
    <section id="units" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">
            Юниты
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-dark-900">
            Апартаменты
          </h2>
        </div>

        <div className="space-y-32">
          {APARTMENT_TYPES.map((type, index) => (
            <div key={type.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img 
                    src={type.image} 
                    alt={type.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <h3 className="text-3xl md:text-4xl font-serif text-dark-900">{type.name}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-lg">
                  {type.description}
                </p>

                <div className="grid grid-cols-2 gap-8 border-y border-gray-100 py-8">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">Общая площадь</div>
                    <div className="text-2xl font-serif text-dark-900">{type.area}</div>
                  </div>
                  {type.balcony && (
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">Балкон / Цоколь</div>
                      <div className="text-2xl font-serif text-dark-900">{type.balcony}</div>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <a href={type.modelLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="flex items-center gap-2 text-xs">
                      <Box className="w-4 h-4" /> Посмотреть 3D модель
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};