import React from 'react';

export const MarketAnalysis: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">
              Рынок
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-dark-900">
              Анализ рынка
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Гостиничная индустрия — ведущий сектор экономики Индонезии, который на протяжении последних десяти лет приносит миллиарды долларов ежегодно. А Бали — ключевое туристическое направление в Индонезии, где спрос на отели особенно высок.
            </p>
            
            <ul className="space-y-6">
              {[
                "Согласно прогнозам министерства инвестиций и промышленности Индонезии, выручка от гостиничного бизнеса достигнет $4,9 млрд к концу 2025 года",
                "Согласно прогнозу индонезийских властей, с 2023 по 2027 годы ожидается рост годовой выручки на 7,01%, и она достигнет $5,60 млрд к 2027 году",
                "В 2022 году прямые иностранные инвестиции в рестораны и отели Индонезии составили примерно $498 млн",
                "По прогнозу, к 2027 году, число клиентов в отельной сфере вырастет до 30,05 млн человек"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                   <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                   <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
               <h3 className="font-serif text-xl mb-6 text-center text-dark-900">Рост Гостиничной Индустрии</h3>
               <div className="relative h-64 w-full flex items-end justify-between px-2 gap-2">
                 {[40, 55, 65, 70, 85, 95, 100].map((h, i) => (
                   <div key={i} className="w-full bg-gold-500/10 rounded-t-sm relative group hover:bg-gold-500/20 transition-colors">
                      <div 
                        className="absolute bottom-0 w-full bg-gold-500 rounded-t-sm transition-all duration-1000" 
                        style={{ height: `${h}%` }}
                      ></div>
                      <div className="absolute -bottom-6 w-full text-center text-[10px] text-gray-400 font-medium">
                        {2021 + i}
                      </div>
                   </div>
                 ))}
               </div>
               <div className="mt-10 text-center text-[10px] text-gray-400 italic">
                 * Данные основаны на прогнозах министерства инвестиций (CAGR 7.01%)
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};