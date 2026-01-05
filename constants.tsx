import React from 'react';
import { NavItem, Feature, ProjectStat, QuizQuestion, OtherProject } from './types';
import { Home, Droplets, Sun, ShieldCheck, TrendingUp, Anchor } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Концепция', href: '#concept' },
  { label: 'Локация', href: '#location' },
  { label: 'Комплекс', href: '#complex' },
  { label: 'Юниты', href: '#units' },
  { label: 'Инвестиции', href: '#investment' },
  { label: 'Контакты', href: '#contact' },
];

export const PROJECT_STATS: ProjectStat[] = [
  { value: '20', label: 'дизайнерских апартаментов' },
  { value: '4', label: 'этажа в комплексе' },
  { value: '2,5', label: 'гектара земли' },
  { value: '89', label: 'лет права аренды' },
];

export const APARTMENT_TYPES = [
  {
    id: 'type-a',
    name: "Апартаменты типа A",
    area: "102,4 м²",
    balcony: "36,4 м²",
    description: "Односпальные дизайнерские апартаменты на нулевом этаже. К услугам гостей — полностью оборудованная кухня, открытая гостиная и собственный бассейн. В гостиной предусмотрено панорамное остекление с захватывающим видом на океан.",
    image: "https://static.tildacdn.one/tild3666-3064-4965-a539-316463336330/-1_Melasti_Aparts.jpg",
    modelLink: "https://kuula.co/share/53XyN/collection/7KFzB?logo=0&info=1&fs=1&vr=0&sd=1&thumbs=1"
  },
  {
    id: 'type-b',
    name: "Апартаменты типа B",
    area: "80,1 м²",
    balcony: "78,8 м² (цоколь)",
    description: "Односпальные дизайнерские апартаменты представлены на цокольном, первом и втором этажах комплекса. К услугам гостей — полностью оборудованная кухня, открытая гостиная с панорамным остеклением, откуда виден океан, и собственный бассейн.",
    image: "https://static.tildacdn.one/tild6638-3334-4337-b730-663262656238/1_Melasti_Aparts.jpg",
    modelLink: "https://kuula.co/share/53XyN/collection/7KFzB?logo=0&info=1&fs=1&vr=0&sd=1&thumbs=1"
  },
  {
    id: 'type-c',
    name: "Апартаменты типа C",
    area: "113,7 м²",
    balcony: null,
    description: "Самые просторные апартаменты во всем комплексе. Они расположены в центральной части здания, на первом и втором этажах. Главное достоинство — широкий панорамный вид на океан, любоваться которым можно даже из ванной комнаты.",
    image: "https://static.tildacdn.one/tild6334-3130-4465-b330-333935303236/3_Melasti_Aparts.jpg",
    modelLink: "https://kuula.co/share/collection/7KFQf?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
  }
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

export const OTHER_PROJECTS: OtherProject[] = [
  {
    title: "Lyvin Uluwatu",
    description: "Виллы на скале с панорамным видом на океан.",
    image: "https://picsum.photos/id/1028/800/600",
    link: "#"
  },
  {
    title: "Lyvin Canggu",
    description: "Современные таунхаусы в центре событий.",
    image: "https://picsum.photos/id/1042/800/600",
    link: "#"
  }
];