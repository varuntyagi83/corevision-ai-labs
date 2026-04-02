import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — CoreVision AI Labs',
  description: 'Terms of Service for CoreVision AI Labs and its products including AdProfit, Kreashot, Voltic, GEORAYDAR, IntelliSync, and Market-Intel.',
}

export default function TermsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div
        className="relative border-b overflow-hidden"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
            style={{ color: '#1BB8C0' }}
          >
            Legal
          </p>
          <h1 className="font-display text-5xl sm:text-7xl text-white uppercase leading-none mb-6">
            Terms of Service
          </h1>
          <p className="text-sm font-mono" style={{ color: 'var(--text-dim)' }}>
            Last updated: April 1, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-12">

          {/* Introduction */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Agreement to Terms</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of products and services provided by CoreVision AI Labs, operated by Varun Tyagi, based in Berlin, Germany. Our products include AdProfit, Kreashot, Voltic, GEORAYDAR, IntelliSync, and Market-Intel.
              </p>
              <p>
                By accessing or using any of our products, you agree to be bound by these Terms.
              </p>
            </div>
          </section>

          {/* Products */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Our Products</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                CoreVision AI Labs develops and operates the following products:
              </p>
              <ul className="list-none space-y-3 ml-0">
                {[
                  'AdProfit — AI-powered Google Ads intelligence and budget optimization platform',
                  'Kreashot — AI ad creative generation for Meta advertising',
                  'Voltic — Real-time competitor ad intelligence for Meta',
                  'GEORAYDAR — AI search visibility tracking across ChatGPT, Gemini, Perplexity, and Claude',
                  'IntelliSync — AI-powered multi-platform marketing intelligence',
                  'Market-Intel — Real-time market intelligence and AI stock analysis',
                  'ActGuard — EU AI Act compliance suite for AI system classification and audit documentation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 font-mono text-xs" style={{ color: '#1BB8C0' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                All products are developed and owned by CoreVision AI Labs.
              </p>
            </div>
          </section>

          {/* Use of Services */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Use of Services</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>You agree to use our products only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-none space-y-3 ml-0">
                {[
                  'Use our services in violation of any applicable laws or regulations',
                  'Attempt to interfere with or disrupt the integrity or performance of our services',
                  'Attempt to gain unauthorized access to our systems or networks',
                  'Use our services to harm, threaten, or harass others',
                  'Reverse engineer, decompile, or disassemble any portion of our products',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 font-mono text-xs" style={{ color: '#1BB8C0' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Accounts */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Accounts & Billing</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                Some of our products require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p>
                Paid products are billed on a monthly subscription basis. You may cancel at any time. Free trial periods, where offered, are subject to the terms specified at the time of sign-up.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                All content, features, and functionality of our products — including but not limited to design, code, text, and graphics — are owned by CoreVision AI Labs and are protected by intellectual property laws.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Limitation of Liability</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                To the maximum extent permitted by law, CoreVision AI Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products and services.
              </p>
            </div>
          </section>

          {/* Changes */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Changes to Terms</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of material changes by updating the &quot;Last updated&quot; date. Continued use of our products after changes constitutes acceptance of the updated Terms.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Contact Us</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                For questions about these Terms of Service, contact:
              </p>
              <div
                className="p-6"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <p className="text-white font-medium">CoreVision AI Labs</p>
                <p>Varun Tyagi</p>
                <p>Berlin, Germany</p>
                <p>
                  <a href="mailto:hi@corevisionailabs.com" className="text-white hover:underline">
                    hi@corevisionailabs.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="divider" />

          <p className="font-mono text-xs text-center" style={{ color: 'var(--text-dim)' }}>
            © 2026 CoreVision AI Labs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
