import React, { useState } from 'react';
import { Button } from './Button';

export const Calculator: React.FC = () => {
  const [price, setPrice] = useState(150000);
  const [dailyRate, setDailyRate] = useState(150);
  const [occupancy, setOccupancy] = useState(75);

  const annualRevenue = dailyRate * 365 * (occupancy / 100);
  const expenses = annualRevenue * 0.35; // 35% for management & maintenance
  const netIncome = annualRevenue - expenses;
  const roi = (netIncome / price) * 100;

  return (
    <section id="investment" className="py-20 md:py-32 bg-[#F5F5F0]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-2 block">
            Калькулятор
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">Ваша Доходность</h2>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Inputs */}
          <div className="flex-1 space-y-8">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                Стоимость Апартамента ($)
              </label>
              <input 
                type="range" 
                min="100000" 
                max="300000" 
                step="5000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="mt-2 text-2xl font-serif">${price.toLocaleString()}</div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                Цена Аренды в сутки ($)
              </label>
              <input 
                type="range" 
                min="80" 
                max="300" 
                step="10"
                value={dailyRate}
                onChange={(e) => setDailyRate(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="mt-2 text-2xl font-serif">${dailyRate}</div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                Заполняемость (%)
              </label>
              <input 
                type="range" 
                min="40" 
                max="95" 
                step="5"
                value={occupancy}
                onChange={(e) => setOccupancy(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="mt-2 text-2xl font-serif">{occupancy}%</div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 bg-dark-900 text-white p-8 md:-m-12 md:ml-0 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <div className="relative z-10 space-y-6">
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Чистый доход в год</div>
                <div className="text-4xl font-serif text-gold-500">${Math.round(netIncome).toLocaleString()}</div>
              </div>
              
              <div className="pt-6 border-t border-gray-700">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">ROI</div>
                    <div className="text-3xl font-serif">{roi.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Окупаемость</div>
                    <div className="text-xl font-serif">{(price / netIncome).toFixed(1)} лет</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                 <p className="text-xs text-gray-500 mb-0 leading-tight">
                  *Расчет является приблизительным и не является публичной офертой. Включает 35% расходов на управление и обслуживание.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};