'use client'

import Link from 'next/link'

export type ProductStatus = 'live' | 'beta' | 'coming-soon'

export interface Product {
  id: string
  name: string
  headline: string        // e.g. "AD CREATIVE.\nFAST."
  description: string
  price: number | null    // null = "Coming soon"
  priceNote?: string      // e.g. "per month"
  featured?: boolean      // copper accent
  status: ProductStatus
  href: string
  learnMoreHref?: string
  tags: string[]
  trialNote?: string
}

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, headline, description, price, featured, status, href, learnMoreHref, tags, trialNote } = product

  const accentColor = featured ? '#C87941' : '#1BB8C0'
  const borderColor = featured ? 'rgba(200,121,65,0.45)' : 'rgba(27,184,192,0.35)'
  const glowColor   = featured ? 'rgba(200,121,65,0.06)' : 'rgba(27,184,192,0.06)'

  const statusLabel: Record<ProductStatus, string> = {
    live: 'Live',
    beta: 'Beta',
    'coming-soon': 'Soon',
  }

  // Parse multi-line headlines (split on \n)
  const headlineLines = headline.split('\n')

  return (
    <div
      className="card-offset group"
      style={
        featured
          ? ({ '--offset-color': borderColor } as React.CSSProperties)
          : ({ '--offset-color': borderColor } as React.CSSProperties)
      }
    >
      {/* Offset shadow layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-300 group-hover:translate-x-[7px] group-hover:translate-y-[7px]"
        style={{
          border: `1px solid ${borderColor}`,
          transform: 'translate(5px, 5px)',
          zIndex: 0,
        }}
      />

      {/* Main card */}
      <div
        className="relative flex flex-col h-full p-8 transition-all duration-300"
        style={{
          background: 'linear-gradient(160deg, #0D1E35 0%, #091422 100%)',
          border: `1px solid ${featured ? 'rgba(200,121,65,0.5)' : 'rgba(255,255,255,0.08)'}`,
          boxShadow: `0 0 40px ${glowColor}`,
          zIndex: 1,
        }}
      >
        {/* Top row: dot + name + status */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full pulse-dot"
              style={{ background: accentColor }}
            />
            <span
              className="font-mono text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: accentColor }}
            >
              {name}
            </span>
          </div>
          <span
            className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm"
            style={{
              color: accentColor,
              background: `${accentColor}14`,
              border: `1px solid ${accentColor}30`,
            }}
          >
            {statusLabel[status]}
          </span>
        </div>

        {/* Headline */}
        <div className="mb-5">
          {headlineLines.map((line, i) => (
            <h3
              key={i}
              className="font-display text-4xl leading-none tracking-wide text-white uppercase"
            >
              {line}
            </h3>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-5 w-12"
          style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
        />

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6 flex-1"
          style={{ color: 'var(--text-muted)' }}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-7">
          {tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5"
              style={{
                color: 'var(--text-dim)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mb-2">
          {price !== null ? (
            <div className="flex items-baseline gap-1">
              <span
                className="font-display text-5xl leading-none"
                style={{ color: featured ? '#C87941' : 'white' }}
              >
                ${price}
              </span>
              <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                /month
              </span>
            </div>
          ) : (
            <span className="font-display text-3xl leading-none" style={{ color: 'var(--text-muted)' }}>
              Coming Soon
            </span>
          )}
        </div>

        {/* Trial note */}
        {(price !== null || trialNote) && (
          <p className="text-xs font-mono mb-6" style={{ color: accentColor }}>
            ✓ {trialNote ?? '7 DAYS FREE · NO CREDIT CARD'}
          </p>
        )}

        {/* CTA Button */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center font-display text-sm tracking-[0.18em] uppercase py-4 mb-4 transition-all duration-200"
          style={
            featured
              ? {
                  background: '#C87941',
                  color: '#ffffff',
                  clipPath:
                    'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                }
              : {
                  background: 'transparent',
                  color: 'white',
                  border: `1px solid rgba(255,255,255,0.2)`,
                  clipPath:
                    'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                }
          }
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            if (featured) {
              el.style.background = '#D98B52'
            } else {
              el.style.borderColor = accentColor
              el.style.color = accentColor
            }
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            if (featured) {
              el.style.background = '#C87941'
            } else {
              el.style.borderColor = 'rgba(255,255,255,0.2)'
              el.style.color = 'white'
            }
          }}
        >
          Start Free Trial
        </a>

        {/* Learn more */}
        <Link
          href={learnMoreHref ?? `/products#${product.id}`}
          className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.15em] transition-colors duration-200 hover:opacity-80"
          style={{ color: accentColor }}
        >
          Learn More
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
