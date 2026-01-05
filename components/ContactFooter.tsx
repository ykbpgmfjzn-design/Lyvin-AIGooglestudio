import React from 'react';
import { Button } from './Button';
import { Facebook, Instagram, Send, MapPin, Phone, Mail } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 border-b border-gray-800 pb-20">
          
          {/* Left Column: Info */}
          <div>
            <span className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-4 block">Контакты</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Готовы обсудить <br/>инвестиции?</h2>
            <p className="text-gray-400 font-light mb-10 max-w-md leading-relaxed">
              Наши эксперты помогут подобрать лучшую стратегию, рассчитают детальную финансовую модель и ответят на юридические вопросы.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-gold-500 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">WhatsApp / Telegram</p>
                  <a href="tel:+628113881411" className="text-lg hover:text-gold-500 transition-colors">+62 811 3881 411</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-gold-500 mt-1" />
                <div>
                   <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Email</p>
                  <a href="mailto:sales@lyvinproperties.co" className="text-lg hover:text-gold-500 transition-colors">sales@lyvinproperties.co</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                <div>
                   <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Office</p>
                  <p className="text-lg text-gray-300">Jl. Melasti, Ungasan, Bali, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-12">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all text-gray-400">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all text-gray-400">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all text-gray-400">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-serif mb-6">Оставить заявку</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Имя</label>
                  <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-gold-500 text-white transition-colors" placeholder="Иван" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
                  <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-gold-500 text-white transition-colors" placeholder="email@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Телефон</label>
                <input type="tel" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-gold-500 text-white transition-colors" placeholder="+7 999 000 00 00" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Сообщение</label>
                <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-gold-500 text-white transition-colors" placeholder="Меня интересует..."></textarea>
              </div>
              <Button type="submit" variant="white" className="w-full">
                Отправить запрос
              </Button>
              <p className="text-[10px] text-gray-500 text-center mt-4">
                Ваши данные надежно защищены. Мы не передаем их третьим лицам.
              </p>
            </form>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <div className="mb-4 md:mb-0">
            &copy; 2024 Lyvin Properties. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};