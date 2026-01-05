import React, { useState } from 'react';

const FLOORS = [
  { id: 'basement', label: 'ЦОКОЛЬНЫЙ ЭТАЖ', image: 'https://static.tildacdn.one/tild3835-3733-4066-b337-646633383038/Layer_2.jpg' },
  { id: 'first', label: 'ПЕРВЫЙ ЭТАЖ', image: 'https://static.tildacdn.one/tild3431-3136-4033-b132-353733653130/Layer_3.jpg' },
  { id: 'second', label: 'ВТОРОЙ ЭТАЖ', image: 'https://static.tildacdn.one/tild3934-6232-4433-a264-633036616439/Layer_4.jpg' },
  { id: 'third', label: 'ТРЕТИЙ ЭТАЖ', image: 'https://static.tildacdn.one/tild6465-6664-4462-b136-316531333735/Layer_5.jpg' },
];

export const MasterPlan: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState(1);

  return (
    <section className="py-20 bg-[#FDFCF8]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">
            План Проекта
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-dark-900">Мастер-план</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Комплекс Lyvin Melasti расположен на участке площадью 2,5 га рядом с пляжем Меласти. На отдельно стоящем холме возвышаются 18 обособленных вилл с прямым видом на океан и небольшой корпус с апартаментами. Инфраструктура комплекса включает спа-центр с фитнес-залом, 25-метровый бассейн и ресторан.
              </p>
            </div>
            <div className="lg:w-2/3 w-full">
              <img 
                src="https://static.tildacdn.one/tild3133-3136-4633-b436-336332616262/Masterplan_Melasti.jpg" 
                alt="Master Plan" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-dark-900 text-center">Поэтажный план</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {FLOORS.map((floor, idx) => (
              <button
                key={floor.id}
                onClick={() => setActiveFloor(idx)}
                className={`px-6 py-3 text-sm uppercase tracking-widest transition-all duration-300 border rounded-sm ${
                  activeFloor === idx 
                    ? 'bg-dark-900 text-white border-dark-900' 
                    : 'bg-transparent text-gray-500 border-gray-200 hover:border-dark-900 hover:text-dark-900'
                }`}
              >
                {floor.label}
              </button>
            ))}
          </div>

          <div className="relative aspect-[16/9] bg-white rounded-lg border border-gray-100 overflow-hidden max-w-5xl mx-auto shadow-sm">
             <img 
              src={FLOORS[activeFloor].image}
              alt={FLOORS[activeFloor].label}
              className="w-full h-full object-contain p-4"
              onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/1200x800/white/e5e5e5?text=${FLOORS[activeFloor].label}`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};