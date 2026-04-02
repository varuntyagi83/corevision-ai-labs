import Link from 'next/link'

const products = [
  { name: 'Kreashot', href: '/products#kreashot' },
  { name: 'Voltic', href: '/products#voltic' },
  { name: 'GEORAYDAR', href: '/products#georaydar' },
  { name: 'AdProfit', href: '/products#adprofit' },
  { name: 'IntelliSync', href: '/products#intellisync' },
  { name: 'Market-Intel', href: '/products#market-intel' },
  { name: 'ActGuard', href: '/products#actguard' },
]

export default function Footer() {
  return (
    <footer
      className="relative z-10 mt-32 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {/* Divider glow */}
      <div className="divider" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-7 h-7 flex items-center justify-center rounded"
                style={{ background: 'rgba(27,184,192,0.12)', border: '1px solid rgba(27,184,192,0.35)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4.5V9.5L7 13L1 9.5V4.5L7 1Z" stroke="#1BB8C0" strokeWidth="1.2" fill="none" />
                  <path d="M7 4.5L10 6.25V9.75L7 11.5L4 9.75V6.25L7 4.5Z" fill="#1BB8C0" opacity="0.6" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-sm tracking-widest text-white uppercase">CoreVision</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: '#1BB8C0' }}>
                  AI Labs
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-muted)' }}>
              Building AI products that work. Not demos. Not experiments.{' '}
              <span className="text-white font-medium">Products.</span>
            </p>
            <p className="mt-4 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
              🇩🇪 Built in Berlin
            </p>
          </div>

          {/* Products */}
          <div>
            <p
              className="font-mono text-[11px] uppercase tracking-[0.2em] mb-5"
              style={{ color: '#1BB8C0' }}
            >
              Products
            </p>
            <div className="flex flex-col gap-2.5">
              {products.map(p => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="text-sm font-medium transition-colors duration-150 hover:text-white"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="font-mono text-[11px] uppercase tracking-[0.2em] mb-5"
              style={{ color: '#1BB8C0' }}
            >
              Studio
            </p>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/about"
                className="text-sm font-medium transition-colors duration-150 hover:text-white"
                style={{ color: 'var(--text-muted)' }}
              >
                About
              </Link>
              <a
                href="mailto:hi@corevisionailabs.com"
                className="text-sm font-medium transition-colors duration-150 hover:text-white"
                style={{ color: 'var(--text-muted)' }}
              >
                hi@corevisionailabs.com
              </a>
              <a
                href="https://linkedin.com/in/varuntyagi83"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-150 hover:text-white"
                style={{ color: 'var(--text-muted)' }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/varuntyagi83"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-150 hover:text-white"
                style={{ color: 'var(--text-muted)' }}
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            AdProfit is a product of CoreVision AI Labs. All products listed on this site are developed and operated by CoreVision AI Labs.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
              © 2026 CoreVision AI Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="font-mono text-xs transition-colors duration-150 hover:text-white"
                style={{ color: 'var(--text-dim)' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-mono text-xs transition-colors duration-150 hover:text-white"
                style={{ color: 'var(--text-dim)' }}
              >
                Terms of Service
              </Link>
              <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                Varun Tyagi · Berlin, Germany
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
