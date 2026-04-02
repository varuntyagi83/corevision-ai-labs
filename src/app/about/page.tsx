import Link from 'next/link'

const values = [
  {
    symbol: '→',
    title: 'Ship real things',
    body: 'Every product is production-ready. No demo-ware, no "coming soon" buttons that never ship.',
  },
  {
    symbol: '◈',
    title: 'AI-first, not AI-washed',
    body: 'We use AI where it genuinely makes the product better — not as a marketing bullet point.',
  },
  {
    symbol: '◇',
    title: 'Small surface, deep value',
    body: 'Products that do one thing well. We resist scope creep and feature bloat by design.',
  },
  {
    symbol: '⬡',
    title: 'Open by default',
    body: 'Where it makes sense, we open-source our work and build in public.',
  },
]

const timeline = [
  { year: '2024', event: 'CoreVision AI Labs founded in Berlin' },
  { year: '2024', event: 'Kreashot launched — AI ad creative for Meta' },
  { year: '2024', event: 'Voltic launched — real-time competitor ad intelligence' },
  { year: '2024', event: 'GEORAYDAR launched — AI search brand tracking' },
  { year: '2025', event: 'AdProfit, IntelliSync & Market-Intel ship' },
  { year: '2025', event: '7 products live across marketing, finance & legal tech AI' },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div
        className="relative border-b overflow-hidden"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-glow-teal" />
        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
            style={{ color: '#1BB8C0' }}
          >
            Studio
          </p>
          <h1 className="font-display text-6xl sm:text-8xl text-white uppercase leading-none mb-6">
            We Ship.<br />
            <span style={{ color: '#1BB8C0' }}>That's It.</span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-muted)' }}>
            An independent AI product studio based in Berlin. No consultancy, no agency, no pitch decks — just products.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] mb-6"
              style={{ color: '#1BB8C0' }}
            >
              Story
            </p>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                CoreVision AI Labs started with a simple frustration: too many AI "products" are demos dressed up as tools. Beautiful on a landing page. Useless in production.
              </p>
              <p>
                So we started building differently. Each product starts with a real problem — something that actually costs marketers money or slows analysts down. Then we build the smallest, most direct solution possible. No feature creep. No bloat.
              </p>
              <p>
                Based in Berlin, we operate as a lean, independent studio. No investors, no roadmap decks, no sales team. Just a portfolio of 7 AI products that people pay for.
              </p>
              <p className="text-white font-medium">
                If it doesn't charge money, it doesn't count. That's the filter.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] mb-6"
              style={{ color: '#1BB8C0' }}
            >
              Timeline
            </p>
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 pb-8 relative"
                >
                  {/* Vertical line */}
                  {i < timeline.length - 1 && (
                    <div
                      className="absolute left-[30px] top-8 bottom-0 w-px"
                      style={{ background: 'rgba(27,184,192,0.2)' }}
                    />
                  )}
                  {/* Year badge */}
                  <div className="shrink-0 relative">
                    <div
                      className="w-[60px] h-8 flex items-center justify-center font-mono text-xs"
                      style={{
                        background: 'rgba(27,184,192,0.08)',
                        border: '1px solid rgba(27,184,192,0.25)',
                        color: '#1BB8C0',
                      }}
                    >
                      {item.year}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed pt-1" style={{ color: 'var(--text-muted)' }}>
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section
        className="border-t border-b py-24"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-12"
            style={{ color: '#1BB8C0' }}
          >
            Founder
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              {/* Avatar placeholder */}
              <div
                className="w-20 h-20 flex items-center justify-center mb-6 font-display text-2xl text-white uppercase"
                style={{
                  background: 'linear-gradient(135deg, #0D1E35, #112540)',
                  border: '1px solid rgba(27,184,192,0.3)',
                }}
              >
                VT
              </div>
              <h2 className="font-display text-4xl text-white uppercase mb-1">
                Varun Tyagi
              </h2>
              <p
                className="font-mono text-xs uppercase tracking-[0.2em] mb-6"
                style={{ color: '#1BB8C0' }}
              >
                Founder · Berlin, Germany
              </p>
              <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                <p>
                  Builder and product thinker focused on the practical applications of AI. Not the theory, not the hype — the actual tools that make work better.
                </p>
                <p>
                  Founded CoreVision AI Labs to build the AI tools he wanted to use but couldn't find. Seven products later, the mission hasn't changed: build AI products that actually work.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/varuntyagi83' },
                  { label: 'GitHub', href: 'https://github.com/varuntyagi83' },
                  { label: 'Email', href: 'mailto:hi@corevisionailabs.com' },
                ].map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-widest transition-colors duration-200 hover:text-white"
                    style={{ color: '#1BB8C0' }}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(v => (
                <div
                  key={v.title}
                  className="p-5"
                  style={{
                    background: 'linear-gradient(160deg, #0D1E35 0%, #091422 100%)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <span
                    className="font-mono text-xl mb-3 block"
                    style={{ color: '#1BB8C0' }}
                  >
                    {v.symbol}
                  </span>
                  <h3 className="font-display text-base text-white uppercase mb-2">{v.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Ownership */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-6"
          style={{ color: '#1BB8C0' }}
        >
          Product Ownership
        </p>
        <div
          className="p-8"
          style={{
            background: 'linear-gradient(160deg, #0D1E35 0%, #091422 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
            AdProfit is a Google Ads intelligence platform developed and owned by CoreVision AI Labs. All products listed on this website — including Kreashot, Voltic, GEORAYDAR, AdProfit, IntelliSync, and Market-Intel — are developed, operated, and maintained by CoreVision AI Labs.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Our lead developer contact is{' '}
            <a href="mailto:hi@corevisionailabs.com" className="text-white hover:underline">
              hi@corevisionailabs.com
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl text-white uppercase mb-2">
              Ready to Build?
            </h3>
            <p className="text-base" style={{ color: 'var(--text-muted)' }}>
              See what we've shipped or reach out directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="font-display text-sm uppercase tracking-[0.18em] px-8 py-4 transition-all duration-200"
              style={{
                background: '#1BB8C0',
                color: '#060E1C',
                clipPath:
                  'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}
            >
              View Products
            </Link>
            <a
              href="https://calendly.com/varun-tyagi83/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm uppercase tracking-[0.18em] px-8 py-4 transition-all duration-200"
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.12)',
                clipPath:
                  'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
