import React, { useState } from 'react';

export const Calculator: React.FC = () => {
  const [price, setPrice] = useState(150000);
  const [dailyRate, setDailyRate] = useState(150);
  const [occupancy, setOccupancy] = useState(75);

  const annualRevenue = dailyRate * 365 * (occupancy / 100);
  const expenses = annualRevenue * 0.35; // 35% for management & maintenance
  const netIncome = annualRevenue - expenses;
  const roi = (netIncome / price) * 100;

  return (
    <section id="investment" className="py-20 md:py-32 bg-[#F0EBE5]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-2 block">
            Инвестиции
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-dark-900">Финансовая Модель</h2>
          <p className="max-w-3xl text-gray-600 font-light leading-relaxed">
            Lyvin Properties стремится максимально раскрыть инвестиционный потенциал каждого проекта. Для этого мы проводим тщательный анализ рынка и исследуем множество разных локаций, чтобы найти самые перспективные.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Inputs */}
          <div className="flex-1 space-y-10">
            <div>
              <div className="flex justify-between mb-4">
                 <label className="text-xs uppercase tracking-wider text-gray-500">Стоимость Апартамента ($)</label>
                 <span className="font-serif text-lg">${price.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="100000" 
                max="300000" 
                step="5000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                 <label className="text-xs uppercase tracking-wider text-gray-500">Цена Аренды в сутки ($)</label>
                 <span className="font-serif text-lg">${dailyRate}</span>
              </div>
              <input 
                type="range" 
                min="80" 
                max="300" 
                step="10"
                value={dailyRate}
                onChange={(e) => setDailyRate(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                 <label className="text-xs uppercase tracking-wider text-gray-500">Заполняемость (%)</label>
                 <span className="font-serif text-lg">{occupancy}%</span>
              </div>
              <input 
                type="range" 
                min="40" 
                max="95" 
                step="5"
                value={occupancy}
                onChange={(e) => setOccupancy(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 bg-dark-900 text-white p-8 md:-m-12 md:ml-0 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Чистый доход в год</div>
                <div className="text-5xl font-serif text-gold-500">${Math.round(netIncome).toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-700">
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">ROI</div>
                  <div className="text-3xl font-serif">{roi.toFixed(1)}%</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Окупаемость</div>
                  <div className="text-3xl font-serif">{(price / netIncome).toFixed(1)} <span className="text-sm">лет</span></div>
                </div>
              </div>

              <div className="pt-4">
                 <p className="text-[10px] text-gray-500 mb-0 leading-tight">
                  *Расчет является приблизительным. Включает расходы на управление, маркетинг и обслуживание (35%).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};