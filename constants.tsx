import React from 'react';
import { NavItem, Feature, ProjectStat, QuizQuestion } from './types';
import { Home, Droplets, Sun, ShieldCheck, TrendingUp, Anchor } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Концепция', href: '#about' },
  { label: 'Расположение', href: '#location' },
  { label: 'Юниты', href: '#gallery' },
  { label: 'Инвестиции', href: '#investment' },
  { label: 'Контакты', href: '#contact' },
];

export const PROJECT_STATS: ProjectStat[] = [
  { value: '12-15%', label: 'ROI (Годовых)' },
  { value: 'Q4 2025', label: 'Завершение' },
  { value: '23', label: 'Апартамента' },
  { value: '89 лет', label: 'Leasehold' },
];

export const FEATURES: Feature[] = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Дизайнерский Интерьер",
    description: "Полная меблировка и премиальная отделка под ключ с использованием натуральных материалов."
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Приватные Бассейны",
    description: "Каждый юнит оборудован собственным бассейном или джакузи на балконе."
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Вид на Океан",
    description: "Панорамные виды на закат и Индийский океан благодаря расположению на холме."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Управление под Ключ",
    description: "Профессиональная управляющая компания берет на себя все заботы по сдаче в аренду."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Капитализация",
    description: "Рост стоимости актива на 30-40% к моменту завершения строительства."
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    title: "Пляж Меласти",
    description: "5 минут езды до одного из самых красивых и чистых пляжей Бали."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'goal',
    question: 'Для каких целей вы рассматриваете недвижимость?',
    options: ['Инвестиции (пассивный доход)', 'Для жизни и отдыха', 'Смешанная стратегия']
  },
  {
    id: 'budget',
    question: 'Какой у вас комфортный бюджет?',
    options: ['до $150,000', '$150,000 - $250,000', '$250,000+']
  },
  {
    id: 'timeline',
    question: 'Когда планируете покупку?',
    options: ['В ближайший месяц', 'В течение 3 месяцев', 'В течение полугода', 'Пока просто интересуюсь']
  }
];