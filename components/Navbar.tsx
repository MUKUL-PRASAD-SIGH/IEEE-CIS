'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Events', href: '/#events' },
  { label: 'Student Chapters', href: '/#chapters' },
  { label: 'Team', href: '/#team' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const router = useRouter()
  const pathname = usePathname()

  const forceDarkText = pathname !== '/'
  const appliedScrolled = isScrolled || forceDarkText

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (pathname !== '/') return

      const sections = ['home', 'about', 'events', 'chapters', 'team', 'contact']
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      if (pathname !== '/') {
        router.push(href)
      } else {
        const id = href.replace('/#', '')
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
    } else {
      router.push(href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${appliedScrolled
          ? 'bg-white/70 backdrop-blur-lg shadow-nav border-b border-ieee-gray-mid/50'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('/#home')}
          suppressHydrationWarning
          className="flex items-center gap-3 group"
          aria-label="IEEE CIS Bangalore - Home"
        >
          {/* Logo replacement */}
          <div className="relative h-10 w-32 flex items-center justify-center">
            <Image
              src={appliedScrolled ? "/cis-logo-old.png" : "/CISLogoWhite.png"}
              alt="IEEE CIS"
              fill
              sizes="128px"
              priority
              className="object-contain transition-all"
            />
          </div>
          <div className="hidden sm:block text-left">
            <p className={`font-display font-bold text-sm leading-tight transition-colors duration-300 ${appliedScrolled ? 'text-ieee-blue-dark' : 'text-white'}`}>
              Bangalore Chapter
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const id = item.href.replace('/#', '')
            const isActive = (pathname === '/' && activeSection === id) || (pathname === item.href)
            return (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  suppressHydrationWarning
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                      ? appliedScrolled
                        ? 'text-ieee-blue bg-ieee-sky'
                        : 'text-white bg-white/15'
                      : appliedScrolled
                        ? 'text-ieee-text-dark hover:text-ieee-blue hover:bg-ieee-sky'
                        : 'text-blue-100 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-ieee-blue-light rounded-full" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://www.ieee.org/membership/join/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md ${appliedScrolled
                ? 'bg-ieee-blue text-white hover:bg-ieee-blue-dark'
                : 'bg-white text-ieee-blue hover:bg-ieee-sky'
              }`}
          >
            Join IEEE
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          suppressHydrationWarning
          className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${appliedScrolled ? 'text-ieee-text-dark hover:bg-ieee-sky' : 'text-white hover:bg-white/10'
            }`}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-ieee-gray-mid px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const id = item.href.replace('/#', '')
            const isActive = (pathname === '/' && activeSection === id) || (pathname === item.href)
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                suppressHydrationWarning
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                    ? 'bg-ieee-sky text-ieee-blue font-semibold'
                    : 'text-ieee-text-dark hover:bg-ieee-sky hover:text-ieee-blue'
                  }`}
              >
                {item.label}
              </button>
            )
          })}
          <a
            href="https://www.ieee.org/membership/join/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 rounded-xl bg-ieee-blue text-white text-sm font-semibold hover:bg-ieee-blue-dark transition-colors duration-200 mt-2"
          >
            Join IEEE
          </a>
        </div>
      </div>
    </header>
  )
}
