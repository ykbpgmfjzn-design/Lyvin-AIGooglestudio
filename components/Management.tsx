import React from 'react';

export const Management: React.FC = () => {
  const servicesLeft = [
    "Маркетинг",
    "Отельное обслуживание клиентов",
    "Техническое обслуживание",
    "Круглосуточная охрана",
    "Уборка"
  ];

  const servicesRight = [
    "Ежемесячные отчеты для инвесторов",
    "Сопровождение выплат по доходности",
    "Анализ рынка",
    "Управление бронированиями",
    "Юридическая поддержка"
  ];

  return (
    <section className="py-20 md:py-32 bg-dark-900 text-white relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">
            Управление
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            Цикл управления <br/>проектами
          </h2>
          <p className="text-gray-400 font-light text-lg leading-relaxed">
            Мы стремимся обеспечить своим гостям безупречный сервис, а собственникам — высокий доход. Именно поэтому управление проектами полностью берем на себя, предоставляя своим клиентам комплексные услуги «под ключ». Они включают также отельное обслуживание и создание необходимой инфраструктуры.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <div className="space-y-4">
            {servicesLeft.map((item, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-colors cursor-default">
                <span className="text-lg font-light tracking-wide">{item}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4 md:mt-12">
             {servicesRight.map((item, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-colors cursor-default">
                <span className="text-lg font-light tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};