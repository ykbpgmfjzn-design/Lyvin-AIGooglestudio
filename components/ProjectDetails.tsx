import React from 'react';
import { FEATURES } from '../constants';

export const ProjectDetails: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Intro Text */}
        <div className="flex flex-col md:flex-row gap-16 items-start mb-24">
          <div className="md:w-1/3">
            <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">
              Концепция
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Роскошь<br />в деталях
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              Lyvin Melasti — это эксклюзивный комплекс из 23 дизайнерских апартаментов, расположенный на живописном юге Бали. Проект сочетает в себе современную архитектуру, премиальный сервис и высокую инвестиционную привлекательность.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Каждый апартамент спроектирован так, чтобы обеспечить максимальную приватность и комфорт. Панорамное остекление наполняет пространство светом, а натуральные материалы в отделке создают атмосферу единения с природой.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="mb-6 text-gold-500 group-hover:text-dark-900 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};