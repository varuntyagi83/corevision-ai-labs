import type { Product } from '@/components/ProductCard'

export const products: Product[] = [
  {
    id: 'kreashot',
    name: 'Kreashot',
    headline: 'AD CREATIVE.\nFAST.',
    description:
      'Product photo to Meta-ready creative in minutes. Built for performance marketers who can\'t wait on designers. Drop a product image — get a full ad set.',
    price: 150,
    featured: true,
    status: 'live',
    href: 'https://www.kreashot.com',
    learnMoreHref: '/products#kreashot',
    tags: ['AI', 'Ad Creative', 'Meta', 'Marketing'],
  },
  {
    id: 'voltic',
    name: 'Voltic',
    headline: 'COMPETITOR INTEL.\nREAL TIME.',
    description:
      'See every ad your competitors are running on Meta. Know what they\'re testing. Move faster than they do. Real-time creative intelligence for performance teams.',
    price: 100,
    featured: false,
    status: 'live',
    href: 'https://www.volticlens.com',
    learnMoreHref: '/products#voltic',
    tags: ['Intelligence', 'Competitor Analysis', 'Meta', 'Marketing'],
  },
  {
    id: 'georaydar',
    name: 'GEORAYDAR',
    headline: 'AI SEARCH.\nOWNED.',
    description:
      'Track your brand visibility across ChatGPT, Gemini, Perplexity, and Claude. See every gap. Fix it. Own your presence in the AI search era.',
    price: 100,
    featured: false,
    status: 'live',
    href: 'https://www.georaydar.com',
    learnMoreHref: '/products#georaydar',
    tags: ['AEO', 'AI Search', 'Brand', 'Analytics'],
  },
  {
    id: 'adprofit',
    name: 'AdProfit',
    headline: 'AD SPEND.\nPROFITABLE.',
    description:
      'Maximize your ad ROI with AI-powered budget optimization. Know exactly where every dollar works — and cut what doesn\'t. Built for DTC brands and media buyers.',
    price: 200,
    featured: false,
    status: 'live',
    href: 'https://www.rayprofit.com',
    learnMoreHref: '/products#adprofit',
    tags: ['ROI', 'Budget Optimization', 'DTC', 'Analytics'],
  },
  {
    id: 'intellisync',
    name: 'IntelliSync',
    headline: 'MARKET SIGNALS.\nAMPLIFIED.',
    description:
      'Monitor 8 digital platforms simultaneously, enrich signals with GPT-4o, and score your creative assets. One dashboard for all the intelligence your team needs.',
    price: 120,
    featured: false,
    status: 'live',
    href: 'https://intellisync-production.up.railway.app/',
    learnMoreHref: '/products#intellisync',
    tags: ['Intelligence', 'GPT-4o', 'Multi-Platform', 'Marketing'],
  },
  {
    id: 'market-intel',
    name: 'Market-Intel',
    headline: 'MARKETS.\nDECIPHERED.',
    description:
      'Live prices, news aggregation, technical indicators, and AI-driven buy/hold/sell advisories across 4 global markets. For serious investors who want signal, not noise.',
    price: 99,
    featured: false,
    status: 'live',
    href: 'https://market-intel-one.vercel.app/',
    learnMoreHref: '/products#market-intel',
    tags: ['Finance', 'AI', 'Real-Time', 'Analytics'],
  },
  {
    id: 'actguard',
    name: 'ActGuard',
    headline: 'COMPLIANCE.\nAUTOMATED.',
    description:
      'From AI system description to audit-ready documentation in minutes. Built for compliance officers who can\'t wait on lawyers. Classify your risk tier — get a full compliance package. 1 AI system included free. Subscribe for more.',
    price: null,
    featured: false,
    status: 'live',
    href: 'https://actguard-production.up.railway.app/',
    learnMoreHref: '/products#actguard',
    tags: ['AI', 'Compliance', 'EU AI Act', 'Legal Tech'],
    trialNote: '1 AI system free · More systems require a subscription',
  },
]

export const featuredProducts = products.filter(p => p.featured)
export const getProductById = (id: string) => products.find(p => p.id === id)
