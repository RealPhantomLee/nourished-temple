import { Product } from '@/types'

export const products: Product[] = [
  {
    _id: '1',
    slug: 'chondrus-crispus-sea-moss',
    name: 'Chondrus Crispus Sea Moss',
    description:
      'Wild-crafted Irish Sea Moss gel made from authentic Chondrus Crispus. Packed with 92 of the 102 minerals the human body requires. Supports thyroid function, gut health, skin clarity, and immune strength. Dr. Sebi approved.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
    featured: true,
  },
  {
    _id: '2',
    slug: 'n360-wellness-tonic',
    name: 'N360 Wellness Tonic',
    description:
      'Nourished Temple\'s signature alkaline wellness tonic. A proprietary blend of wildcrafted herbs and bio-mineral botanicals formulated to support full-body alkalinity, cellular hydration, and natural energy. Handcrafted in Los Angeles.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
    featured: true,
  },
  {
    _id: '3',
    slug: 'essential-daily-minerals',
    name: 'Essential 1 Daily Minerals',
    description:
      'Bio-mineral balanced supplement formulated to support the alkaline electric lifestyle. A plant-based mineral complex drawn from sea vegetables and wildcrafted botanicals. Supports bone density, nerve function, and cellular repair.',
    price: 40,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
    featured: true,
  },
  {
    _id: '4',
    slug: 'batana-oil',
    name: 'Batana Oil',
    description:
      'Pure wild-harvested Batana oil sourced from the Miskito communities of Honduras. Traditionally used to restore hair growth, prevent breakage, nourish the scalp, and deeply moisturize skin. Rich in tocotrienols and oleic acid.',
    price: 30,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
  },
  {
    _id: '5',
    slug: 'black-chickpeas',
    name: 'Black Chickpeas',
    description:
      'Organic heirloom black chickpeas (kala chana). An alkaline-approved protein source that provides iron, fiber, and complex carbohydrates. A staple for electric cell food meal prep — use in stews, curries, or salads.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1515543904279-1a18789f3681?w=600&h=600&fit=crop',
    category: 'Foods',
  },
  {
    _id: '6',
    slug: 'fonio',
    name: 'Fonio',
    description:
      'Ancient West African grain cultivated for thousands of years. Naturally gluten-free, nutrient-dense, and alkaline-friendly. Rich in amino acids methionine and cysteine. Cooks in 5 minutes — perfect for alkaline meal prep.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1586201375761-8a6c1045f8ce?w=600&h=600&fit=crop',
    category: 'Foods',
  },
  {
    _id: '7',
    slug: 'cannabis-oil',
    name: 'Cannabis Oil',
    description:
      'Handcrafted hemp-derived cannabis oil. Supports natural pain relief, stress reduction, and restorative sleep without psychoactive effects. Infused with complementary alkaline herbs for enhanced bioavailability. Inquire about dosing guidance.',
    price: 50,
    image: 'https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
  },
  {
    _id: '8',
    slug: 'waist-beads',
    name: 'Waist Beads',
    description:
      'Handcrafted traditional African waist beads. Used for centuries as a tool for body awareness, tracking wellness progress, femininity, and spiritual alignment. Each set is unique. Available in custom color combinations — contact us for personalized orders.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop',
    category: 'Accessories',
  },
  {
    _id: '9',
    slug: 'alkaline-meal-prep',
    name: 'Alkaline Meal Prep (Weekly)',
    description:
      'Custom-prepared alkaline electric plant-based meals handcrafted for your week. Available in four dietary styles: transitional, vegetarian, alkaline, or raw. Freshly made in Los Angeles. Contact us after purchase to discuss your preferences and pickup or delivery.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop',
    category: 'Meal Plans',
    featured: true,
  },
  {
    _id: '10',
    slug: 'detox-package',
    name: 'Detox Package',
    description:
      'A complete temple reset. Includes a curated selection of herbal compounds, alkaline teas, and a detox guide tailored to your goals. Designed to cleanse the digestive system, support lymphatic drainage, and restore cellular balance.',
    price: 85,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop',
    category: 'Packages',
  },
  {
    _id: '11',
    slug: 'herbal-tea-blend',
    name: 'Herbal Tea Blend',
    description:
      'Wildcrafted organic herbal tea blend selected for alkaline support. A warming, aromatic blend to start your day, support digestion, and calm the nervous system. Caffeine-free. Ethically sourced botanicals — no fillers, no additives.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca3d9cdd4?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
  },
  {
    _id: '12',
    slug: 'personalized-meal-plan',
    name: 'Personalized Meal Plan',
    description:
      'A custom alkaline electric meal plan built around your body, health goals, and lifestyle. Includes a full week of breakfast, lunch, and dinner suggestions, a shopping list, and preparation notes. Delivered digitally within 48 hours of consultation.',
    price: 60,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17ee0?w=600&h=600&fit=crop',
    category: 'Meal Plans',
  },
]

export const getFeaturedProducts = () => products.filter((p) => p.featured)
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug)
export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category)
export const getAllCategories = () => [...new Set(products.map((p) => p.category))]
