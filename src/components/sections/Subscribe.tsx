import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/i18n'

gsap.registerPlugin(ScrollTrigger)

export default function Subscribe() {
  const sectionRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState('')
  const { t } = useLanguage()

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const box = section.querySelector('.subscribe-box')

    gsap.set(box, { opacity: 0, scale: 0.95 })

    gsap.to(box, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: box,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription
    console.log('Subscribe:', email)
  }

  return (
    <section ref={sectionRef} className="subscribe-section py-40" id="subscribe">
      <div className="container">
        <div
          className="subscribe-box py-[110px] px-[90px] text-center relative overflow-hidden rounded-[36px]"
          style={{
            background: 'linear-gradient(145deg, rgba(0, 240, 255, 0.06), rgba(168, 85, 247, 0.04))',
            border: '1px solid rgba(0, 240, 255, 0.2)',
          }}
        >
          {/* Rotating background */}
          <div
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(0, 240, 255, 0.12), transparent 15%)',
              animation: 'rotateBg 12s linear infinite',
            }}
          />

          {/* Inner background */}
          <div
            className="absolute inset-[2px] rounded-[34px] z-0"
            style={{
              background: 'linear-gradient(145deg, rgba(3, 3, 5, 0.98), rgba(10, 10, 16, 0.95))',
            }}
          />

          <div className="subscribe-content relative z-[1]">
            <h2
              className="subscribe-title font-display text-[52px] font-black mb-6"
            >
              {t.subscribe.title} <span className="gradient-text">{t.subscribe.titleHighlight}</span>
            </h2>

            <p
              className="subscribe-desc text-[19px] mb-[52px] max-w-[520px] mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.subscribe.subtitle}
            </p>

            <form
              className="subscribe-form flex gap-[18px] max-w-[540px] mx-auto flex-wrap justify-center"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                className="subscribe-input flex-1 min-w-[300px] py-[22px] px-[30px] rounded-[14px] font-main text-base outline-none transition-all duration-400"
                placeholder={t.subscribe.placeholder}
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-primary)',
                }}
              />
              <button type="submit" className="btn btn-primary subscribe-btn py-[22px] px-11">
                {t.subscribe.button}
              </button>
            </form>

            <p
              className="subscribe-note mt-7 text-[13px] font-mono tracking-[0.08em]"
              style={{ color: 'var(--text-muted)' }}
            >
              // JOIN FOUNDERS, EXECUTIVES, AND SYSTEM THINKERS
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .subscribe-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 40px rgba(0, 240, 255, 0.3);
        }
        .subscribe-input::placeholder {
          color: var(--text-muted);
        }
        .light-mode .subscribe-box::after {
          background: linear-gradient(145deg, rgba(245, 245, 247, 0.98), rgba(255, 255, 255, 0.95));
        }
        @media (max-width: 768px) {
          .subscribe-box {
            padding: 70px 36px !important;
          }
        }
      `}</style>
    </section>
  )
}
