'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Link2, AtSign, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ieee.cis.blr@gmail.com',
    href: 'mailto:ieee.cis.blr@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 80 2222 3456',
    href: 'tel:+918022223456',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, Karnataka, India',
    href: 'https://maps.google.com/?q=Bangalore,Karnataka,India',
  },
]

const socials = [
  { icon: Link2, label: 'LinkedIn', href: '#' },
  { icon: AtSign, label: 'Twitter / X', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:ieee.cis.blr@gmail.com' },
]

type FormStatus = 'idle' | 'submitting' | 'success'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-ieee-gray-mid bg-white text-ieee-text-dark text-sm placeholder-ieee-gray-text focus:outline-none focus:border-ieee-blue focus:ring-2 focus:ring-ieee-blue/10 transition-all duration-200'

  return (
    <section id="contact" className="section-padding bg-ieee-gray-soft" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-ieee-sky text-ieee-blue text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ieee-text-dark mb-5">
            Contact <span className="gradient-text">IEEE CIS Blr</span>
          </h2>
          <p className="text-ieee-gray-text text-lg leading-relaxed max-w-2xl mx-auto">
            Have a question, want to collaborate, or interested in joining? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6 animate-on-scroll">
            {/* Contact details */}
            <div className="bg-white rounded-2xl p-7 border border-ieee-gray-mid shadow-card space-y-5">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-ieee-sky flex items-center justify-center shrink-0 group-hover:bg-ieee-blue transition-colors duration-200">
                      <Icon
                        size={18}
                        className="text-ieee-blue group-hover:text-white transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ieee-gray-text uppercase tracking-wide mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-ieee-text-dark font-medium text-sm group-hover:text-ieee-blue transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social links */}
            <div className="bg-white rounded-2xl p-7 border border-ieee-gray-mid shadow-card">
              <h3 className="font-display font-bold text-ieee-text-dark mb-4">Follow Us</h3>
              <div className="flex flex-col gap-3">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-ieee-gray-text hover:text-ieee-blue transition-colors duration-200 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-ieee-sky flex items-center justify-center group-hover:bg-ieee-blue transition-colors duration-200">
                        <Icon
                          size={16}
                          className="text-ieee-blue group-hover:text-white transition-colors duration-200"
                        />
                      </div>
                      <span className="text-sm font-medium">{s.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* IEEE Global */}
            <div className="rounded-2xl overflow-hidden shadow-card">
              <div className="bg-ieee-gradient p-6 relative">
                <div className="absolute inset-0 hero-grid opacity-15" />
                <div className="relative z-10">
                  <p className="font-display font-bold text-white mb-2">IEEE Global Resources</p>
                  <p className="text-blue-100 text-sm mb-4">
                    Access IEEE's vast library of publications, conferences, and standards.
                  </p>
                  <a
                    href="https://www.ieee.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-ieee-blue font-semibold text-sm hover:bg-ieee-sky transition-colors duration-200"
                  >
                    Visit IEEE.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <div className="bg-white rounded-2xl p-8 border border-ieee-gray-mid shadow-card">
              <h3 className="font-display text-xl font-bold text-ieee-text-dark mb-6">Send a Message</h3>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle className="text-green-500" size={36} />
                  </div>
                  <h4 className="font-display font-bold text-ieee-text-dark">Message Sent!</h4>
                  <p className="text-ieee-gray-text text-sm max-w-xs">
                    Thank you for reaching out. We'll get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-ieee-text-dark mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-ieee-text-dark mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-ieee-text-dark mb-1.5">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="What's this about?"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-ieee-text-dark mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-ieee-blue text-white font-semibold text-sm hover:bg-ieee-blue-dark disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
