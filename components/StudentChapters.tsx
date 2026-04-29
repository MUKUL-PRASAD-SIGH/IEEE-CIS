'use client'

import { useEffect, useRef } from 'react'

const chapters = [
  'Ramaiah Institute of Technology, Bangalore',
  'Reva university, Bangalore',
  'Vidhya Vardhaka Collge of Engineering, Mysore',
  'Indian Institute of Science, Bangalore',
  'Sai Vidhya Institute of Technology, Bangalore',
  'Dayananda Sagar University, Bangalore',
  'Christ University, Bangalore',
  'Nitte Meenakshi Institute of Technology, Bangalore',
  'Manipal Institute of Technology, Bangalore',
  'BMS Institute of Technology and Management',
]

export default function StudentChapters() {
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
    <section id="chapters" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ieee-text-dark mb-4">
            Student <span className="text-[#00629B]">Branch Chapters</span>
          </h2>
          <p className="text-ieee-gray-text text-[15px] leading-relaxed max-w-3xl mx-auto">
            An IEEE Student Branch gives students a community of peers, and a connection to faculty and<br className="hidden sm:block" />
            industry professionals who drive innovation in countless technical fields.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-lg bg-[#F5F7F9] hover:bg-ieee-gray-mid transition-colors duration-200 border border-transparent hover:border-ieee-gray-mid/50 shadow-sm"
            >
              <div className="w-8 h-8 rounded shrink-0 flex items-center justify-center border border-[#00A9E0] text-[#00A9E0] font-semibold text-sm bg-white">
                {index + 1}
              </div>
              <span className="text-[#333333] text-[15px] font-medium">{chapter}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
