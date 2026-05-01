'use client'

import { useEffect, useRef } from 'react'
import { Link2, Mail } from 'lucide-react'

type Role = 'Chair' | 'Vice Chair' | 'Secretary' | 'Joint Secretary' | 'Treasurer' | 'Webmaster' | 'Member' | 'Past Chair'

interface TeamMember {
  name: string
  designation: string
  role: Role
  department?: string
  college?: string
  initials: string
  color: string
  profileUrl?: string
  email?: string
}

const coreCommittee: TeamMember[] = [
  {
    name: 'Dr Sumana Maradithaya',
    designation: 'Chair',
    role: 'Chair',
    initials: 'SM',
    color: 'from-blue-600 to-blue-800',
    email: 'chair@ieee-cis-blr.org',
  },
  {
    name: 'Dr Megha Arakeri',
    designation: 'Vice Chair',
    role: 'Vice Chair',
    initials: 'MA',
    color: 'from-cyan-600 to-blue-700',
  },
  {
    name: 'Dr. Manjunath Kounte',
    designation: 'Secretary',
    role: 'Secretary',
    initials: 'MK',
    color: 'from-blue-500 to-indigo-700',
  },
  {
    name: 'Dr Kumaresh Sheelavat',
    designation: 'Joint Secretary',
    role: 'Joint Secretary',
    initials: 'KS',
    color: 'from-sky-500 to-blue-700',
  },
  {
    name: 'Dr Anitha P',
    designation: 'Treasurer',
    role: 'Treasurer',
    initials: 'AP',
    color: 'from-indigo-600 to-blue-800',
  },
]

const pastChairs: TeamMember[] = [
  {
    name: 'Dr Y V S Lakshmi',
    designation: '2014-16',
    role: 'Past Chair',
    initials: 'YL',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Anandi Giridharan',
    designation: '2016-2018',
    role: 'Past Chair',
    initials: 'AG',
    color: 'from-cyan-600 to-blue-700',
  },
  {
    name: 'Dr Vijaya Kumar B P',
    designation: '2018-2022',
    role: 'Past Chair',
    initials: 'VK',
    color: 'from-blue-500 to-indigo-700',
  },
  {
    name: 'Dr Megha Arakeri',
    designation: '2022-2024',
    role: 'Past Chair',
    initials: 'MA',
    color: 'from-indigo-600 to-blue-800',
  },
  {
    name: 'Dr Sumana Maradithaya',
    designation: '2024-26',
    role: 'Past Chair',
    initials: 'SM',
    color: 'from-sky-500 to-blue-700',
  },
]

const execomMembers: TeamMember[] = [
  { name: 'Dr. Kusuma. S. M', designation: 'Execom Member', role: 'Member', college: 'M S Ramaiah Institute of Technology', initials: 'KS', color: 'from-blue-400 to-blue-600' },
  { name: 'Dr. Sanjay M Belgaonkar', designation: 'Execom Member', role: 'Member', college: 'BMSIT&M', initials: 'SB', color: 'from-cyan-400 to-cyan-600' },
  { name: 'Dr. Nagarathna C R', designation: 'Execom Member', role: 'Member', college: 'B N M Institute of Technology', initials: 'NC', color: 'from-indigo-400 to-indigo-600' },
  { name: 'Nishanth Krishna', designation: 'Executive Director', role: 'Member', college: 'Visiminds Technologies', initials: 'NK', color: 'from-sky-400 to-sky-600' },
  { name: 'Dr. Manju Khanna', designation: 'Execom Member', role: 'Member', college: 'Amritha College of Engineering', initials: 'MK', color: 'from-blue-500 to-indigo-500' },
  { name: 'Dr. Piyush Kumar Pareek', designation: 'Execom Member', role: 'Member', college: 'NMIT', initials: 'PP', color: 'from-cyan-500 to-blue-500' },
  { name: 'Nibras Ahmed', designation: 'Execom Member', role: 'Member', college: 'Intel Technologies', initials: 'NA', color: 'from-blue-600 to-indigo-600' },
  { name: 'Mohammed Ameen', designation: 'Execom Member', role: 'Member', college: 'Cisco', initials: 'MA', color: 'from-sky-500 to-cyan-500' },
  { name: 'Dr Venkataswamy R', designation: 'Execom Member', role: 'Member', college: 'Christ University', initials: 'VR', color: 'from-indigo-500 to-blue-600' },
  { name: 'Dr Tabassum Ara', designation: 'Execom Member', role: 'Member', college: 'HKBK College of Engineering', initials: 'TA', color: 'from-blue-400 to-cyan-500' },
  { name: 'Dr Helen Joy', designation: 'Execom Member', role: 'Member', college: 'Christ University', initials: 'HJ', color: 'from-cyan-600 to-indigo-600' },
  { name: 'Dr Soumyalatha Naveen', designation: 'Execom Member', role: 'Member', college: 'Manipal Institute of Technology', initials: 'SN', color: 'from-blue-500 to-blue-700' },
  { name: 'Dr Kiran Kataraki', designation: 'Execom Member', role: 'Member', college: 'Neudesic Technologies', initials: 'KK', color: 'from-indigo-400 to-cyan-400' },
  { name: 'Dr N Kavitha', designation: 'Execom Member', role: 'Member', college: 'Reva University', initials: 'NK', color: 'from-sky-400 to-blue-500' },
  { name: 'Dr Renuka Tali', designation: 'Execom Member', role: 'Member', college: 'K. S. School of Engineering & Management', initials: 'RT', color: 'from-cyan-500 to-indigo-500' },
]

const roleColors: Record<Role, string> = {
  Chair: 'bg-blue-700 text-white',
  'Vice Chair': 'bg-blue-600 text-white',
  Secretary: 'bg-blue-100 text-blue-800',
  'Joint Secretary': 'bg-cyan-100 text-cyan-800',
  Treasurer: 'bg-indigo-100 text-indigo-800',
  Webmaster: 'bg-sky-100 text-sky-800',
  Member: 'bg-gray-100 text-gray-700',
  'Past Chair': 'bg-slate-200 text-slate-800',
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="card-hover group bg-white rounded-2xl overflow-hidden border border-ieee-gray-mid shadow-card">
      {/* Gradient header */}
      <div className={`h-24 bg-gradient-to-br ${member.color} relative`}>
        <div className="absolute inset-0 hero-grid opacity-10" />
        {/* Avatar */}
        <div className="absolute -bottom-8 left-6">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} border-4 border-white shadow-lg flex items-center justify-center`}
          >
            <span className="font-display font-black text-white text-lg">{member.initials}</span>
          </div>
        </div>
        {/* Role badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${roleColors[member.role]}`}>
            {member.role}
          </span>
        </div>
      </div>

      <div className="pt-10 pb-5 px-6">
        <h3 className="font-display font-bold text-ieee-text-dark group-hover:text-ieee-blue transition-colors duration-200 text-base">
          {member.name}
        </h3>
        <p className="text-ieee-blue text-sm font-medium mb-1">{member.designation}</p>
        {(member.department || member.college) && (
          <p className="text-ieee-gray-text text-xs mb-4">
            {[member.department, member.college].filter(Boolean).join(' · ')}
          </p>
        )}

        {/* Social links */}
        <div className="flex items-center gap-2">
          {member.profileUrl && (
            <a
              href={member.profileUrl}
              className="w-8 h-8 rounded-lg bg-ieee-sky flex items-center justify-center text-ieee-blue hover:bg-ieee-blue hover:text-white transition-all duration-200"
              aria-label={`${member.name} profile`}
            >
              <Link2 size={14} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="w-8 h-8 rounded-lg bg-ieee-sky flex items-center justify-center text-ieee-blue hover:bg-ieee-blue hover:text-white transition-all duration-200"
              aria-label={`Email ${member.name}`}
            >
              <Mail size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section id="team" className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-ieee-sky text-ieee-blue text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ieee-text-dark mb-5">
            Meet the <span className="gradient-text">Executive Committee</span>
          </h2>
          <p className="text-ieee-gray-text text-lg leading-relaxed max-w-2xl mx-auto">
            Dedicated professionals and students driving IEEE CIS Bangalore forward through research, events, and community building.
          </p>
        </div>

        {/* Core Committee - 2026 */}
        <div className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-display text-2xl font-bold text-ieee-text-dark">Core Committee - 2026</h3>
            <div className="flex-1 h-px bg-ieee-gray-mid" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {coreCommittee.map((member, i) => (
              <div
                key={member.name}
                className="animate-on-scroll"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Execom Members */}
        <div className="animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-display text-2xl font-bold text-ieee-text-dark">Execom Members (Bangalore Chapter)</h3>
            <div className="flex-1 h-px bg-ieee-gray-mid" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
            {execomMembers.map((member, i) => (
              <div
                key={member.name}
                className="animate-on-scroll"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Past Chairs */}
        <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-display text-2xl font-bold text-ieee-text-dark">Past Chairs</h3>
            <div className="flex-1 h-px bg-ieee-gray-mid" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {pastChairs.map((member, i) => (
              <div
                key={member.name}
                className="animate-on-scroll"
                style={{ transitionDelay: `${0.24 + i * 0.07}s` }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-ieee-sky/30 rounded-2xl p-8 animate-on-scroll text-ieee-text-dark" style={{ transitionDelay: '0.3s' }}>
          <h3 className="font-display font-bold text-xl mb-4 text-ieee-blue">Role of IEEE CIS Bangalore Chapter</h3>
          <p className="text-ieee-gray-text text-sm leading-relaxed mb-4">
            Role of IEEE CIS Bangalore Chapter act as a bridge between global IEEE CIS and local members. Workshops, seminars, technical assistance to IEEE conferences, technical talks, mentorship programs, networking events and research collaborations.
          </p>
          <p className="text-ieee-gray-text text-sm leading-relaxed mb-4">
            The strong focus of this chapter has a strong focus <strong className="text-ieee-text-dark">AI ecosystem in Bengaluru</strong>.
          </p>
          <p className="text-ieee-gray-text text-sm leading-relaxed">
            Key Focus Areas of this chapter works on Artificial Intelligence (AI), Machine Learning & Deep Learning, Neural Networks, Fuzzy Systems, Evolutionary Computation, Data Science & Intelligent Systems.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-on-scroll" style={{ transitionDelay: '0.5s' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-ieee-sky rounded-2xl px-8 py-6">
            <div className="text-left">
              <p className="font-display font-bold text-ieee-text-dark">Interested in volunteering?</p>
              <p className="text-ieee-gray-text text-sm">Join our growing team and make an impact.</p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('contact')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
              }}
              className="shrink-0 px-6 py-2.5 rounded-xl bg-ieee-blue text-white font-semibold text-sm hover:bg-ieee-blue-dark transition-colors duration-200 shadow-md"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
