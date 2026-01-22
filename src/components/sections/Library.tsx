import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { articles } from '@/data/articles'
import { categoryKeyMap } from '@/data/constants'
import { useLanguage } from '@/i18n'

gsap.registerPlugin(ScrollTrigger)

export default function Library() {
  const sectionRef = useRef<HTMLElement>(null)
  const shelfRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentIndexRef = useRef(currentIndex) // Ref to avoid stale closures
  const isAnimating = useRef(false)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { t } = useLanguage()

  // Keep ref in sync with state
  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

  const totalBooks = articles.length
  const angleStep = 360 / totalBooks
  const radius = 600

  const positionBooks = useCallback((animate = true) => {
    const books = shelfRef.current?.querySelectorAll('.book-card')
    if (!books) return

    books.forEach((book, i) => {
      const angle = (i - currentIndex) * angleStep
      const radian = (angle * Math.PI) / 180
      const x = Math.sin(radian) * radius
      const z = Math.cos(radian) * radius - radius
      const rotateY = -angle
      const normalizedZ = (z + radius) / (radius * 2)
      const opacity = 0.3 + normalizedZ * 0.7
      const scale = 0.7 + normalizedZ * 0.3

      if (animate) {
        gsap.to(book, {
          x,
          z,
          rotateY,
          scale,
          opacity,
          duration: 0.8,
          ease: 'power3.out',
        })
      } else {
        gsap.set(book, { x, z, rotateY, scale, opacity })
      }

      ;(book as HTMLElement).style.zIndex = String(Math.round(normalizedZ * 100))
    })
  }, [currentIndex, angleStep])

  const goToBook = useCallback((index: number) => {
    if (isAnimating.current) return
    isAnimating.current = true

    let newIndex = index
    if (newIndex < 0) newIndex = totalBooks - 1
    if (newIndex >= totalBooks) newIndex = 0

    setCurrentIndex(newIndex)
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current)
    animationTimeoutRef.current = setTimeout(() => {
      isAnimating.current = false
    }, 800)
  }, [totalBooks])

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => {
        if (isAnimating.current) return prev
        isAnimating.current = true
        const newIndex = prev >= totalBooks - 1 ? 0 : prev + 1
        if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current)
        animationTimeoutRef.current = setTimeout(() => {
          isAnimating.current = false
        }, 800)
        return newIndex
      })
    }, 4000)
  }, [totalBooks])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }, [])

  useEffect(() => {
    positionBooks(true)
  }, [currentIndex, positionBooks])

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const label = section.querySelector('.library-label')
    const title = section.querySelector('.library-title')

    gsap.set(label, { opacity: 0 })
    gsap.set(title, { opacity: 0, y: 30 })

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      onEnter: () => {
        gsap.to(label, { opacity: 1, duration: 0.6 })
        gsap.to(title, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })
      },
    })

    // Initial positioning
    positionBooks(false)
    startAutoPlay()

    // Keyboard navigation - use ref to avoid stale closure
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToBook(currentIndexRef.current - 1)
      if (e.key === 'ArrowRight') goToBook(currentIndexRef.current + 1)
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      stopAutoPlay()
      trigger.kill()
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const bookColors = [
    'linear-gradient(180deg, var(--accent-cyan), var(--accent-blue))',
    'linear-gradient(180deg, var(--accent-purple), var(--accent-blue))',
    'linear-gradient(180deg, var(--accent-blue), var(--accent-cyan))',
    'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple))',
    'linear-gradient(180deg, var(--accent-green), var(--accent-cyan))',
    'linear-gradient(180deg, var(--accent-purple), var(--accent-cyan))',
  ]

  return (
    <section
      ref={sectionRef}
      className="library-section py-24 min-h-screen flex flex-col justify-center relative"
      id="library"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.08) 0%, transparent 50%)',
        }}
      />

      <div className="library-header text-center mb-[100px] relative z-10">
        <div
          className="library-label font-mono text-xs tracking-[0.3em] uppercase mb-6 inline-flex items-center gap-5"
          style={{ color: 'var(--accent-cyan)' }}
        >
          {t.library.label}
        </div>
        <h2
          className="library-title font-display text-[64px] font-black tracking-tight"
          style={{
            background: 'linear-gradient(135deg, var(--text-primary), var(--accent-cyan), var(--text-primary))',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'titleShine 4s ease-in-out infinite',
            letterSpacing: '-0.03em',
          }}
        >
          {t.library.title}
        </h2>
      </div>

      <div
        className="library-stage relative w-full h-[650px]"
        style={{ perspective: '2000px' }}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div
          ref={shelfRef}
          className="library-shelf absolute w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {articles.map((article, index) => {
            const articleId = article.id as keyof typeof t.articles
            const translated = t.articles[articleId]
            const categoryKey = categoryKeyMap[article.category.name]
            const translatedCategory = categoryKey ? t.categories[categoryKey] : article.category.name
            return (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="book-card absolute flex flex-col no-underline"
                style={{
                  width: '380px',
                  height: '580px',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-190px',
                  marginTop: '-290px',
                  background: 'linear-gradient(165deg, rgba(18, 18, 28, 0.98), rgba(8, 8, 14, 0.99))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  padding: '28px',
                  color: 'var(--text-primary)',
                  backfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
                  transition: 'box-shadow 0.5s',
                }}
              >
                {/* Left color stripe */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-2 rounded-l-[24px] opacity-90"
                  style={{ background: bookColors[index] }}
                />

                <div
                  className="book-image w-full mb-5 rounded-[16px] overflow-hidden flex-shrink-0"
                  style={{ aspectRatio: '1/1' }}
                >
                  <img
                    src={article.heroImage}
                    alt={translated?.title || article.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>

                <div className="book-title font-display text-xl font-bold mb-3 leading-[1.3]">
                  {translated?.title || article.title}
                </div>

                <div
                  className="book-desc text-sm leading-[1.6] flex-grow overflow-hidden"
                  style={{
                    color: 'var(--text-secondary)',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {translated?.excerpt || article.excerpt}
                </div>

                <div
                  className="book-footer flex justify-between items-center mt-6 pt-5"
                  style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
                >
                  <span
                    className="book-tag font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full"
                    style={{
                      background: 'rgba(0, 240, 255, 0.1)',
                      color: 'var(--accent-cyan)',
                      border: '1px solid rgba(0, 240, 255, 0.2)',
                    }}
                  >
                    {translatedCategory}
                  </span>

                  <div
                    className="book-arrow w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-400"
                    style={{
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="library-dots flex justify-center gap-4 mt-[60px] relative z-10">
        {articles.map((_, index) => (
          <button
            key={index}
            className={`dot-btn w-3.5 h-3.5 rounded-full cursor-pointer transition-all duration-400 ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{
              background: index === currentIndex ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.15)',
              border: '2px solid transparent',
              boxShadow: index === currentIndex ? '0 0 20px var(--accent-cyan)' : 'none',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
            }}
            onClick={() => goToBook(index)}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="library-nav flex justify-center gap-6 mt-10 relative z-10">
        <button
          className="nav-arrow w-[70px] h-[70px] rounded-full flex items-center justify-center text-[28px] cursor-pointer transition-all duration-500"
          style={{
            border: '2px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(0, 0, 0, 0.3)',
            color: 'var(--text-secondary)',
            backdropFilter: 'blur(10px)',
          }}
          onClick={() => goToBook(currentIndex - 1)}
        >
          ←
        </button>
        <button
          className="nav-arrow w-[70px] h-[70px] rounded-full flex items-center justify-center text-[28px] cursor-pointer transition-all duration-500"
          style={{
            border: '2px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(0, 0, 0, 0.3)',
            color: 'var(--text-secondary)',
            backdropFilter: 'blur(10px)',
          }}
          onClick={() => goToBook(currentIndex + 1)}
        >
          →
        </button>
      </div>

      <style>{`
        .nav-arrow:hover {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
          border-color: transparent;
          color: var(--bg-dark);
          transform: scale(1.15);
          box-shadow: 0 0 60px rgba(0, 240, 255, 0.5);
        }
        .book-card:hover .book-arrow {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
          border-color: transparent;
          color: var(--bg-dark);
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.4);
        }
        @media (max-width: 1024px) {
          .book-card {
            width: 300px !important;
            height: 500px !important;
            margin-left: -150px !important;
            margin-top: -250px !important;
            padding: 24px !important;
          }
        }
        @media (max-width: 768px) {
          .book-card {
            width: 280px !important;
            height: 480px !important;
            margin-left: -140px !important;
            margin-top: -240px !important;
            padding: 20px !important;
          }
          .library-title {
            font-size: 42px !important;
          }
        }
      `}</style>
    </section>
  )
}
