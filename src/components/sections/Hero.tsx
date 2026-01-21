import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLanguage } from '@/i18n'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (!heroRef.current) return

    // GSAP animations for hero section
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    heroTl
      .to('.hero-label', { opacity: 1, y: 0, duration: 1 })
      .to('.hero h1', { opacity: 1, duration: 0.1 }, '-=0.5')
      .to('.hero h1 .line-inner', { y: 0, duration: 1.2, stagger: 0.15 }, '-=0.5')
      .to('.hero-description', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
      .to('.hero-cta', { opacity: 1, y: 0, duration: 1 }, '-=0.6')

    // Initial setup
    gsap.set('.hero-label', { y: 30, opacity: 0 })
    gsap.set('.hero-description', { y: 30, opacity: 0 })
    gsap.set('.hero-cta', { y: 30, opacity: 0 })
    gsap.set('.hero h1 .line-inner', { y: '100%' })
  }, [])

  return (
    <section ref={heroRef} className="hero min-h-screen flex items-center py-[140px_0_100px] relative" id="hero">
      {/* Particles */}
      <div className="particles absolute w-full h-full overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${5 + i * 10}%`,
              animationDelay: `${[0, 1.5, 0.5, 2, 1, 2.5, 0.8, 1.8, 0.3, 2.2][i]}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-content max-w-[1000px] relative z-[2]">
          <div
            className="hero-label inline-flex items-center gap-3 px-6 py-3"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(168, 85, 247, 0.05))',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              borderRadius: '100px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--accent-cyan)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '40px',
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.15)',
              opacity: 0,
            }}
          >
            <span
              className="dot w-2 h-2 rounded-full"
              style={{
                background: 'var(--accent-cyan)',
                animation: 'dotPulse 1.5s ease-in-out infinite',
                boxShadow: '0 0 10px var(--accent-cyan)',
              }}
            />
            {t.hero.label}
          </div>

          <h1
            className="font-display font-black leading-none tracking-tight mb-9"
            style={{
              fontSize: 'clamp(52px, 9vw, 95px)',
              letterSpacing: '-0.03em',
              opacity: 0,
            }}
          >
            <span className="line block overflow-hidden">
              <span className="line-inner block" style={{ transform: 'translateY(100%)' }}>
                {t.hero.tagline.split(' ').slice(0, -1).join(' ')}
              </span>
            </span>
            <span className="line block overflow-hidden">
              <span className="line-inner block gradient-text" style={{ transform: 'translateY(100%)' }}>
                {t.hero.tagline.split(' ').slice(-1)[0]}.
              </span>
            </span>
          </h1>

          <p
            className="hero-description text-[21px] max-w-[620px] mb-[50px]"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              opacity: 0,
            }}
          >
            {t.hero.subtitle}
          </p>

          <div className="hero-cta flex gap-5" style={{ opacity: 0 }}>
            <a href="#library" className="btn btn-primary">
              {t.hero.cta.blog}<span>→</span>
            </a>
            <a href="#sequence" className="btn btn-secondary">
              {t.hero.cta.sequence}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
