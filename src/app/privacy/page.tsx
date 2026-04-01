import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — CoreVision AI Labs',
  description: 'Privacy Policy for CoreVision AI Labs and its products including AdProfit, Kreashot, Voltic, GEORAYDAR, IntelliSync, and Market-Intel.',
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm font-mono" style={{ color: 'var(--text-dim)' }}>
            Last updated: April 1, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-12">

          {/* Company Information */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Company Information</h2>
            <div
              className="p-6 mb-6"
              style={{
                background: 'linear-gradient(160deg, #0D1E35 0%, #091422 100%)',
                border: '1px solid rgba(27,184,192,0.25)',
              }}
            >
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                This Privacy Policy applies to AdProfit, a product developed and operated by CoreVision AI Labs. It also applies to all other products operated by CoreVision AI Labs, including Kreashot, Voltic, GEORAYDAR, IntelliSync, and Market-Intel. For enquiries, contact{' '}
                <a href="mailto:hi@corevisionailabs.com" className="text-white hover:underline">
                  hi@corevisionailabs.com
                </a>
              </p>
            </div>
          </section>

          {/* Introduction */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Introduction</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                CoreVision AI Labs (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our products and services.
              </p>
              <p>
                CoreVision AI Labs is operated by Varun Tyagi and is based in Berlin, Germany.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Information We Collect</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>We may collect the following types of information:</p>
              <ul className="list-none space-y-3 ml-0">
                {[
                  'Account information (name, email address) when you sign up for our products',
                  'Usage data including how you interact with our products and services',
                  'Technical data such as browser type, device information, and IP address',
                  'Payment information processed securely through third-party payment providers',
                  'Advertising data when using AdProfit, including Google Ads campaign data accessed via the Google Ads API',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 font-mono text-xs" style={{ color: '#1BB8C0' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Google Ads API Data */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Google Ads API Data</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                AdProfit, a product of CoreVision AI Labs, uses the Google Ads API to provide advertising intelligence and optimization services. When you connect your Google Ads account:
              </p>
              <ul className="list-none space-y-3 ml-0">
                {[
                  'We access only the data necessary to provide our services (campaign performance, ad spend, and optimization metrics)',
                  'Your Google Ads data is not sold, shared with third parties, or used for purposes other than providing AdProfit services',
                  'You can revoke access at any time through your Google Account settings',
                  'Data is stored securely and handled in compliance with Google API Services User Data Policy',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 font-mono text-xs" style={{ color: '#1BB8C0' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">How We Use Your Information</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>We use collected information to:</p>
              <ul className="list-none space-y-3 ml-0">
                {[
                  'Provide, operate, and maintain our products and services',
                  'Improve and personalize user experience',
                  'Process transactions and send related information',
                  'Send administrative communications (updates, security alerts)',
                  'Respond to your comments, questions, and support requests',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 font-mono text-xs" style={{ color: '#1BB8C0' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Data Security</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                We use commercially reasonable measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure. We strive to use acceptable means to protect your data but cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Data Retention</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, or as required by law. When your data is no longer needed, it will be securely deleted.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Your Rights</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                Under applicable data protection laws (including GDPR), you have the right to:
              </p>
              <ul className="list-none space-y-3 ml-0">
                {[
                  'Access the personal data we hold about you',
                  'Request correction of inaccurate data',
                  'Request deletion of your data',
                  'Object to processing of your data',
                  'Request data portability',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 font-mono text-xs" style={{ color: '#1BB8C0' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:hi@corevisionailabs.com" className="text-white hover:underline">
                  hi@corevisionailabs.com
                </a>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-2xl text-white uppercase mb-4">Contact Us</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                If you have questions about this Privacy Policy, contact:
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
