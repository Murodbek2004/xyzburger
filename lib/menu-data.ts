export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'combo' | 'strips' | 'drinks' | 'sauces'
  tags?: string[]
}

export const menuItems: MenuItem[] = [
  // Комбо
  {
    id: 'combo-1',
    name: 'XYZ Classic Combo',
    description: 'Классический бургер, картофель фри и напиток на выбор',
    price: 54 900,
    image: '/images/combo-classic.jpg',
    category: 'combo',
    tags: ['Хит продаж']
  },
  {
    id: 'combo-2',
    name: 'Double XYZ Combo',
    description: 'Двойной бургер с беконом, большая порция фри и напиток',
    price: 74 900,
    image: '/images/combo-double.jpg',
    category: 'combo',
    tags: ['Для голодных']
  },
  {
    id: 'combo-3',
    name: 'Spicy XYZ Combo',
    description: 'Острый бургер с халапеньо, фри со специями и напиток',
    price: 64 900,
    image: '/images/combo-spicy.jpg',
    category: 'combo',
    tags: ['Острое']
  },
  {
    id: 'combo-4',
    name: 'Cheese Lover Combo',
    description: 'Тройной сыр бургер, сырные шарики и напиток',
    price: 69 900,
    image: '/images/combo-cheese.jpg',
    category: 'combo'
  },
  
  // Стрипсы
  {
    id: 'strips-1',
    name: 'Куриные стрипсы 6 шт',
    description: 'Хрустящие куриные стрипсы в панировке',
    price: 29 900,
    image: '/images/strips-6.jpg',
    category: 'strips'
  },
  {
    id: 'strips-2',
    name: 'Куриные стрипсы 12 шт',
    description: 'Большая порция хрустящих куриных стрипсов',
    price: 49 900,
    image: '/images/strips-12.jpg',
    category: 'strips',
    tags: ['Выгодно']
  },
  {
    id: 'strips-3',
    name: 'Острые стрипсы 6 шт',
    description: 'Стрипсы в остром маринаде с перцем чили',
    price: 32 900,
    image: '/images/strips-spicy.jpg',
    category: 'strips',
    tags: ['Острое']
  },
  {
    id: 'strips-4',
    name: 'Стрипсы BBQ 6 шт',
    description: 'Стрипсы в соусе барбекю с дымком',
    price: 34 900,
    image: '/images/strips-bbq.jpg',
    category: 'strips'
  },
  
  // Напитки
  {
    id: 'drink-1',
    name: 'Coca-Cola',
    description: 'Классическая Coca-Cola 0.5л',
    price: 12 900,
    image: '/images/drink-cola.jpg',
    category: 'drinks'
  },
  {
    id: 'drink-2',
    name: 'Fanta',
    description: 'Апельсиновая Fanta 0.5л',
    price: 12 900,
    image: '/images/drink-fanta.jpg',
    category: 'drinks'
  },
  {
    id: 'drink-3',
    name: 'XYZ Shake Vanilla',
    description: 'Ванильный молочный коктейль',
    price: 24 900,
    image: '/images/shake-vanilla.jpg',
    category: 'drinks',
    tags: ['Десертное']
  },
  {
    id: 'drink-4',
    name: 'XYZ Shake Chocolate',
    description: 'Шоколадный молочный коктейль',
    price: 24 900,
    image: '/images/shake-chocolate.jpg',
    category: 'drinks',
    tags: ['Десертное']
  },
  
  // Соусы
  {
    id: 'sauce-1',
    name: 'XYZ Special Sauce',
    description: 'Фирменный соус XYZ Burger',
    price: 5 900,
    image: '/images/sauce-special.jpg',
    category: 'sauces',
    tags: ['Фирменный']
  },
  {
    id: 'sauce-2',
    name: 'BBQ Sauce',
    description: 'Классический соус барбекю с дымком',
    price: 4 900,
    image: '/images/sauce-bbq.jpg',
    category: 'sauces'
  },
  {
    id: 'sauce-3',
    name: 'Spicy Mayo',
    description: 'Острый майонез с чили',
    price: 4 900,
    image: '/images/sauce-spicy.jpg',
    category: 'sauces',
    tags: ['Острое']
  },
  {
    id: 'sauce-4',
    name: 'Cheese Sauce',
    description: 'Сырный соус для стрипсов и фри',
    price: 6 900,
    image: '/images/sauce-cheese.jpg',
    category: 'sauces'
  }
]

export const categories = [
  { id: 'combo', name: 'Комбо', icon: '🍔' },
  { id: 'strips', name: 'Стрипсы', icon: '🍗' },
  { id: 'drinks', name: 'Напитки', icon: '🥤' },
  { id: 'sauces', name: 'Соусы', icon: '🫙' }
] as const
