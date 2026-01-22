import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { articles } from '@/data/articles'
import { useLanguage } from '@/i18n'

gsap.registerPlugin(ScrollTrigger)

export default function Posts() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const label = section.querySelector('.sequence-label')
    const title = section.querySelector('.sequence-title')
    const items = section.querySelectorAll('.post-item')

    // Initial states
    gsap.set(label, { opacity: 0 })
    gsap.set(title, { opacity: 0, y: 30 })
    gsap.set(items, { opacity: 0, x: -50 })

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

    // Animate each post item
    items.forEach(item => {
      gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    })

  }, [])

  return (
    <section ref={sectionRef} className="posts-section py-40 relative" id="posts">
      <div className="container">
        <div className="section-header mb-20">
          <div
            className="sequence-label font-mono text-xs tracking-[0.25em] uppercase mb-5 flex items-center gap-4"
            style={{ color: 'var(--accent-cyan)' }}
          >
            {t.posts.label}
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
            {t.posts.title}
          </h2>
        </div>

        <div className="posts-list flex flex-col gap-1.5 rounded-[28px] overflow-hidden">
          {articles.map(article => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="post-item flex items-center py-7 px-10 gap-7 relative overflow-hidden cursor-pointer no-underline group"
              style={{
                background: 'linear-gradient(145deg, rgba(15, 15, 22, 0.9), rgba(8, 8, 14, 0.95))',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                color: 'var(--text-primary)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple))',
                }}
              />

              {/* Image */}
              <div className="post-image w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-110"
                />
              </div>

              {/* Number */}
              <div
                className="post-number font-mono text-sm w-[50px] flex-shrink-0"
                style={{ color: 'var(--accent-cyan)' }}
              >
                {article.number}
              </div>

              {/* Content */}
              <div className="post-content flex-1">
                <div className="post-title font-display text-[21px] font-bold mb-2 transition-all duration-300 group-hover:text-[var(--accent-cyan)]">
                  {article.title}
                </div>
                <div className="post-excerpt text-sm" style={{ color: 'var(--text-muted)' }}>
                  {article.subtitle}
                </div>
              </div>

              {/* Arrow */}
              <div
                className="post-arrow w-[52px] h-[52px] rounded-full flex items-center justify-center text-[22px] flex-shrink-0 ml-9 transition-all duration-500 group-hover:translate-x-2.5 group-hover:scale-110"
                style={{
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-muted)',
                }}
              >
                →
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .post-item:hover {
          background: linear-gradient(145deg, rgba(20, 20, 30, 0.95), rgba(12, 12, 18, 0.98));
          transform: translateX(16px) !important;
        }
        .post-item:hover .post-arrow {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
          border-color: transparent;
          color: var(--bg-dark);
          box-shadow: 0 0 40px rgba(0, 240, 255, 0.5);
        }
        @media (max-width: 768px) {
          .post-item {
            padding: 28px !important;
            flex-wrap: wrap;
          }
          .post-number {
            width: 100% !important;
            margin-bottom: 10px;
          }
          .post-image {
            width: 60px !important;
            height: 60px !important;
          }
          .post-arrow {
            margin-left: auto;
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  )
}
