import React from 'react';
import { Button } from './Button';
import { MapPin, Plane, Play } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Text Content */}
          <div>
            <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">
              Локация
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-dark-900">
              Живописный юг<br/>острова Бали
            </h2>
            
            <div className="space-y-8 text-gray-600 font-light leading-relaxed">
              <div>
                <h3 className="text-dark-900 font-serif text-xl mb-3">Расположение</h3>
                <ul className="list-disc list-outside ml-4 space-y-2">
                  <li>Живописный юг острова.</li>
                  <li>Уединенное и тихое место на холме без соседей, в 5 минутах езды от главной дорожной артерии.</li>
                  <li>Самый красивый пляж Бали — Меласти — всего в 7 минутах езды от комплекса.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-dark-900 font-serif text-xl mb-3">Инфраструктура</h3>
                <ul className="list-disc list-outside ml-4 space-y-2">
                  <li>Рядом расположен легендарный клуб Savaya.</li>
                  <li>Соседство с премиум отелями Bulgari, Alila, Six Senses и Karma Kandara, их рестораны и бичклабы открыты для посещения.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-dark-900 font-serif text-xl mb-3">Активный отдых</h3>
                <p>Вертолетная площадка, параглайдинг, гольф-поля, серф-споты, йога-студии, ретрит- и биохакинг-центры, бани, сауны, порты для яхт. Все находится в пределах 15 минут езды от комплекса.</p>
              </div>
            </div>

            <div className="mt-10">
              <a href="https://www.youtube.com/watch?v=TYD8D8UVbMM" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-3">
                  <Play className="w-4 h-4" /> Видео обзор локации
                </Button>
              </a>
            </div>
          </div>

          {/* Map Image */}
          <div className="relative">
            <img 
              src="https://static.tildacdn.one/tild3064-3662-4564-b630-376464333533/Map_Mel_New_Shorten.jpg" 
              alt="Melasti Location Map" 
              className="w-full h-full object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow-lg text-xs font-bold uppercase tracking-wider">
              7 мин до пляжа
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-gray-100 pt-12">
          <div className="text-center md:text-left">
            <div className="text-3xl font-serif text-dark-900 mb-1">7 мин.</div>
            <div className="text-xs uppercase text-gray-400 tracking-wider">до пляжа Меласти</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-serif text-dark-900 mb-1">15 мин.</div>
            <div className="text-xs uppercase text-gray-400 tracking-wider">Гольф-поля и серф-споты</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-serif text-dark-900 mb-1">SPA</div>
            <div className="text-xs uppercase text-gray-400 tracking-wider">и Фитнес в комплексе</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-serif text-dark-900 mb-1">Q4 2025</div>
            <div className="text-xs uppercase text-gray-400 tracking-wider">Сдача проекта</div>
          </div>
        </div>
      </div>
    </section>
  );
};