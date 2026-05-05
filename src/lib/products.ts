import { Product } from '@/types'

export const products: Product[] = [
  {
    _id: '1',
    slug: 'chondrus-crispus-sea-moss',
    name: 'Chondrus Crispus Sea Moss',
    description: 'Wild-crafted Irish Sea Moss gel. Rich in 92 of 102 minerals the body needs. Supports thyroid, skin, hair, and immune health.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1518495942364-bf3f5e0e8e8d?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
    featured: true,
  },
  {
    _id: '2',
    slug: 'n360-wellness-tonic',
    name: 'N360 Wellness Tonic',
    description: 'Alchemic herbal tonic blend crafted for daily wellness. Supports alkalinity and cellular health with organic wild-harvested herbs.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
    featured: true,
  },
  {
    _id: '3',
    slug: 'essential-daily-minerals',
    name: 'Essential 1 Daily Minerals',
    description: 'Bio-mineral balanced supplement formulated to support your alkaline electric lifestyle. Plant-based mineral complex.',
    price: 40,
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8d72?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
    featured: true,
  },
  {
    _id: '4',
    slug: 'batana-oil',
    name: 'Batana Oil',
    description: 'Pure wild-harvested Batana oil from Honduras. Traditionally used for hair growth, skin nourishment, and temple healing.',
    price: 30,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
  },
  {
    _id: '5',
    slug: 'black-chickpeas',
    name: 'Black Chickpeas',
    description: 'Organic black chickpeas. Alkaline-friendly protein source. Perfect for electric cell food meals.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1515543904279-0a12a8b0c204?w=600&h=600&fit=crop',
    category: 'Foods',
  },
  {
    _id: '6',
    slug: 'fonio',
    name: 'Fonio',
    description: 'Ancient African grain. Nutrient-dense, gluten-free, and alkaline-friendly. A staple in the electric lifestyle.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1586201375761-8a6c1045f8ce?w=600&h=600&fit=crop',
    category: 'Foods',
  },
  {
    _id: '7',
    slug: 'cannabis-oil',
    name: 'Cannabis Oil',
    description: 'Handcrafted cannabis-infused oil. Supports pain relief, relaxation, and temple healing. Ask about dosing.',
    price: 50,
    image: 'https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
  },
  {
    _id: '8',
    slug: 'waist-beads',
    name: 'Waist Beads',
    description: 'Handcrafted waist beads. Traditional African adornment for body awareness, femininity, and spiritual connection.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop',
    category: 'Accessories',
  },
  {
    _id: '9',
    slug: 'alkaline-meal-prep',
    name: 'Alkaline Meal Prep (Weekly)',
    description: 'Custom-prepared alkaline electric plant-based meals for the week. Transitional, vegetarian, raw, or mixed styles available.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop',
    category: 'Meal Plans',
    featured: true,
  },
  {
    _id: '10',
    slug: 'detox-package',
    name: 'Detox Package',
    description: 'Complete detox package with herbal compounds, teas, and guidance. Designed to cleanse and reset your temple.',
    price: 85,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop',
    category: 'Packages',
  },
  {
    _id: '11',
    slug: 'herbal-tea-blend',
    name: 'Herbal Tea Blend',
    description: 'Wild-crafted organic herbal tea blend. Supports alkalinity, digestion, and overall temple wellness.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop',
    category: 'Herbs & Compounds',
  },
  {
    _id: '12',
    slug: 'personalized-meal-plan',
    name: 'Personalized Meal Plan',
    description: 'Custom alkaline electric meal plan tailored to your body, goals, and lifestyle. Includes shopping list and recipes.',
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
