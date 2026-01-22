import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stats } from '@/data/articles'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0))
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const items = section.querySelectorAll('.stat-item')

    // Initial states
    gsap.set(items, { opacity: 0, y: 30 })

    // Animate each stat
    items.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 80%',
        onEnter: () => {
          if (hasAnimated.current) return

          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out',
          })

          // Counter animation
          const target = stats[i]?.target ?? 0
          gsap.to(
            { val: 0 },
            {
              val: target,
              duration: 2,
              delay: i * 0.15 + 0.3,
              ease: 'power2.out',
              onUpdate: function (this: gsap.core.Tween) {
                const targets = this['targets']() as Array<{ val: number }>
                const targetVal = targets[0]?.val ?? 0
                setCounters(prev => {
                  const newCounters = [...prev]
                  newCounters[i] = Math.round(targetVal)
                  return newCounters
                })
              },
            }
          )
        },
      })
    })

  }, [])

  return (
    <section
      ref={sectionRef}
      className="stats-section py-[120px]"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(0, 240, 255, 0.02), transparent)',
      }}
    >
      <div className="container">
        <div
          className="stats-grid grid gap-10"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-item text-center"
            >
              <div
                className="stat-number font-display font-black leading-none mb-2.5"
                style={{
                  fontSize: '72px',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {counters[index]}
              </div>
              <div
                className="stat-label font-mono text-xs tracking-[0.15em] uppercase"
                style={{ color: 'var(--text-muted)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .stat-number {
            font-size: 52px !important;
          }
        }
      `}</style>
    </section>
  )
}
