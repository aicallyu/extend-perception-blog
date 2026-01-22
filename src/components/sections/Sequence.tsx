import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/i18n'

gsap.registerPlugin(ScrollTrigger)

export default function Sequence() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  const steps = [
    { number: '01', icon: '👁', title: t.sequence.steps.perception.title, desc: t.sequence.steps.perception.desc, active: true },
    { number: '02', icon: '🧠', title: t.sequence.steps.interpretation.title, desc: t.sequence.steps.interpretation.desc, active: false },
    { number: '03', icon: '⚖️', title: t.sequence.steps.decision.title, desc: t.sequence.steps.decision.desc, active: false },
    { number: '04', icon: '⚡', title: t.sequence.steps.action.title, desc: t.sequence.steps.action.desc, active: false },
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const sequenceSteps = section.querySelectorAll('.sequence-step')
    const sequenceLine = section.querySelector('.sequence-line')
    const label = section.querySelector('.sequence-label')
    const title = section.querySelector('.sequence-title')

    // Initial states
    gsap.set(label, { opacity: 0 })
    gsap.set(title, { opacity: 0, y: 30 })
    gsap.set(sequenceSteps, { opacity: 0, y: 50, scale: 0.9 })

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

    // Animate each step
    sequenceSteps.forEach((step, i) => {
      gsap.to(step, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: section,
          start: `top+=${i * 80} 60%`,
          toggleActions: 'play none none reverse',
        },
      })
    })

    // Sequence line animation
    if (sequenceLine) {
      gsap.to(sequenceLine, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.sequence-flow',
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 0.5,
        },
      })
    }

  }, [])

  return (
    <section ref={sectionRef} className="sequence-section py-40 relative" id="sequence">
      <div className="container">
        <div className="section-header mb-20">
          <div
            className="sequence-label font-mono text-xs tracking-[0.25em] uppercase mb-5 flex items-center gap-4"
            style={{ color: 'var(--accent-cyan)' }}
          >
            {t.sequence.label}
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
            {t.sequence.title}
          </h2>
        </div>

        <div className="sequence-flow flex items-stretch gap-0 relative">
          {/* Animated line */}
          <div
            className="sequence-line absolute top-1/2 left-0 h-[3px] w-0 -translate-y-1/2 z-0"
            style={{
              background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple), var(--accent-blue))',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
            }}
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`sequence-step flex-1 py-11 px-9 text-center relative z-[1] backdrop-blur-[10px] transition-all duration-500 ${
                step.active ? 'active' : ''
              }`}
              style={{
                background: step.active
                  ? 'linear-gradient(145deg, rgba(0, 240, 255, 0.12), rgba(168, 85, 247, 0.08))'
                  : 'linear-gradient(145deg, rgba(15, 15, 22, 0.9), rgba(8, 8, 14, 0.95))',
                border: step.active
                  ? '1px solid var(--accent-cyan)'
                  : '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius:
                  index === 0
                    ? '24px 0 0 24px'
                    : index === steps.length - 1
                    ? '0 24px 24px 0'
                    : '0',
                boxShadow: step.active ? '0 0 80px rgba(0, 240, 255, 0.25)' : 'none',
              }}
            >
              {step.active && (
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2.5 rounded-full"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    letterSpacing: '0.2em',
                    background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))',
                    border: '1px solid rgba(0, 240, 255, 0.4)',
                    animation: 'pulseGlow 2s ease-in-out infinite',
                  }}
                >
                  {t.sequence.intervene}
                </div>
              )}

              <div
                className="step-number font-mono text-[11px] mb-5 tracking-[0.15em]"
                style={{ color: 'var(--text-muted)' }}
              >
                {step.number}
              </div>

              <div
                className="step-icon w-[72px] h-[72px] mx-auto mb-5 rounded-[20px] flex items-center justify-center text-[34px]"
                style={{
                  background: `linear-gradient(145deg, ${
                    index === 0
                      ? 'rgba(0, 240, 255, 0.2), rgba(0, 240, 255, 0.05)'
                      : index === 1
                      ? 'rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05)'
                      : index === 2
                      ? 'rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05)'
                      : 'rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.05)'
                  })`,
                  boxShadow: `0 0 ${index === 0 ? '50' : '40'}px ${
                    index === 0
                      ? 'rgba(0, 240, 255, 0.25)'
                      : index === 1
                      ? 'rgba(168, 85, 247, 0.2)'
                      : index === 2
                      ? 'rgba(59, 130, 246, 0.2)'
                      : 'rgba(16, 185, 129, 0.2)'
                  }`,
                }}
              >
                {step.icon}
              </div>

              <div className="step-title font-display text-[19px] font-bold mb-2.5">
                {step.title}
              </div>

              <div className="step-desc text-sm" style={{ color: 'var(--text-muted)' }}>
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
