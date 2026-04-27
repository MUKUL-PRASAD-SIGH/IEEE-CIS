'use client'

import { useEffect, useRef, useState } from 'react'
import { Calendar, MapPin, Clock, ChevronRight, Tag } from 'lucide-react'

type EventCategory = 'All' | 'Workshop' | 'Talk' | 'Hackathon' | 'Seminar' | 'Competition'

const events = [
  {
    id: 1,
    title: 'Deep Learning Bootcamp 2024',
    date: 'March 15, 2024',
    time: '9:00 AM – 5:00 PM',
    location: 'PESCE, Mandya',
    category: 'Workshop' as EventCategory,
    description:
      'A hands-on full-day workshop covering CNNs, RNNs, transformers, and practical deep learning with PyTorch. Limited seats for an immersive learning experience.',
    featured: true,
    color: 'from-blue-600 to-cyan-500',
  },
  {
    id: 2,
    title: 'Fuzzy Logic & Control Systems Talk',
    date: 'April 5, 2024',
    time: '2:00 PM – 4:00 PM',
    location: 'Online – Zoom',
    category: 'Talk' as EventCategory,
    description:
      'An expert lecture on fuzzy reasoning, membership functions, and their real-world applications in control engineering.',
    featured: false,
    color: 'from-indigo-600 to-blue-500',
  },
  {
    id: 3,
    title: 'CIS Hackathon: AI for Social Good',
    date: 'May 20–21, 2024',
    time: '48-hour Event',
    location: 'Bangalore, TBD',
    category: 'Hackathon' as EventCategory,
    description:
      'A 48-hour hackathon challenging teams to build AI-driven solutions addressing social challenges in healthcare, education, and environment.',
    featured: true,
    color: 'from-blue-700 to-blue-400',
  },
  {
    id: 4,
    title: 'Evolutionary Algorithms Seminar',
    date: 'June 10, 2024',
    time: '3:00 PM – 5:00 PM',
    location: 'RVCE, Bangalore',
    category: 'Seminar' as EventCategory,
    description:
      'Exploring genetic algorithms, particle swarm optimization, and differential evolution with practical examples.',
    featured: false,
    color: 'from-sky-600 to-blue-500',
  },
  {
    id: 5,
    title: 'Student Paper Competition 2024',
    date: 'July 18, 2024',
    time: '10:00 AM – 6:00 PM',
    location: 'BMS College, Bangalore',
    category: 'Competition' as EventCategory,
    description:
      'Annual student research paper competition with awards for best papers in CI-related topics. Open to undergraduate and postgraduate students.',
    featured: false,
    color: 'from-blue-800 to-cyan-600',
  },
  {
    id: 6,
    title: 'Neural Networks & NLP Workshop',
    date: 'August 22, 2024',
    time: '10:00 AM – 3:00 PM',
    location: 'MSRIT, Bangalore',
    category: 'Workshop' as EventCategory,
    description:
      'Intensive session on NLP fundamentals, attention mechanisms, and fine-tuning pre-trained language models for real applications.',
    featured: false,
    color: 'from-blue-500 to-indigo-600',
  },
]

const categories: EventCategory[] = ['All', 'Workshop', 'Talk', 'Hackathon', 'Seminar', 'Competition']

const categoryColors: Record<EventCategory, string> = {
  All: 'bg-ieee-blue text-white',
  Workshop: 'bg-blue-100 text-blue-800',
  Talk: 'bg-indigo-100 text-indigo-800',
  Hackathon: 'bg-cyan-100 text-cyan-800',
  Seminar: 'bg-sky-100 text-sky-800',
  Competition: 'bg-blue-200 text-blue-900',
}

export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<EventCategory>('All')

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

  const filtered = activeCategory === 'All' ? events : events.filter((e) => e.category === activeCategory)

  return (
    <section id="events" className="section-padding bg-ieee-gray-soft" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-ieee-sky text-ieee-blue text-sm font-semibold mb-4">
            Events & Activities
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ieee-text-dark mb-5">
            What's <span className="gradient-text">Happening</span>
          </h2>
          <p className="text-ieee-gray-text text-lg leading-relaxed max-w-2xl mx-auto">
            From deep learning bootcamps to research competitions — explore our rich calendar of 
            workshops, seminars, hackathons, and expert talks.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-ieee-blue text-white shadow-md scale-105'
                  : 'bg-white text-ieee-gray-text border border-ieee-gray-mid hover:border-ieee-blue hover:text-ieee-blue hover:bg-ieee-sky'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured events */}
        {activeCategory === 'All' && (
          <div className="grid md:grid-cols-2 gap-6 mb-8 animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            {events
              .filter((e) => e.featured)
              .map((event) => (
                <div
                  key={event.id}
                  className="relative rounded-3xl overflow-hidden shadow-card-hover group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color}`} />
                  <div className="absolute inset-0 hero-grid opacity-15" />
                  <div className="relative z-10 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold backdrop-blur-sm">
                        {event.category}
                      </span>
                      <span className="px-2 py-1 rounded-lg bg-white/15 text-white/90 text-xs font-medium">
                        ⭐ Featured
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed mb-5">{event.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-blue-100 text-sm">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-100 text-sm">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-100 text-sm">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button className="mt-5 inline-flex items-center gap-1.5 text-white font-semibold text-sm hover:gap-3 transition-all duration-200">
                      Learn more <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Events grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered
            .filter((e) => activeCategory !== 'All' || !e.featured)
            .map((event, i) => (
              <div
                key={event.id}
                className="animate-on-scroll card-hover bg-white rounded-2xl overflow-hidden border border-ieee-gray-mid shadow-card group cursor-pointer"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Color bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${event.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[event.category]}`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-ieee-text-dark mb-2 group-hover:text-ieee-blue transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-ieee-gray-text text-sm leading-relaxed mb-5 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="space-y-1.5 text-xs text-ieee-gray-text">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} className="text-ieee-blue shrink-0" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={12} className="text-ieee-blue shrink-0" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-ieee-blue shrink-0" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
