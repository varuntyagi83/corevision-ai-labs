'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 border-b"
        style={{
          background: 'rgba(6,14,28,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderColor: 'rgba(255,255,255,0.06)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
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
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: '#1BB8C0' }}
            >
              AI Labs
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200"
                style={{ color: active ? '#ffffff' : 'var(--text-muted)' }}
              >
                {active && (
                  <span
                    className="absolute inset-x-2 bottom-0 h-px"
                    style={{ background: '#1BB8C0' }}
                  />
                )}
                {label}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://calendly.com/varun-tyagi83/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2 transition-all duration-200 tracking-wide"
            style={{
              background: '#1BB8C0',
              color: '#060E1C',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLElement).style.background = '#22D0D9'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLElement).style.background = '#1BB8C0'
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: 'var(--text-muted)' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
            {open ? (
              <path
                fillRule="evenodd"
                d="M5.293 5.293a1 1 0 011.414 0L11 9.586l4.293-4.293a1 1 0 111.414 1.414L12.414 11l4.293 4.293a1 1 0 01-1.414 1.414L11 12.414l-4.293 4.293a1 1 0 01-1.414-1.414L9.586 11 5.293 6.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <>
                <rect y="4" width="22" height="1.5" rx="0.75" />
                <rect y="10" width="22" height="1.5" rx="0.75" />
                <rect y="16" width="22" height="1.5" rx="0.75" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-4"
          style={{
            background: 'rgba(6,14,28,0.97)',
            borderColor: 'rgba(255,255,255,0.06)',
          }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-medium tracking-wide"
              style={{ color: pathname === href ? '#1BB8C0' : 'var(--text-muted)' }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://calendly.com/varun-tyagi83/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm font-semibold px-5 py-3 text-center tracking-wide"
            style={{
              background: '#1BB8C0',
              color: '#060E1C',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
            }}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  )
}
