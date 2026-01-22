import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface QuoteProps {
  words: { text: string; highlight?: boolean }[]
  author: string
}

export default function Quote({ words, author }: QuoteProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const wordElements = section.querySelectorAll('.word')
    const authorEl = section.querySelector('.quote-author')
    const bg = section.querySelector('.quote-bg')

    // Initial states
    gsap.set(wordElements, { opacity: 0, y: 30 })
    gsap.set(authorEl, { opacity: 0 })

    // Background fade
    gsap.to(bg, {
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'top 30%',
        scrub: 1,
      },
    })

    // Words animation
    wordElements.forEach((word, i) => {
      gsap.to(word, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: `top+=${i * 20} 70%`,
          toggleActions: 'play none none reverse',
        },
      })
    })

    // Author animation
    gsap.to(authorEl, {
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: section,
        start: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    })

  }, [])

  return (
    <section
      ref={sectionRef}
      className="quote-section py-16 relative flex items-center justify-center min-h-[40vh]"
    >
      <div
        className="quote-bg absolute w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.05) 0%, transparent 70%)',
          opacity: 0,
        }}
      />

      <div className="quote-content text-center max-w-[900px] px-10 relative z-[2]">
        <p
          className="quote-text font-display font-bold leading-[1.3] tracking-tight"
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={`word inline-block mr-[0.25em] ${
                word.highlight ? 'highlight' : ''
              }`}
              style={{
                color: word.highlight ? 'var(--accent-cyan)' : undefined,
                textShadow: word.highlight ? '0 0 40px rgba(0, 240, 255, 0.5)' : undefined,
              }}
            >
              {word.text}
            </span>
          ))}
        </p>

        <p
          className="quote-author mt-[30px] font-mono text-sm tracking-[0.1em]"
          style={{ color: 'var(--text-muted)' }}
        >
          – {author}
        </p>
      </div>
    </section>
  )
}
