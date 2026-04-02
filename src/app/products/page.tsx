import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

const productDetails: Record<string, { longDescription: string; features: string[] }> = {
  kreashot: {
    longDescription:
      'Kreashot turns a single product photo into a full Meta-ready ad set in minutes. Designed for performance marketers who can\'t wait on creative teams. Generate multiple ad variants, test hooks, and ship campaigns faster than your competitors.',
    features: [
      'Product photo → Meta ad in < 5 minutes',
      'Multiple creative variants per run',
      'Hook testing built in',
      'Direct Meta Ads Manager integration',
      'Brand kit support',
    ],
  },
  voltic: {
    longDescription:
      'Voltic gives you a real-time window into every ad your competitors are running on Meta. Know their creative strategy, their messaging, their angles — before they know yours.',
    features: [
      'Real-time Meta Ad Library scraping',
      'Creative categorization by angle & hook',
      'Spend estimation per creative',
      'Weekly intelligence digest',
      'Slack/email alerts for new competitor ads',
    ],
  },
  georaydar: {
    longDescription:
      'As AI search engines become the primary discovery layer, your brand needs to be visible where buyers are asking questions. GEORAYDAR tracks your presence across ChatGPT, Gemini, Perplexity, and Claude — and shows you exactly how to improve it.',
    features: [
      'Multi-AI search monitoring (ChatGPT, Gemini, Perplexity, Claude)',
      'Brand mention tracking & sentiment',
      'Gap analysis vs. competitors',
      'AEO optimization recommendations',
      'Weekly visibility score reports',
    ],
  },
  adprofit: {
    longDescription:
      'AdProfit helps DTC brands and media buyers maximize return on every dollar of ad spend. AI-powered budget allocation, cross-channel attribution, and automated bid optimization — all in one dashboard.',
    features: [
      'Cross-channel attribution modeling',
      'AI-powered budget reallocation',
      'ROAS optimization by creative & audience',
      'Automated bid management',
      'Profit-first reporting (not vanity metrics)',
    ],
  },
  intellisync: {
    longDescription:
      'IntelliSync monitors 8 digital platforms simultaneously, enriches every signal with GPT-4o, and surfaces the intelligence your marketing team actually needs. No more platform hopping — one source of truth.',
    features: [
      '8 platforms monitored in real time',
      'GPT-4o signal enrichment',
      'Creative asset scoring',
      'Intelligence brief generation',
      'Team collaboration built in',
    ],
  },
  actguard: {
    longDescription:
      'ActGuard takes your AI system description and generates a complete, audit-ready compliance package for the EU AI Act — risk tier classification, required documentation, conformity assessment checklist, and technical file templates. Built for compliance officers who need answers in minutes, not months.',
    features: [
      'Automated risk tier classification (Unacceptable / High / Limited / Minimal)',
      'Full compliance package generated from system description',
      'Audit-ready technical file templates',
      'Conformity assessment checklist per risk tier',
      'Full EU27 coverage · August 2026 deadline support',
    ],
  },
  'market-intel': {
    longDescription:
      'Market-Intel aggregates live prices, news, and technical indicators across 4 global markets, then layers on AI-driven buy/hold/sell advisories. For serious investors who want signal, not noise.',
    features: [
      'Live data across 4 global markets',
      'AI buy/hold/sell advisories',
      'Technical indicator dashboard',
      'News sentiment analysis',
      'AI stock screening engine',
    ],
  },
}

export default function ProductsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative border-b overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute inset-0 bg-glow-teal" />
        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
            style={{ color: '#1BB8C0' }}
          >
            Portfolio
          </p>
          <h1 className="font-display text-6xl sm:text-8xl text-white uppercase leading-none mb-5">
            7 Products.<br />
            <span style={{ color: '#1BB8C0' }}>All Live.</span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Each product solves a real marketing, intelligence, or analytics problem with AI. No demos. No waitlists. All live.
          </p>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Detailed product sections */}
        <div
          className="h-px mb-24"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(27,184,192,0.4), transparent)' }}
        />

        <div className="space-y-32">
          {products.map((product, i) => {
            const details = productDetails[product.id]
            const accentColor = product.featured ? '#C87941' : '#1BB8C0'
            const isEven = i % 2 === 0

            return (
              <div key={product.id} id={product.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
                    !isEven ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div className={!isEven ? 'lg:[direction:ltr]' : ''}>
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: accentColor }}
                      />
                      <span
                        className="font-mono text-xs uppercase tracking-[0.2em]"
                        style={{ color: accentColor }}
                      >
                        {product.name}
                      </span>
                    </div>
                    <h2 className="font-display text-5xl sm:text-6xl text-white uppercase leading-none mb-6">
                      {product.headline.split('\n').map((line, j) => (
                        <span key={j} className="block">
                          {j === 0 ? line : <span style={{ color: accentColor }}>{line}</span>}
                        </span>
                      ))}
                    </h2>
                    <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                      {details?.longDescription ?? product.description}
                    </p>

                    {/* Price callout */}
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="font-display text-5xl" style={{ color: accentColor }}>
                        ${product.price}
                      </span>
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>/month</span>
                      <span
                        className="ml-2 font-mono text-xs uppercase tracking-wider px-2 py-0.5"
                        style={{
                          color: accentColor,
                          background: `${accentColor}12`,
                          border: `1px solid ${accentColor}25`,
                        }}
                      >
                        7 days free
                      </span>
                    </div>

                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-display text-sm uppercase tracking-[0.18em] px-8 py-3.5 transition-all duration-200"
                      style={
                        product.featured
                          ? {
                              background: '#C87941',
                              color: 'white',
                              clipPath:
                                'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                            }
                          : {
                              background: 'transparent',
                              color: '#1BB8C0',
                              border: '1px solid rgba(27,184,192,0.4)',
                              clipPath:
                                'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                            }
                      }
                    >
                      Start Free Trial
                    </a>
                  </div>

                  <div className={!isEven ? 'lg:[direction:ltr]' : ''}>
                    {/* Feature list */}
                    <div
                      className="p-8"
                      style={{
                        background: 'linear-gradient(160deg, #0D1E35 0%, #091422 100%)',
                        border: `1px solid ${accentColor}20`,
                      }}
                    >
                      <p
                        className="font-mono text-xs uppercase tracking-[0.2em] mb-6"
                        style={{ color: accentColor }}
                      >
                        What you get
                      </p>
                      <ul className="space-y-4">
                        {details?.features.map(feat => (
                          <li key={feat} className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 font-mono text-xs" style={{ color: accentColor }}>
                              →
                            </span>
                            <span className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {product.tags.map(tag => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1"
                          style={{
                            color: 'var(--text-dim)',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.07)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl text-white uppercase mb-2">
              Something Different in Mind?
            </h3>
            <p className="text-base" style={{ color: 'var(--text-muted)' }}>
              Reach out — we're open to interesting AI projects.
            </p>
          </div>
          <a
            href="https://calendly.com/varun-tyagi83/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-display text-sm uppercase tracking-[0.18em] px-8 py-4 transition-all duration-200"
            style={{
              background: '#1BB8C0',
              color: '#060E1C',
              clipPath:
                'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
            }}
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </div>
  )
}
