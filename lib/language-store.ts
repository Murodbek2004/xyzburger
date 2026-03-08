import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Language = 'ru' | 'uz'

interface LanguageStore {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'ru',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-storage',
    }
  )
)

export const translations = {
  ru: {
    // Header
    nav: {
      combo: 'Комбо',
      strips: 'Стрипсы',
      drinks: 'Напитки',
      sauces: 'Соусы',
      promo: 'Промокоды',
    },
    cart: {
      title: 'Корзина',
      empty: 'Корзина пуста',
      emptyDesc: 'Добавьте что-нибудь вкусное из меню',
      toMenu: 'К меню',
      clear: 'Очистить корзину',
      total: 'Итого:',
      checkout: 'Оформить заказ',
      freeDelivery: 'Бесплатная доставка от 50 000 сум',
      item: 'товар',
      items2to4: 'товара',
      items5plus: 'товаров',
      added: 'Добавлено',
      addToCart: 'В корзину',
    },
    // Hero
    hero: {
      forGenerations: 'Для поколений',
      subtitle: 'Бургеры, которые объединяют поколения. Премиальное качество и неповторимый вкус в каждом укусе.',
      viewMenu: 'Смотреть меню',
      aboutUs: 'О нас',
      stats: {
        burgersSold: 'Бургеров продано',
        happyClients: 'Довольных клиентов',
        yearsExperience: 'Лет опыта',
      },
    },
    // About Section
    about: {
      whyUs: 'Почему',
      whyUsEnd: '?',
      description: 'Мы создаём бургеры, которые объединяют три поколения. От классических рецептов до смелых экспериментов — каждый найдёт что-то по душе.',
      features: {
        grill: {
          title: 'Готовим на гриле',
          description: 'Каждая котлета готовится на открытом огне для идеального вкуса',
        },
        love: {
          title: 'С любовью',
          description: 'Вкладываем душу в каждый бургер, который готовим для вас',
        },
        fresh: {
          title: 'Свежие продукты',
          description: 'Только свежие овощи и качественное мясо каждый день',
        },
        premium: {
          title: 'Премиум качество',
          description: 'Лучшие ингредиенты от проверенных поставщиков',
        },
      },
      forAllGenerations: 'Для всех поколений',
      generations: {
        genX: {
          description: 'Классические рецепты, проверенные временем',
        },
        millennials: {
          description: 'Инновации и смелые вкусовые сочетания',
        },
        genZ: {
          description: 'Тренды, фото-friendly подача и быстрота',
        },
      },
    },
    // Footer
    footer: {
      description: 'Бургеры для всех поколений. Премиальное качество и неповторимый вкус.',
      menu: 'Меню',
      contacts: 'Контакты',
      address: 'Сеул Мун',
      workHours: 'Ежедневно 10:00 — 23:00',
      subscription: 'Подписка',
      subscriptionDesc: 'Получайте эксклюзивные предложения и новинки первыми',
      emailPlaceholder: 'Ваш email',
      copyright: '© 2026 XYZ Burger. Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
    },
    // Promo
    promo: {
      title: 'Промокоды',
      subtitle: 'Используйте наши промокоды для получения скидок',
      code: 'Код',
      discount: 'Скидка',
      validUntil: 'Действует до',
      copy: 'Скопировать',
      copied: 'Скопировано!',
      back: 'Вернуться на главную',
      noPromos: 'Пока нет активных промокодов',
      checkLater: 'Загляните позже за новыми предложениями!',
      promoCodes: [
        { code: 'XYZ10', discount: '10%', validUntil: '31.03.2026', description: 'На первый заказ' },
        { code: 'COMBO20', discount: '20%', validUntil: '15.04.2026', description: 'На все комбо' },
        { code: 'FAMILY30', discount: '30%', validUntil: '01.05.2026', description: 'При заказе от 200 000 сум' },
      ],
    },
    // Tags
    tags: {
      hit: 'Хит продаж',
      spicy: 'Острое',
      profitable: 'Выгодно',
      forHungry: 'Для голодных',
      dessert: 'Десертное',
      signature: 'Фирменный',
    },
    // Currency
    currency: 'сум',
  },
  uz: {
    // Header
    nav: {
      combo: 'Kombo',
      strips: 'Stripslar',
      drinks: 'Ichimliklar',
      sauces: 'Souslar',
      promo: 'Promokodlar',
    },
    cart: {
      title: 'Savat',
      empty: 'Savat bo\'sh',
      emptyDesc: 'Menyudan biror narsa qo\'shing',
      toMenu: 'Menyuga',
      clear: 'Savatni tozalash',
      total: 'Jami:',
      checkout: 'Buyurtma berish',
      freeDelivery: '50 000 so\'mdan bepul yetkazib berish',
      item: 'mahsulot',
      items2to4: 'mahsulot',
      items5plus: 'mahsulot',
      added: 'Qo\'shildi',
      addToCart: 'Savatga',
    },
    // Hero
    hero: {
      forGenerations: 'Avlodlar uchun',
      subtitle: 'Avlodlarni birlashtiruvchi burgerlar. Premium sifat va har bir tishlashda noyob ta\'m.',
      viewMenu: 'Menyuni ko\'rish',
      aboutUs: 'Biz haqimizda',
      stats: {
        burgersSold: 'Burger sotildi',
        happyClients: 'Mamnun mijozlar',
        yearsExperience: 'Yillik tajriba',
      },
    },
    // About Section
    about: {
      whyUs: 'Nega',
      whyUsEnd: '?',
      description: 'Biz uch avlodni birlashtiruvchi burgerlar yaratamiz. Klassik retseptlardan tortib, jasur tajribalargacha — har kim o\'ziga yoqqan narsani topadi.',
      features: {
        grill: {
          title: 'Grilda tayyorlaymiz',
          description: 'Har bir kotlet ideal ta\'m uchun ochiq olovda pishiriladi',
        },
        love: {
          title: 'Mehr bilan',
          description: 'Siz uchun tayyorlaydigan har bir burgerga jon qo\'shamiz',
        },
        fresh: {
          title: 'Yangi mahsulotlar',
          description: 'Har kuni faqat yangi sabzavotlar va sifatli go\'sht',
        },
        premium: {
          title: 'Premium sifat',
          description: 'Ishonchli yetkazib beruvchilardan eng yaxshi ingredientlar',
        },
      },
      forAllGenerations: 'Barcha avlodlar uchun',
      generations: {
        genX: {
          description: 'Vaqt sinovidan o\'tgan klassik retseptlar',
        },
        millennials: {
          description: 'Innovatsiyalar va jasur ta\'m kombinatsiyalari',
        },
        genZ: {
          description: 'Trendlar, foto-friendly taqdimot va tezlik',
        },
      },
    },
    // Footer
    footer: {
      description: 'Barcha avlodlar uchun burgerlar. Premium sifat va noyob ta\'m.',
      menu: 'Menyu',
      contacts: 'Kontaktlar',
      address: 'Seul Mun',
      workHours: 'Har kuni 10:00 — 23:00',
      subscription: 'Obuna',
      subscriptionDesc: 'Eksklyuziv takliflar va yangilanishlarni birinchilar qatorida oling',
      emailPlaceholder: 'Elektron pochtangiz',
      copyright: '© 2026 XYZ Burger. Barcha huquqlar himoyalangan.',
      privacy: 'Maxfiylik siyosati',
      terms: 'Foydalanish shartlari',
    },
    // Promo
    promo: {
      title: 'Promokodlar',
      subtitle: 'Chegirmalar olish uchun promokodlarimizdan foydalaning',
      code: 'Kod',
      discount: 'Chegirma',
      validUntil: 'Amal qilish muddati',
      copy: 'Nusxalash',
      copied: 'Nusxalandi!',
      back: 'Bosh sahifaga qaytish',
      noPromos: 'Hozircha faol promokodlar yo\'q',
      checkLater: 'Yangi takliflar uchun keyinroq tashrif buyuring!',
      promoCodes: [
        { code: 'XYZ10', discount: '10%', validUntil: '31.03.2026', description: 'Birinchi buyurtmaga' },
        { code: 'COMBO20', discount: '20%', validUntil: '15.04.2026', description: 'Barcha komboga' },
        { code: 'FAMILY30', discount: '30%', validUntil: '01.05.2026', description: '200 000 so\'mdan buyurtmaga' },
      ],
    },
    // Tags
    tags: {
      hit: 'Eng ko\'p sotilgan',
      spicy: 'Achchiq',
      profitable: 'Foydali',
      forHungry: 'Och qorinlar uchun',
      dessert: 'Shirinlik',
      signature: 'Maxsus',
    },
    // Currency
    currency: 'so\'m',
  },
}

export function useTranslation() {
  const { language } = useLanguageStore()
  return translations[language]
}

export function formatPrice(price: number): string {
  return price.toLocaleString('uz-UZ')
}
