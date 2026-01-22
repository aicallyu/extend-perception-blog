import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MullerLyer() {
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const title = section.querySelector('.perception-title')
    const subtitle = section.querySelector('.perception-subtitle')
    const test = section.querySelector('.muller-lyer-test')
    const btn = section.querySelector('.reveal-btn')

    gsap.set([title, subtitle], { opacity: 0, y: 30 })
    gsap.set(test, { opacity: 0, y: 30 })
    gsap.set(btn, { opacity: 0 })

    ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      onEnter: () => {
        gsap.to(title, { opacity: 1, y: 0, duration: 0.8 })
        gsap.to(subtitle, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
        gsap.to(test, { opacity: 1, y: 0, duration: 0.8, delay: 0.4 })
        gsap.to(btn, { opacity: 1, duration: 0.6, delay: 0.8 })
      },
    })

  }, [])

  return (
    <section ref={sectionRef} className="perception-section py-[120px] relative flex flex-col justify-center" id="muller-lyer-test">
      <div className="perception-container text-center max-w-[900px] mx-auto px-10">
        <h2
          className="perception-title font-display text-4xl font-extrabold mb-4"
        >
          Which Line Is Longer?
        </h2>

        <p
          className="perception-subtitle text-[17px] mb-[50px] max-w-[600px] mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          Your brain lies to you constantly. Here's proof.
        </p>

        <div
          className="muller-lyer-test relative w-full max-w-[600px] mx-auto"
        >
          <div
            className="muller-lyer-container flex flex-col gap-[50px] p-[50px] rounded-[20px]"
            style={{
              background: 'linear-gradient(145deg, rgba(15, 15, 22, 0.9), rgba(8, 8, 14, 0.95))',
              border: '1px solid rgba(0, 240, 255, 0.2)',
            }}
          >
            {/* Line 1 - outward arrows */}
            <div className="muller-line flex items-center justify-center">
              <svg viewBox="0 0 400 60" className="w-full max-w-[400px] h-[60px]">
                <line x1="50" y1="30" x2="350" y2="30" stroke="var(--accent-cyan)" strokeWidth="3" />
                <line x1="50" y1="30" x2="20" y2="10" stroke="var(--accent-purple)" strokeWidth="2" />
                <line x1="50" y1="30" x2="20" y2="50" stroke="var(--accent-purple)" strokeWidth="2" />
                <line x1="350" y1="30" x2="380" y2="10" stroke="var(--accent-purple)" strokeWidth="2" />
                <line x1="350" y1="30" x2="380" y2="50" stroke="var(--accent-purple)" strokeWidth="2" />
              </svg>
            </div>

            {/* Line 2 - inward arrows */}
            <div className="muller-line flex items-center justify-center">
              <svg viewBox="0 0 400 60" className="w-full max-w-[400px] h-[60px]">
                <line x1="50" y1="30" x2="350" y2="30" stroke="var(--accent-cyan)" strokeWidth="3" />
                <line x1="50" y1="30" x2="80" y2="10" stroke="var(--accent-purple)" strokeWidth="2" />
                <line x1="50" y1="30" x2="80" y2="50" stroke="var(--accent-purple)" strokeWidth="2" />
                <line x1="350" y1="30" x2="320" y2="10" stroke="var(--accent-purple)" strokeWidth="2" />
                <line x1="350" y1="30" x2="320" y2="50" stroke="var(--accent-purple)" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {!revealed && (
            <button
              className="reveal-btn mt-[30px] py-3.5 px-7 rounded-lg font-mono text-[13px] tracking-[0.1em] cursor-pointer transition-all duration-300"
              style={{
                background: 'transparent',
                border: '2px solid rgba(0, 240, 255, 0.3)',
                color: 'var(--accent-cyan)',
              }}
              onClick={() => setRevealed(true)}
            >
              REVEAL THE TRUTH
            </button>
          )}

          <div
            className={`muller-reveal mt-[30px] p-5 rounded-xl transition-all duration-500 ${
              revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'
            }`}
            style={{
              background: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
            }}
          >
            <p className="m-0 text-base" style={{ color: 'var(--text-primary)' }}>
              <strong style={{ color: 'var(--accent-cyan)' }}>Both lines are exactly the same length.</strong>{' '}
              The arrow directions trick your brain into perceiving different lengths. This is the Müller-Lyer illusion—and it works even when you know the truth.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .reveal-btn:hover {
          background: rgba(0, 240, 255, 0.1);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
        }
      `}</style>
    </section>
  )
}
