'use client'

import { Link2, Mail, ExternalLink, Globe } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About IEEE CIS', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ],
  'IEEE Resources': [
    { label: 'IEEE.org', href: 'https://www.ieee.org', external: true },
    { label: 'IEEE CIS Global', href: 'https://cis.ieee.org', external: true },
    { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org', external: true },
    { label: 'Join IEEE', href: 'https://www.ieee.org/membership/join/', external: true },
    { label: 'IEEE Region 10', href: 'https://www.ieeer10.org', external: true },
  ],
}

const socials = [
  { icon: Link2, href: '#', label: 'LinkedIn' },
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Mail, href: 'mailto:ieee.cis.blr@gmail.com', label: 'Email' },
]

function handleScrollTo(href: string) {
  if (typeof window === 'undefined') return
  if (href.startsWith('#')) {
    const el = document.getElementById(href.slice(1))
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
}

export default function Footer() {
  return (
    <footer className="bg-ieee-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-ieee-gradient flex items-center justify-center shadow-glow">
                <span className="text-white font-display font-black text-sm">CIS</span>
              </div>
              <div>
                <p className="font-display font-bold text-white">IEEE CIS</p>
                <p className="text-blue-300 text-xs font-medium">Bangalore Chapter</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-sm mb-6">
              The IEEE Computational Intelligence Society Bangalore Chapter advances biologically and 
              linguistically motivated computational paradigms. Inspiring the next generation of AI researchers.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-blue-200 hover:bg-ieee-blue hover:text-white hover:border-ieee-blue transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-bold text-white mb-4 text-sm">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-blue-300 hover:text-white text-sm transition-colors duration-200 group"
                      >
                        {link.label}
                        <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <button
                        onClick={() => handleScrollTo(link.href)}
                        className="text-blue-300 hover:text-white text-sm transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} IEEE CIS Bangalore Chapter. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-blue-400 text-xs">
            <span>Affiliated with</span>
            <a
              href="https://cis.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white font-semibold transition-colors duration-200 ml-1"
            >
              IEEE CIS Global
            </a>
            <span className="mx-1">·</span>
            <a
              href="https://www.ieeer10.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white font-semibold transition-colors duration-200"
            >
              IEEE Region 10
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
