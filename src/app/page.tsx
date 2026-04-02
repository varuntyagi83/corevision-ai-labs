import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-glow-teal" />
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{ background: 'linear-gradient(to top, #060E1C, transparent)' }}
        />

        {/* Decorative corner marks */}
        <div className="absolute top-24 left-8 w-8 h-8 border-t border-l opacity-20" style={{ borderColor: '#1BB8C0' }} />
        <div className="absolute top-24 right-8 w-8 h-8 border-t border-r opacity-20" style={{ borderColor: '#1BB8C0' }} />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l opacity-20" style={{ borderColor: '#1BB8C0' }} />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r opacity-20" style={{ borderColor: '#1BB8C0' }} />

        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          {/* Eyebrow */}
          <div className="animate-fade-up flex items-center gap-3 mb-8">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-sm font-mono text-xs tracking-widest uppercase"
              style={{
                border: '1px solid rgba(27,184,192,0.3)',
                background: 'rgba(27,184,192,0.06)',
                color: '#1BB8C0',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#1BB8C0' }} />
              Berlin · AI Product Studio
            </div>
            <div
              className="h-px flex-1 max-w-20"
              style={{ background: 'linear-gradient(90deg, rgba(27,184,192,0.5), transparent)' }}
            />
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 font-display text-6xl sm:text-8xl lg:text-[108px] text-white uppercase leading-none tracking-wide mb-4">
            We Build
          </h1>
          <h1
            className="animate-fade-up delay-200 font-display text-6xl sm:text-8xl lg:text-[108px] uppercase leading-none tracking-wide mb-4"
            style={{ color: '#1BB8C0' }}
          >
            AI Products
          </h1>
          <h1 className="animate-fade-up delay-300 font-display text-6xl sm:text-8xl lg:text-[108px] text-white uppercase leading-none tracking-wide mb-10">
            That Work.
          </h1>

          {/* Sub */}
          <p
            className="animate-fade-up delay-400 text-lg max-w-lg leading-relaxed mb-10"
            style={{ color: 'var(--text-muted)' }}
          >
            7 AI products. Real problems. Real users. Not demos, not pitch decks — software that ships and works.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-500 flex flex-wrap gap-4 mb-24">
            <Link
              href="/products"
              className="font-display text-sm uppercase tracking-[0.2em] px-8 py-4 transition-all duration-200"
              style={{
                background: '#1BB8C0',
                color: '#060E1C',
                clipPath:
                  'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}
            >
              View Products
            </Link>
            <Link
              href="/about"
              className="font-display text-sm uppercase tracking-[0.2em] px-8 py-4 transition-all duration-200"
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.12)',
                clipPath:
                  'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              }}
            >
              About the Studio
            </Link>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up delay-600 flex flex-wrap gap-12">
            {[
              { value: '7', label: 'Products Live' },
              { value: '2024', label: 'Founded' },
              { value: 'Berlin', label: 'HQ' },
            ].map(s => (
              <div key={s.label}>
                <p className="font-display text-4xl text-white uppercase">{s.value}</p>
                <p className="font-mono text-xs mt-1 uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT GRID ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p
              className="font-mono text-xs uppercase tracking-[0.2em] mb-3"
              style={{ color: '#1BB8C0' }}
            >
              Portfolio
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-white uppercase">
              Our Products
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors hover:text-white"
            style={{ color: 'var(--text-muted)' }}
          >
            View All
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* 3-column grid to match screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/products"
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: '#1BB8C0' }}
          >
            View All Products →
          </Link>
        </div>
      </section>

      {/* ─── ABOUT BLURB ───────────────────────────────────────── */}
      <section
        className="border-t border-b py-24"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
                style={{ color: '#1BB8C0' }}
              >
                The Studio
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-white uppercase leading-none mb-6">
                One Studio.<br />
                Six Products.<br />
                <span style={{ color: '#1BB8C0' }}>Zero Fluff.</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                CoreVision AI Labs is an independent AI product studio founded by Varun Tyagi in Berlin.
                We don't consult, we don't do agencies. We build products.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Every product in our portfolio solves a real problem with AI — ad creation, competitor intelligence, AI search visibility, market analysis. Each one ships, works, and charges money.
              </p>
              <Link
                href="/about"
                className="font-mono text-xs uppercase tracking-[0.18em] flex items-center gap-2 w-fit transition-opacity hover:opacity-70"
                style={{ color: '#1BB8C0' }}
              >
                About the studio
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Code card */}
            <div
              className="relative"
              style={{
                border: '1px solid rgba(27,184,192,0.2)',
                background: 'linear-gradient(160deg, #0D1E35 0%, #091422 100%)',
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center gap-2 px-5 py-3 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
                <span className="ml-2 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                  studio.ts
                </span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p style={{ color: 'var(--text-dim)' }}>
                  <span style={{ color: '#1BB8C0' }}>const</span>{' '}
                  <span className="text-white">studio</span>{' '}
                  <span style={{ color: 'var(--text-dim)' }}>=</span>{' '}
                  <span style={{ color: 'var(--text-muted)' }}>{'{'}</span>
                </p>
                {[
                  ['name', '"CoreVision AI Labs"'],
                  ['founder', '"Varun Tyagi"'],
                  ['location', '"Berlin, Germany"'],
                  ['founded', '2024'],
                  ['type', '"Independent Studio"'],
                  ['products', '6'],
                  ['philosophy', '"Ship. Charge. Iterate."'],
                ].map(([k, v]) => (
                  <p key={k} className="pl-6">
                    <span style={{ color: 'var(--text-muted)' }}>{k}</span>
                    <span style={{ color: 'var(--text-dim)' }}>: </span>
                    <span style={{ color: typeof v === 'string' && v.startsWith('"') ? '#22D0D9' : '#C87941' }}>
                      {v}
                    </span>
                    <span style={{ color: 'var(--text-dim)' }}>,</span>
                  </p>
                ))}
                <p style={{ color: 'var(--text-muted)' }}>{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div
          className="relative overflow-hidden text-center py-20 px-6"
          style={{
            background: 'linear-gradient(135deg, #0D1E35 0%, #091422 100%)',
            border: '1px solid rgba(27,184,192,0.2)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l" style={{ borderColor: '#1BB8C0' }} />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r" style={{ borderColor: '#1BB8C0' }} />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l" style={{ borderColor: '#1BB8C0' }} />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r" style={{ borderColor: '#1BB8C0' }} />

          {/* Glow */}
          <div className="absolute inset-0 bg-glow-teal" />

          <div className="relative">
            <p
              className="font-mono text-xs uppercase tracking-[0.25em] mb-5"
              style={{ color: '#1BB8C0' }}
            >
              Let's work together
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-white uppercase leading-none mb-5">
              Have an Idea?<br />
              <span style={{ color: '#1BB8C0' }}>Let's Build It.</span>
            </h2>
            <p className="text-base max-w-md mx-auto mb-10" style={{ color: 'var(--text-muted)' }}>
              We're always open to interesting projects at the intersection of AI and product.
            </p>
            <a
              href="https://calendly.com/varun-tyagi83/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-sm uppercase tracking-[0.2em] px-10 py-4 transition-all duration-200 hover:bg-opacity-90"
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
      </section>
    </>
  )
}
