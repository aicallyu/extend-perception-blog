import { Link } from 'react-router-dom'
import { getLatestArticle } from '@/data/articles'
import { categoryKeyMap } from '@/data/constants'
import { useLanguage } from '@/i18n'

export default function FeaturedPost() {
  const article = getLatestArticle()
  const { t } = useLanguage()

  // Übersetzte Artikel-Daten
  const articleId = article.id as keyof typeof t.articles
  const translated = t.articles[articleId]
  const categoryKey = categoryKeyMap[article.category.name]
  const translatedCategory = categoryKey ? t.categories[categoryKey] : article.category.name

  return (
    <section className="featured-section py-[100px_0_60px]">
      <div className="container">
        <div
          className="featured-label font-mono text-xs font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
          style={{ color: 'var(--accent-cyan)' }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: 'var(--accent-cyan)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          {t.featured.label}
        </div>

        <Link
          to={`/articles/${article.slug}`}
          className="featured-card grid gap-[60px] rounded-[24px] overflow-hidden no-underline relative transition-all duration-500 group"
          style={{
            gridTemplateColumns: '1fr 1fr',
            background: 'var(--bg-card)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            color: 'inherit',
          }}
        >
          {/* Top gradient border */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple), var(--accent-blue))',
            }}
          />

          {/* Image */}
          <div className="featured-image overflow-hidden" style={{ aspectRatio: '16/10' }}>
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-600 ease-out-expo group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="featured-content py-12 pr-12 flex flex-col justify-center">
            <span
              className="featured-category inline-flex items-center gap-2 w-fit font-mono text-[11px] font-semibold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-5"
              style={{
                color: 'var(--accent-cyan)',
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
              }}
            >
              {article.category.icon} {translatedCategory}
            </span>

            <h2
              className="featured-title font-display font-extrabold leading-[1.15] mb-4 tracking-tight"
              style={{
                fontSize: 'clamp(28px, 3vw, 40px)',
                letterSpacing: '-0.02em',
              }}
            >
              {translated?.title || article.title}
            </h2>

            <p
              className="featured-excerpt text-[17px] leading-[1.7] mb-7"
              style={{ color: 'var(--text-secondary)' }}
            >
              {translated?.excerpt || article.excerpt}
            </p>

            <div
              className="featured-meta flex items-center gap-5 font-mono text-xs"
              style={{ color: 'var(--text-muted)' }}
            >
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>

            <div
              className="featured-cta inline-flex items-center gap-2.5 mt-8 font-display text-sm font-bold tracking-[0.1em] uppercase transition-all duration-300"
              style={{ color: 'var(--accent-cyan)' }}
            >
              {t.featured.cta}
              <span
                className="arrow w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--accent-cyan)] group-hover:text-black group-hover:translate-x-1"
                style={{
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                }}
              >
                →
              </span>
            </div>
          </div>
        </Link>
      </div>

      <style>{`
        .featured-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 240, 255, 0.2);
          box-shadow: 0 40px 100px rgba(0, 240, 255, 0.15);
        }
        @media (max-width: 900px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
          .featured-content {
            padding: 36px !important;
          }
          .featured-image {
            aspect-ratio: 16/9 !important;
          }
        }
      `}</style>
    </section>
  )
}
