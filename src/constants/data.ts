export const upholsteryOptions = [
  { id: 'light-gray', name: 'Светло-серый', color: '#a6a3a3' },
  { id: 'dark-beige', name: 'Тёмно-бежевый', color: '#8B7355' },
  { id: 'milky', name: 'Молочный', color: '#F5F5DC' },
  { id: 'brown', name: 'Коричневый', color: '#492d19' },
  { id: 'dark-gray', name: 'Тёмно-серый', color: '#555555' },
  { id: 'blue', name: 'Синий', color: '#1E3A8A' },
  { id: 'emerald', name: 'Изумрудный', color: '#093424' },
  { id: 'terracotta', name: 'Терракотовый', color: '#a6573e' },
  { id: 'mustard', name: 'Горчичный', color: '#E1AD01' },
  { id: 'black', name: 'Чёрный', color: '#212121' },
  {
  id: "khaki",
  name: "Хаки",
  color: "#6F7051",
},
];

export const woodOptions = [
  { id: 'brown-oil', name: 'Коричневое масло', color: '#5D4037' },
  { id: 'natural-oil', name: 'Натуральное масло', color: '#fff6e3' },
  { id: 'gray-oil', name: 'Серое масло', color: '#9E9E9E' },
  { id: 'black-oil', name: 'Чёрное масло', color: '#212121' },
];

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  images?: string[];
  price: string;
  features: string[];
  dimensions: {
    unfolded: string;
    folded: string;
  };
  specs: {
    seatMaterial: string;
    frameMaterial: string;
    upholsteryMaterial?: string;
    coating: string;
    dimensions: string;
    weight: string;
    leadTime?: string;
  };
}

export const products: Product[] = [
  {
    id: 'supra-foldable',
    name: 'Складной стул SUPRA',
    image: '/glav-supra.png',
   description: 'Складной стул из березового шпона премиум качества для дома, кафе, ресторанов и террас.',
    price: '4 500 ₽',
    
    features: ['Берёзовая фанера', 'Ручная работа', 'Выдерживает до 130 кг'],
    dimensions: {
      unfolded: '85х45х50 см',
      folded: '25х8х86 см'
    },
    specs: {
      seatMaterial: 'Гипоалергенный пенополиуретан',
      frameMaterial: 'Березовый шпон',
      upholsteryMaterial: 'Антивандальный велюр',
      coating: 'Масло Borma',
      dimensions: '53х48х73 см',
      weight: '6 кг'
    }
  },
  {
    id: 'supra-semi-bar',
    name: 'Полубарный стул Supra',
    description: 'Комфортный полубарный стул с эргономичной спинкой.',
    image: '/barnyu.png',
    
    price: '5 990 ₽',
    features: ['Устойчивость', 'Стильный дизайн', 'Долговечность'],
    dimensions: {
  unfolded: '53×50×99 см',
  folded: '53×8×115 см'
},
    specs: {
  seatMaterial: 'Гипоаллергенный пенополиуретан',
  frameMaterial: 'Березовый шпон',
  upholsteryMaterial: 'Антивандальный велюр',
  coating: 'Масло Borma',
  dimensions: '53×50×99 см',
  
  weight: '7 кг'
 }
  },
  {
    id: 'alba',
    name: 'Стул Alba',
    description: 'Минималистичный дизайн и непревзойденный комфорт в каждой детали.',
    image: '/albatsk (1).png',
    price: '4 500 ₽',
    features: ['Эргономика', 'Скандинавский стиль'],
    dimensions: {
      unfolded: '82х50х52 см',
      folded: '-'
    },
    specs: {
      seatMaterial: 'Гипоалергенный пенополиуретан',
      frameMaterial: 'Березовый шпон',
      upholsteryMaterial: 'Антивандальный велюр',
      coating: 'Масло Borma',
      dimensions: '53х48х73 см',
      weight: '6 кг'
    }
  },
  {
    id: 'malina',
    name: 'Стул Malina',
    description: 'Яркий акцент для вашей столовой зоны.',
    image: '/malinamolk (4).jpg',
    price: '2 990 ₽',
    features: ['Уникальная форма', 'Ручная шлифовка'],
    dimensions: {
      unfolded: '42х41х80 см',
      folded: '-'
    },
    specs: {
      seatMaterial: 'Гипоаллергенный пенополиуретан',
      frameMaterial: 'Березовый шпон',
      coating: 'Масло Borma',
      dimensions: '42х41х80 см',
      weight: '5 кг',
      leadTime: '14-21 день'
    }
  },
  {
    id: 'chaise-longue',
    name: 'Шезлонг',
    description: 'Идеальное решение для отдыха в загородном доме или на террасе.',
    image: 'шезлонгмол1 (4).png',
    price: '3 999 ₽',
    features: ['Анатомическая форма', 'Влагостойкость'],
    dimensions: {
  unfolded: "90х160х60 см",
  folded: "не указан",
},
    specs: {
      seatMaterial: 'Синтешар (силиконизированное полиэфирное волокно)',
      frameMaterial: 'Березовый шпон',
      coating: 'Масло Borma',
       upholsteryMaterial: "Oxford",
      dimensions: '97×57×60–93,5 см',
      weight: '12 кг',
      leadTime: '21-30 дней'
    }
  },
  
  {
  id: 'round-table',
  name: 'Круглый стол',
  description: 'Центр притяжения для всей семьи.',
  image: '/stol (1).jpg',
images: [
  '/stol (1).jpg',
  '/stol (8).jpg',
  '/stol (2).jpg',
  '/stol (3).jpg',
   '/stol (4).jpg',
  '/stol (5).jpg',
  '/stol (6).jpg',
  '/stol (7).jpg',
  '/stol (1).png'
],
  price: '6 990 ₽',
  features: ['Массив дерева', 'Надежная конструкция'],
  dimensions: {
    unfolded: '90x75 см',
    folded: '-'
  },
  specs: {
    seatMaterial: '-',
   frameMaterial: "Березовый шпон",
coating: "Масло Borma",
 dimensions: "90×75 см",
weight: "15 кг",
    
    leadTime: '30–45 дней'
  }
},

  
];
