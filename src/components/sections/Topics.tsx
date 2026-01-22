import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { topics } from '@/data/articles'
import { useLanguage } from '@/i18n'

gsap.registerPlugin(ScrollTrigger)

export default function Topics() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const cards = section.querySelectorAll('.topic-card')
    const label = section.querySelector('.sequence-label')
    const title = section.querySelector('.sequence-title')

    // Initial states
    gsap.set(label, { opacity: 0 })
    gsap.set(title, { opacity: 0, y: 30 })

    // Section enter trigger
    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(label, { opacity: 1, duration: 0.6 })
        label?.classList.add('active')
        gsap.to(title, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
      },
    })

    // Cards fly in animation
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          x: (i % 2 === 0 ? -100 : 100) + 'vw',
          y: '-50vh',
          rotation: (Math.random() - 0.5) * 30,
          rotateY: 30,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          rotateY: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.topics-grid',
            start: `top+=${i * 60} 70%`,
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

  }, [])

  const iconColors = [
    { bg: 'rgba(0, 240, 255, 0.2), rgba(0, 240, 255, 0.05)', shadow: 'rgba(0, 240, 255, 0.2)' },
    { bg: 'rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05)', shadow: 'rgba(168, 85, 247, 0.2)' },
    { bg: 'rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05)', shadow: 'rgba(59, 130, 246, 0.2)' },
    { bg: 'rgba(0, 240, 255, 0.2), rgba(0, 240, 255, 0.05)', shadow: 'rgba(0, 240, 255, 0.2)' },
    { bg: 'rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.05)', shadow: 'rgba(16, 185, 129, 0.2)' },
    { bg: 'rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05)', shadow: 'rgba(168, 85, 247, 0.2)' },
  ]

  return (
    <section ref={sectionRef} className="topics-section py-40 relative" id="topics">
      <div className="container">
        <div className="section-header mb-20">
          <div
            className="sequence-label font-mono text-xs tracking-[0.25em] uppercase mb-5 flex items-center gap-4"
            style={{ color: 'var(--accent-cyan)' }}
          >
            {t.topics.label}
          </div>
          <h2
            className="sequence-title font-display text-[52px] font-extrabold tracking-tight"
            style={{
              background: 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
            }}
          >
            {t.topics.title}
          </h2>
        </div>

        <div
          className="topics-grid grid gap-7"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            perspective: '2000px',
          }}
        >
          {topics.map((topic, index) => (
            <div
              key={topic.title}
              className="topic-card py-[52px] px-10 rounded-[28px] relative overflow-hidden cursor-pointer backdrop-blur-[10px] transition-all duration-500 group"
              style={{
                background: 'linear-gradient(145deg, rgba(15, 15, 22, 0.9), rgba(8, 8, 14, 0.95))',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Top border on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                }}
              />

              <div
                className="topic-icon w-20 h-20 rounded-[22px] flex items-center justify-center text-[40px] mb-8 transition-transform duration-400 group-hover:scale-110 group-hover:-rotate-[5deg]"
                style={{
                  background: `linear-gradient(145deg, ${iconColors[index]?.bg})`,
                  boxShadow: `0 0 40px ${iconColors[index]?.shadow}`,
                }}
              >
                {topic.icon}
              </div>

              <div className="topic-title font-display text-[26px] font-bold mb-4 transition-colors duration-300 group-hover:text-[var(--accent-cyan)]">
                {topic.title}
              </div>

              <div
                className="topic-desc text-base leading-[1.75]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {topic.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .topics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .topics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
