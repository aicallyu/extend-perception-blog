import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/i18n'

gsap.registerPlugin(ScrollTrigger)

export default function HermannGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const title = section.querySelector('.perception-title')
    const subtitle = section.querySelector('.perception-subtitle')
    const grid = section.querySelector('.hermann-grid')
    const instructions = section.querySelector('.perception-instructions')

    gsap.set([title, subtitle, grid, instructions], { opacity: 0, y: 30 })

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      onEnter: () => {
        gsap.to(title, { opacity: 1, y: 0, duration: 0.8 })
        gsap.to(subtitle, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
        gsap.to(grid, { opacity: 1, y: 0, duration: 0.8, delay: 0.4 })
        gsap.to(instructions, { opacity: 1, y: 0, duration: 0.8, delay: 0.6 })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="perception-section py-20 relative flex flex-col justify-center" id="hermann-test">
      <div className="perception-container text-center max-w-[900px] mx-auto px-10">
        <h2
          className="perception-title font-display text-4xl font-extrabold mb-4"
        >
          {t.illusions.hermannGrid.title}
        </h2>

        <p
          className="perception-subtitle text-[17px] mb-[50px] max-w-[600px] mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t.illusions.hermannGrid.subtitle}
        </p>

        <div
          className="hermann-grid relative w-full max-w-[450px] mx-auto rounded-[20px] p-[30px]"
          style={{
            background: '#000',
            border: '1px solid rgba(0, 240, 255, 0.2)',
          }}
        >
          <div
            className="hermann-grid-inner grid justify-center"
            style={{
              gridTemplateColumns: 'repeat(5, 60px)',
              gap: '15px',
            }}
          >
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="hermann-square w-[60px] h-[60px] rounded"
                style={{ background: '#fff' }}
              />
            ))}
          </div>
        </div>

        <div
          className="perception-instructions mt-[30px] py-5 px-[30px] rounded-xl text-left max-w-[600px] mx-auto"
          style={{
            background: 'rgba(0, 240, 255, 0.05)',
            border: '1px solid rgba(0, 240, 255, 0.1)',
          }}
        >
          <p className="m-0 text-[15px] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--accent-cyan)' }}>{t.illusions.hermannGrid.whatsHappening}:</strong>{' '}
            {t.illusions.hermannGrid.instruction}
          </p>
        </div>
      </div>

      <style>{`
        .light-mode .hermann-grid {
          background: #fff !important;
        }
        .light-mode .hermann-square {
          background: #1a1a2e !important;
        }
      `}</style>
    </section>
  )
}
