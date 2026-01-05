import React, { useState } from 'react';
import { X, Check, ArrowRight, ChevronLeft } from 'lucide-react';
import { Button } from './Button';
import { QUIZ_QUESTIONS } from '../constants';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  if (!isOpen) return null;

  const handleOptionSelect = (option: string) => {
    const currentQuestion = QUIZ_QUESTIONS[step];
    setAnswers({ ...answers, [currentQuestion.id]: option });
    
    if (step < QUIZ_QUESTIONS.length) {
      setTimeout(() => setStep(step + 1), 300); // Small delay for better UX
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send formData + answers to your backend
    console.log({ ...formData, quiz: answers });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark-900/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-[#FDFCF8] w-full max-w-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white">
           <div className="flex items-center space-x-2">
             {step > 0 && !isSubmitted && (
               <button onClick={handleBack} className="text-gray-400 hover:text-dark-900 transition-colors">
                 <ChevronLeft className="w-5 h-5" />
               </button>
             )}
             <span className="text-xs font-bold tracking-widest text-gold-500 uppercase">
               {isSubmitted ? 'Готово' : step < QUIZ_QUESTIONS.length ? `Вопрос ${step + 1}/${QUIZ_QUESTIONS.length}` : 'Контакты'}
             </span>
           </div>
           <button 
            onClick={onClose}
            className="text-gray-400 hover:text-dark-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="h-1 w-full bg-gray-100">
            <div 
              className="h-full bg-gold-500 transition-all duration-500 ease-out" 
              style={{ width: `${step < QUIZ_QUESTIONS.length ? ((step + 1) / QUIZ_QUESTIONS.length) * 60 : 90}%` }}
            />
          </div>
        )}

        <div className="p-8 md:p-12 overflow-y-auto">
          {!isSubmitted ? (
            <>
              {step < QUIZ_QUESTIONS.length ? (
                // Quiz Question Step
                <div className="space-y-8 animate-in slide-in-from-right-8 duration-300">
                  <h2 className="text-2xl md:text-3xl font-serif leading-tight">
                    {QUIZ_QUESTIONS[step].question}
                  </h2>
                  <div className="space-y-3">
                    {QUIZ_QUESTIONS[step].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(option)}
                        className={`w-full text-left p-5 border transition-all duration-200 flex justify-between items-center group
                          ${answers[QUIZ_QUESTIONS[step].id] === option 
                            ? 'border-gold-500 bg-gold-500/5 text-dark-900' 
                            : 'border-gray-200 hover:border-gold-500 hover:bg-gray-50 text-gray-600'
                          }`}
                      >
                        <span className="text-sm font-medium tracking-wide">{option}</span>
                        <ArrowRight className={`w-4 h-4 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity ${answers[QUIZ_QUESTIONS[step].id] === option ? 'opacity-100' : ''}`} />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                // Contact Form Step
                <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif mb-2">Куда отправить материалы?</h2>
                    <p className="text-gray-500 text-sm">
                      Оставьте свои контакты, чтобы получить презентацию с планировками и финансовую модель проекта.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Ваше Имя</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-gray-50 border-b border-gray-200 py-3 px-2 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors placeholder-gray-300"
                        placeholder="Иван"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-gray-50 border-b border-gray-200 py-3 px-2 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors placeholder-gray-300"
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Телефон (WhatsApp)</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-gray-50 border-b border-gray-200 py-3 px-2 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors placeholder-gray-300"
                        placeholder="+7 (999) 000-00-00"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" className="w-full justify-center">
                        Получить Презентацию
                      </Button>
                    </div>
                    <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                      Нажимая кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.
                    </p>
                  </form>
                </div>
              )}
            </>
          ) : (
            // Success Step
            <div className="text-center py-8 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600 border border-green-100">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-serif mb-4 text-dark-900">Спасибо!</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Презентация и инвестиционный расчет уже отправлены на вашу почту <strong>{formData.email}</strong>. <br/><br/>
                Наш менеджер свяжется с вами в ближайшее время в WhatsApp.
              </p>
              <Button onClick={onClose} variant="outline" className="min-w-[200px]">
                Вернуться на сайт
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};