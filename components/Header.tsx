import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="relative z-50">
          <a href="#" className={`text-2xl font-serif font-bold tracking-tighter transition-colors ${
            isScrolled || mobileMenuOpen ? 'text-dark-900' : 'text-white'
          }`}>
            LYVIN<span className="text-gold-500">.</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-xs font-bold uppercase tracking-widest hover:text-gold-500 transition-colors ${isScrolled ? 'text-dark-900' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant={isScrolled ? 'primary' : 'white'} 
            onClick={onOpenModal}
            className="py-3 px-6 text-xs"
          >
            Скачать Инвестгид
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 
            <X className="text-dark-900 w-8 h-8" /> : 
            <Menu className={`${isScrolled ? 'text-dark-900' : 'text-white'} w-8 h-8`} />
          }
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 lg:hidden animate-in fade-in slide-in-from-top-10 duration-300">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-serif text-dark-900 hover:text-gold-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="h-4"></div>
          <Button onClick={() => {
            setMobileMenuOpen(false);
            onOpenModal();
          }}>
            Скачать Инвестгид
          </Button>
        </div>
      )}
    </header>
  );
};