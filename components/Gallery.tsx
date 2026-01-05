import React from 'react';

const IMAGES = [
  "https://picsum.photos/id/1031/800/600", // Modern architecture
  "https://picsum.photos/id/1036/800/800", // Interior detail
  "https://picsum.photos/id/1048/800/600", // Building exterior
  "https://picsum.photos/id/160/800/800", // Pool area
  "https://picsum.photos/id/1029/1200/600", // Landscape wide
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-[#FDFCF8]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {/* Large item taking 2x2 on desktop */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden h-[600px]">
           <img 
            src={IMAGES[4]} 
            alt="Main View" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Smaller items */}
        {IMAGES.slice(0, 4).map((src, idx) => (
          <div key={idx} className="relative group overflow-hidden h-[300px]">
            <img 
              src={src} 
              alt={`Gallery ${idx}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
        ))}
      </div>
      
      <div className="py-20 text-center bg-dark-900 text-white">
        <h3 className="text-3xl font-serif mb-2">Хотите увидеть больше?</h3>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto font-light">
          Скачайте презентацию проекта, чтобы увидеть планировки всех типов апартаментов и детальные рендеры интерьеров.
        </p>
      </div>
    </section>
  );
};