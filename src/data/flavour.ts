import { Flavor, Ingredient } from '@/data/types';

const DUMMY_IMAGE = '/placeholder.svg';

export const FLAVORS: Flavor[] = [
  {
    id: 'original-dates-cola',
    name: 'Dates Based Cola',
    tagline: 'Natural Energy. Real You.',
    accentColor: '#D40B0F',
    glowColor: 'rgba(212, 11, 15, 0.55)',
    bgGradient:
      'radial-gradient(circle at 60% 40%, rgba(212, 11, 15, 0.22) 0%, rgba(11, 11, 13, 0.95) 70%)',

    showcaseLabel: 'ORIGINAL FLAVOR',
    showcaseColor: '#ea2027',

    showcaseWatermark: DUMMY_IMAGE,
    canImage: DUMMY_IMAGE,
    secondaryCanImage: DUMMY_IMAGE,

    description:
      'A clean energy drink made with real dates, natural caffeine and essential vitamins. Stay energized, naturally.',

    caffeine: '120mg',
    caffeineVal: 80,
    sugar: '3g',
    sugarVal: 20,
    calories: '54Kcal',
    caloriesVal: 55,

    tasteNotes: [
      'Organic Medjool Dates',
      'Sparkling Cola Botanicals',
      'Madagascar Vanilla',
      'Green Coffee Bean',
    ],

    features: [
      {
        icon: 'Leaf',
        title: 'NATURAL INGREDIENTS',
        desc: '100% plant-based date reduction',
      },
      {
        icon: 'Zap',
        title: 'CLEAN ENERGY',
        desc: 'Zero jitter sustained vitality',
      },
      {
        icon: 'Heart',
        title: 'FOCUSED MIND',
        desc: 'L-theanine + B-complex focus',
      },
      {
        icon: 'Dumbbell',
        title: 'ACTIVE LIFESTYLE',
        desc: 'Rich in potassium electrolytes',
      },
    ],

    price: 34.99,

    packSizes: [
      { label: '4-Pack Sampler', count: 4, price: 14.99 },
      { label: '12-Pack Case', count: 12, price: 34.99, popular: true },
      { label: '24-Pack Fridge Stash', count: 24, price: 62.99 },
    ],
  },

  {
    id: 'royal-amber-vanilla',
    name: 'Amber Date Vanilla',
    tagline: 'Velvety Smooth. Pure Vitality.',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.55)',
    bgGradient:
      'radial-gradient(circle at 60% 40%, rgba(245, 158, 11, 0.22) 0%, rgba(11, 11, 13, 0.95) 70%)',

    showcaseWatermark: DUMMY_IMAGE,
    canImage: DUMMY_IMAGE,
    secondaryCanImage: DUMMY_IMAGE,

    description:
      'Infused with golden Deglet Noor dates, warm bourbon vanilla pods, and organic green tea extract for smooth clarity.',

    caffeine: '115mg',
    caffeineVal: 75,
    sugar: '3.2g',
    sugarVal: 22,
    calories: '56Kcal',
    caloriesVal: 57,

    tasteNotes: [
      'Golden Honey Dates',
      'Bourbon Vanilla Bean',
      'Crisp Carbonation',
      'Light Caramel',
    ],

    features: [
      {
        icon: 'Leaf',
        title: 'DEGLET NOOR DATES',
        desc: 'Golden sweet sun-cured dates',
      },
      {
        icon: 'Zap',
        title: 'SMOOTH UPLIFT',
        desc: 'Gentle clean caffeine boost',
      },
      {
        icon: 'Heart',
        title: 'CALM EQUILIBRIUM',
        desc: 'Enhanced with calming adaptogens',
      },
      {
        icon: 'Dumbbell',
        title: 'CELLULAR HYDRATION',
        desc: 'Natural date mineral complex',
      },
    ],

    price: 34.99,

    packSizes: [
      { label: '4-Pack Sampler', count: 4, price: 14.99 },
      { label: '12-Pack Case', count: 12, price: 34.99, popular: true },
      { label: '24-Pack Fridge Stash', count: 24, price: 62.99 },
    ],
  },

  {
    id: 'midnight-dark-espresso',
    name: 'Dark Date Espresso',
    tagline: 'Intense Roasty Depth. High Octane.',
    accentColor: '#b45309',
    glowColor: 'rgba(180, 83, 9, 0.55)',
    bgGradient:
      'radial-gradient(circle at 60% 40%, rgba(180, 83, 9, 0.25) 0%, rgba(11, 11, 13, 0.95) 70%)',

    showcaseLabel: 'COFFEE',
    showcaseColor: '#3B1101',

    showcaseWatermark: DUMMY_IMAGE,
    canImage: DUMMY_IMAGE,
    showcaseBackground: DUMMY_IMAGE,
    secondaryCanImage: DUMMY_IMAGE,

    description:
      'Dark roasted Ethiopian Arabica cold brew married with rich caramelized dark Medjool date nectar. Maximum focus.',

    caffeine: '160mg',
    caffeineVal: 95,
    sugar: '2.8g',
    sugarVal: 18,
    calories: '49Kcal',
    caloriesVal: 50,

    tasteNotes: [
      'Single-Origin Arabica',
      'Dark Date Molasses',
      'Cacao Nibs',
      'Smoky Oak',
    ],

    features: [
      {
        icon: 'Leaf',
        title: 'DARK ROAST EXTRACT',
        desc: 'Direct-trade Ethiopian cold brew',
      },
      {
        icon: 'Zap',
        title: 'HIGH PERFORMANCE',
        desc: '160mg clean botanical caffeine',
      },
      {
        icon: 'Heart',
        title: 'COGNITIVE POWER',
        desc: "Lion's Mane & B6/B12 support",
      },
      {
        icon: 'Dumbbell',
        title: 'EXTENDED ENDURANCE',
        desc: 'Natural glycogen replenishment',
      },
    ],

    price: 36.99,

    packSizes: [
      { label: '4-Pack Sampler', count: 4, price: 15.99 },
      { label: '12-Pack Case', count: 12, price: 36.99, popular: true },
      { label: '24-Pack Fridge Stash', count: 24, price: 66.99 },
    ],
  },

  {
    id: 'citrus-blood-orange',
    name: 'Ruby Citrus Date',
    tagline: 'Crisp Electric Citrus. Crisp Fizz.',
    accentColor: '#ea580c',
    glowColor: 'rgba(234, 88, 12, 0.55)',
    bgGradient:
      'radial-gradient(circle at 60% 40%, rgba(234, 88, 12, 0.22) 0%, rgba(11, 11, 13, 0.95) 70%)',

    showcaseLabel: 'YUZU LEMON',
    showcaseColor: '#F2C104',

    showcaseWatermark: DUMMY_IMAGE,
    canImage: DUMMY_IMAGE,
    showcaseBackground: DUMMY_IMAGE,
    secondaryCanImage: DUMMY_IMAGE,

    description:
      'Zesty Sicilian blood orange zest blended with date nectar and ginger root extract for an invigorating effervescent snap.',

    caffeine: '110mg',
    caffeineVal: 72,
    sugar: '3.4g',
    sugarVal: 24,
    calories: '52Kcal',
    caloriesVal: 53,

    tasteNotes: [
      'Sicilian Blood Orange',
      'Fresh Crushed Ginger',
      'Sparkling Date Fizz',
      'Lime Peel',
    ],

    features: [
      {
        icon: 'Leaf',
        title: 'MEDITERRANEAN CITRUS',
        desc: 'Real blood orange fruit essence',
      },
      {
        icon: 'Zap',
        title: 'VIBRANT SPARK',
        desc: 'Fast-acting botanical refresh',
      },
      {
        icon: 'Heart',
        title: 'IMMUNITY + FOCUS',
        desc: 'Zinc, Vitamin C & Ginseng',
      },
      {
        icon: 'Dumbbell',
        title: 'FAST RECOVERY',
        desc: 'Electrolyte balance & hydration',
      },
    ],

    price: 34.99,

    packSizes: [
      { label: '4-Pack Sampler', count: 4, price: 14.99 },
      { label: '12-Pack Case', count: 12, price: 34.99, popular: true },
      { label: '24-Pack Fridge Stash', count: 24, price: 62.99 },
    ],
  },
];
