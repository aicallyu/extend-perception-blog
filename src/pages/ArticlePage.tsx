import { useParams, Navigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { getArticleBySlug, articles } from '@/data/articles'
import { getArticleContent } from '@/data/articleContent'
import { categoryKeyMap } from '@/data/constants'
import ArticleContentRenderer from '@/components/article/ArticleContentRenderer'
import { useLanguage } from '@/i18n'
import LanguageSelector from '@/components/LanguageSelector'

// n8n Webhook URL
const WEBHOOK_URL = import.meta.env.VITE_SUBSCRIBE_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/unblind-subscribe'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const { isDark, toggleTheme } = useTheme()
  const [progress, setProgress] = useState(0)
  const { t, language } = useLanguage()

  // Subscribe form state
  const [subscribeName, setSubscribeName] = useState('')
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<SubmitStatus>('idle')

  const article = slug ? getArticleBySlug(slug) : undefined
  const articleContent = slug ? getArticleContent(slug, language) : undefined

  // Übersetzte Artikel-Daten
  const getTranslatedArticle = () => {
    if (!article) return null
    const articleId = article.id as keyof typeof t.articles
    const translated = t.articles[articleId]
    const categoryKey = categoryKeyMap[article.category.name]
    const translatedCategory = categoryKey ? t.categories[categoryKey] : article.category.name

    return {
      title: translated?.title || article.title,
      subtitle: translated?.subtitle || article.subtitle,
      excerpt: translated?.excerpt || article.excerpt,
      categoryName: translatedCategory,
    }
  }

  const translatedData = getTranslatedArticle()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.scrollTo(0, 0) // Scroll to top on page load

    return () => window.removeEventListener('scroll', handleScroll)
  }, [slug])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (subscribeStatus === 'sending') return

    setSubscribeStatus('sending')

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: subscribeName,
          email: subscribeEmail,
          language,
          source: `article-${slug}`,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubscribeStatus('success')
        setSubscribeName('')
        setSubscribeEmail('')
        setTimeout(() => setSubscribeStatus('idle'), 5000)
      } else {
        throw new Error('Subscription failed')
      }
    } catch {
      setSubscribeStatus('error')
      setTimeout(() => setSubscribeStatus('idle'), 4000)
    }
  }

  if (!article) {
    return <Navigate to="/" replace />
  }

  // Get related articles (excluding current)
  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .slice(0, 3)

  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      {/* Background elements */}
      <div
        className="bg-grid fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition-opacity duration-300"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: isDark ? 1 : 0,
        }}
      />

      <div
        className="orb fixed rounded-full pointer-events-none z-0 transition-opacity duration-300"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, transparent 60%)',
          top: '-200px',
          right: '-200px',
          filter: 'blur(120px)',
          animation: 'float1 30s ease-in-out infinite',
          opacity: isDark ? 1 : 0.3,
        }}
      />

      <div
        className="orb fixed rounded-full pointer-events-none z-0 transition-opacity duration-300"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 60%)',
          bottom: '20%',
          left: '-200px',
          filter: 'blur(120px)',
          animation: 'float2 25s ease-in-out infinite',
          opacity: isDark ? 1 : 0.3,
        }}
      />

      {/* Reading Progress */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[1000] transition-[width] duration-100"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
        }}
      />

      <div className="content relative z-10">
        {/* Navigation */}
        <nav
          className="fixed top-0 left-0 right-0 z-[100] py-5 backdrop-blur-[20px] transition-colors duration-300"
          style={{
            background: isDark
              ? 'linear-gradient(to bottom, var(--bg-dark) 0%, rgba(5, 5, 7, 0.9) 50%, transparent 100%)'
              : 'linear-gradient(to bottom, var(--bg-light) 0%, rgba(248, 249, 250, 0.95) 50%, transparent 100%)',
          }}
        >
          <div className="nav-container max-w-[1200px] mx-auto px-10 flex justify-between items-center">
            <Link to="/" className="logo flex items-center gap-3.5 no-underline">
              <div
                className="logo-icon w-10 h-10 rounded-[10px] flex items-center justify-center relative"
                style={{
                  border: '2px solid var(--accent-cyan)',
                  background: 'rgba(0, 240, 255, 0.05)',
                }}
              >
                <div
                  className="absolute w-5 h-5 rounded-full opacity-30"
                  style={{ background: 'var(--accent-cyan)' }}
                />
                <div
                  className="absolute w-2.5 h-2.5 rounded-full"
                  style={{ background: 'var(--accent-cyan)' }}
                />
              </div>
              <span
                className="logo-text font-display text-[22px] font-extrabold tracking-[0.15em] uppercase"
                style={{ color: 'var(--text-primary)' }}
              >
                UNBLIND
              </span>
            </Link>

            <div className="nav-right flex items-center gap-6">
              <ul className="nav-links hidden md:flex gap-8 list-none">
                <li>
                  <Link
                    to="/#topics"
                    className="text-sm font-medium tracking-[0.05em] uppercase no-underline transition-colors duration-300 py-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {t.nav.topics}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#posts"
                    className="text-sm font-medium tracking-[0.05em] uppercase no-underline transition-colors duration-300 py-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {t.nav.posts}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#subscribe"
                    className="text-sm font-medium tracking-[0.05em] uppercase no-underline transition-colors duration-300 py-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {t.nav.subscribe}
                  </Link>
                </li>
              </ul>

              <LanguageSelector />

              <button
                className="theme-toggle w-11 h-11 rounded-xl flex items-center justify-center text-xl cursor-pointer transition-all duration-300"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
                onClick={toggleTheme}
                title="Toggle light/dark mode"
              >
                {isDark ? '🌙' : '☀️'}
              </button>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <header className="article-header max-w-[900px] mx-auto pt-40 pb-[60px] px-10 text-center">
          <div className="article-meta flex items-center justify-center gap-6 mb-8 flex-wrap">
            <span
              className="article-category inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.15em] uppercase px-4 py-2 rounded-full"
              style={{
                color: 'var(--accent-cyan)',
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
              }}
            >
              <span className="icon text-sm">{article.category.icon}</span>
              {translatedData?.categoryName}
            </span>
            <span
              className="article-date font-mono text-xs tracking-[0.1em]"
              style={{ color: 'var(--text-muted)' }}
            >
              {article.date} · {article.readTime}
            </span>
          </div>

          <h1
            className="article-title font-display font-extrabold leading-[1.1] mb-6 tracking-tight"
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              letterSpacing: '-0.02em',
            }}
          >
            {translatedData?.title}
          </h1>

          <p
            className="article-subtitle text-xl max-w-[640px] mx-auto leading-[1.6]"
            style={{ color: 'var(--text-secondary)' }}
          >
            {translatedData?.subtitle}
          </p>
        </header>

        {/* Hero Image */}
        <div className="hero-image max-w-[1000px] mx-auto mb-[60px] px-10">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full rounded-[20px]"
            style={{
              aspectRatio: '16/9',
              objectFit: 'cover',
              border: '1px solid var(--border-color)',
            }}
          />
        </div>

        {/* Article Content */}
        <article
          className="article-content max-w-[760px] mx-auto px-10 pb-20"
          style={{ color: 'var(--text-secondary)' }}
        >
          {articleContent ? (
            <ArticleContentRenderer content={articleContent.content} />
          ) : (
            <p className="mb-7 text-lg leading-[1.9]">
              Article content not found.
            </p>
          )}
        </article>

        {/* Author Section */}
        <div className="author-section max-w-[760px] mx-auto mb-20 px-10">
          <div
            className="author-box flex items-center gap-6 p-8 rounded-[20px]"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}
          >
            <div
              className="author-avatar w-20 h-20 rounded-full flex items-center justify-center font-display text-[32px] font-bold flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                color: 'white',
              }}
            >
              JS
            </div>
            <div className="author-info">
              <h4 className="font-display text-xl font-bold mb-1">{t.article.author.name}</h4>
              <p className="text-[15px] m-0" style={{ color: 'var(--text-muted)' }}>
                {t.article.author.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div
          className="related-section max-w-[1000px] mx-auto py-20 px-10"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <div
            className="related-title font-mono text-xs tracking-[0.2em] uppercase mb-8 flex items-center gap-3"
            style={{ color: 'var(--accent-cyan)' }}
          >
            <span
              className="w-10 h-[2px]"
              style={{
                background: 'linear-gradient(90deg, var(--accent-cyan), transparent)',
              }}
            />
            {t.article.continueReading}
          </div>

          <div
            className="related-grid grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          >
            {relatedArticles.map(related => {
              const relatedId = related.id as keyof typeof t.articles
              const relatedTranslated = t.articles[relatedId]
              return (
                <Link
                  key={related.id}
                  to={`/articles/${related.slug}`}
                  className="related-card p-7 rounded-2xl no-underline relative overflow-hidden transition-all duration-400 group"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                    }}
                  />
                  <div
                    className="related-card-number font-mono text-xs mb-3"
                    style={{ color: 'var(--accent-cyan)' }}
                  >
                    {related.number}
                  </div>
                  <div className="related-card-title font-display text-lg font-bold mb-2 leading-[1.3]">
                    {relatedTranslated?.title || related.title}
                  </div>
                  <div
                    className="related-card-excerpt text-sm leading-[1.6]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {relatedTranslated?.subtitle || related.subtitle}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="subscribe-cta max-w-[800px] mx-auto py-20 px-10">
          <div
            className="subscribe-box p-[60px] rounded-3xl text-center relative overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{
                background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple), var(--accent-cyan))',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite',
              }}
            />
            <h2 className="subscribe-title font-display text-[32px] font-extrabold tracking-[0.05em] mb-3">
              {t.subscribe.title} <span className="gradient-text">{t.subscribe.titleHighlight}</span>
            </h2>
            <p className="subscribe-desc mb-8" style={{ color: 'var(--text-muted)' }}>
              {t.subscribe.subtitle}
            </p>
            {subscribeStatus === 'success' ? (
              <div className="success-message py-5 px-6 rounded-xl max-w-[440px] mx-auto" style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}>
                <p className="text-base font-medium" style={{ color: '#10b981' }}>
                  {t.subscribe.success}
                </p>
              </div>
            ) : (
              <form className="subscribe-form flex gap-3 max-w-[500px] mx-auto flex-wrap justify-center" onSubmit={handleSubscribe}>
                <input
                  type="text"
                  className="subscribe-input flex-1 py-4 px-5 rounded-xl font-main text-[15px] outline-none transition-all duration-300"
                  placeholder={t.subscribe.namePlaceholder}
                  required
                  value={subscribeName}
                  onChange={e => setSubscribeName(e.target.value)}
                  disabled={subscribeStatus === 'sending'}
                  style={{
                    background: 'var(--bg-dark)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    minWidth: '140px',
                    opacity: subscribeStatus === 'sending' ? 0.6 : 1,
                  }}
                />
                <input
                  type="email"
                  className="subscribe-input flex-1 py-4 px-5 rounded-xl font-main text-[15px] outline-none transition-all duration-300"
                  placeholder={t.subscribe.placeholder}
                  required
                  value={subscribeEmail}
                  onChange={e => setSubscribeEmail(e.target.value)}
                  disabled={subscribeStatus === 'sending'}
                  style={{
                    background: 'var(--bg-dark)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    minWidth: '180px',
                    opacity: subscribeStatus === 'sending' ? 0.6 : 1,
                  }}
                />
                <button
                  type="submit"
                  className="subscribe-btn py-4 px-7 rounded-xl font-display text-sm font-bold tracking-[0.1em] uppercase cursor-pointer transition-all duration-300 whitespace-nowrap"
                  disabled={subscribeStatus === 'sending'}
                  style={{
                    background: subscribeStatus === 'error'
                      ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                      : 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                    border: 'none',
                    color: '#000',
                    opacity: subscribeStatus === 'sending' ? 0.8 : 1,
                    minWidth: '130px',
                  }}
                >
                  {subscribeStatus === 'sending' ? t.subscribe.sending : subscribeStatus === 'error' ? '!' : t.subscribe.button}
                </button>
              </form>
            )}
            {subscribeStatus === 'error' && (
              <p className="mt-3 text-sm" style={{ color: '#ef4444' }}>
                {t.subscribe.error}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer
          className="py-10"
          style={{
            borderTop: '1px solid var(--border-color)',
            background: 'var(--bg-card)',
          }}
        >
          <div className="footer-content max-w-[1200px] mx-auto px-10 flex justify-between items-center flex-wrap gap-5">
            <div
              className="footer-logo font-display text-lg font-extrabold tracking-[0.15em] uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              UNBLIND
            </div>
            <div className="footer-links flex gap-8">
              <Link
                to="/"
                className="footer-link text-[13px] font-medium uppercase tracking-[0.05em] no-underline transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                Home
              </Link>
              <a
                href="#"
                className="footer-link text-[13px] font-medium uppercase tracking-[0.05em] no-underline transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                {t.footer.rss}
              </a>
              <a
                href="#"
                className="footer-link text-[13px] font-medium uppercase tracking-[0.05em] no-underline transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                {t.footer.about}
              </a>
            </div>
            <div className="footer-copy text-[13px]" style={{ color: 'var(--text-muted)' }}>
              {t.footer.copyright}
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, 100px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(80px, -60px); }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .gradient-text {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .related-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }
        .subscribe-input:focus {
          border-color: var(--accent-cyan);
        }
        .subscribe-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.3);
        }
        .footer-link:hover {
          color: var(--accent-cyan);
        }
        @media (max-width: 768px) {
          .article-header {
            padding: 140px 24px 60px;
          }
          .article-content {
            padding: 0 24px 80px;
          }
          .hero-image {
            padding: 0 24px;
          }
          .author-box {
            flex-direction: column;
            text-align: center;
          }
          .subscribe-form {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
