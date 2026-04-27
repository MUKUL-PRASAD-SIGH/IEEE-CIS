'use client'

import { useEffect, useRef } from 'react'
import { Brain, Cpu, GitBranch, Globe, Award, Users } from 'lucide-react'

const pillars = [
  {
    icon: Brain,
    title: 'Neural Networks',
    description: 'Exploring deep learning architectures and connectionist systems that mimic biological cognition.',
  },
  {
    icon: Cpu,
    title: 'Fuzzy Systems',
    description: 'Advancing fuzzy logic and approximate reasoning for complex real-world decision making.',
  },
  {
    icon: GitBranch,
    title: 'Evolutionary Computing',
    description: 'Applying genetic algorithms, evolutionary programming, and swarm intelligence to optimization.',
  },
  {
    icon: Globe,
    title: 'Hybrid AI Systems',
    description: 'Integrating multiple computational paradigms for robust, adaptive intelligent systems.',
  },
  {
    icon: Award,
    title: 'Research & Innovation',
    description: 'Fostering cutting-edge research, publications, and industry-grade project development.',
  },
  {
    icon: Users,
    title: 'Community Growth',
    description: 'Building a vibrant network of students, researchers, and professionals in Bangalore.',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-ieee-sky text-ieee-blue text-sm font-semibold mb-4">
            About IEEE CIS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ieee-text-dark mb-5">
            What is{' '}
            <span className="gradient-text">Computational Intelligence?</span>
          </h2>
          <p className="text-ieee-gray-text text-lg leading-relaxed max-w-3xl mx-auto">
            IEEE Computational Intelligence Society (CIS) is the premier international professional society
            dedicated to advancing the theory, design, application, and development of biologically and 
            linguistically motivated computational paradigms.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Description card */}
          <div className="animate-on-scroll">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              {/* Background */}
              <div className="absolute inset-0 bg-ieee-gradient" aria-hidden="true" />
              <div className="absolute inset-0 hero-grid opacity-20" aria-hidden="true" />
              <div className="relative z-10 p-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center mb-6">
                  <Globe className="text-white" size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Bangalore Chapter
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  The IEEE CIS Bangalore Chapter serves as a hub for students and researchers across
                  Bangalore to collaborate, learn, and innovate in computational intelligence fields.
                  We host workshops, seminars, hackathons, and networking events throughout the year.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ['Founded', '2012'],
                    ['Region', 'IEEE Region 10'],
                    ['Focus', 'AI & CI Research'],
                    ['Network', 'Global IEEE'],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-white/10 rounded-xl px-4 py-3 border border-white/15">
                      <p className="text-blue-200 text-xs font-medium mb-0.5">{label}</p>
                      <p className="text-white font-semibold text-sm">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mission */}
          <div className="space-y-6 animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <div>
              <h3 className="font-display text-2xl font-bold text-ieee-text-dark mb-3">
                Our Mission
              </h3>
              <p className="text-ieee-gray-text leading-relaxed">
                To nurture a generation of engineers and researchers who can apply and advance 
                computational intelligence techniques to solve real-world challenges — from healthcare 
                to robotics, finance to climate modeling.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Academic Workshops & Seminars', pct: 85 },
                { label: 'Industry Collaborations', pct: 70 },
                { label: 'Research Publications', pct: 60 },
                { label: 'Competitions & Hackathons', pct: 90 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium text-ieee-text-dark">{item.label}</span>
                    <span className="text-sm font-semibold text-ieee-blue">{item.pct}%</span>
                  </div>
                  <div className="h-2 bg-ieee-gray-mid rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-ieee-gradient transition-all duration-1000"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="animate-on-scroll card-hover group bg-white rounded-2xl p-7 border border-ieee-gray-mid shadow-card cursor-default"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-ieee-sky flex items-center justify-center mb-5 group-hover:bg-ieee-blue transition-colors duration-300">
                  <Icon
                    className="text-ieee-blue group-hover:text-white transition-colors duration-300"
                    size={22}
                  />
                </div>
                <h4 className="font-display font-bold text-ieee-text-dark mb-2 group-hover:text-ieee-blue transition-colors duration-300">
                  {pillar.title}
                </h4>
                <p className="text-ieee-gray-text text-sm leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
