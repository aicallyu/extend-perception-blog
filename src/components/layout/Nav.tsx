import { Link } from 'react-router-dom'
import { useLanguage } from '@/i18n'
import LanguageSelector from '@/components/LanguageSelector'

interface NavProps {
  isArticlePage?: boolean
}

export default function Nav({ isArticlePage = false }: NavProps) {
  const { t } = useLanguage()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isArticlePage) return // Let the link navigate to home
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav>
      <div className="container">
        <div className="nav-content flex justify-between items-center">
          <Link to="/" className="logo" aria-label="Extend Perception - Home">
            <span className="logo-text" style={{ fontWeight: 800 }}>
              <span style={{ color: 'var(--accent-cyan)' }}>X</span>
              <span style={{ color: 'var(--accent-purple)' }}>P</span>
            </span>
          </Link>
          <ul className="nav-links">
            <li>
              <a
                href={isArticlePage ? "/#sequence" : "#sequence"}
                onClick={(e) => scrollToSection(e, 'sequence')}
              >
                {t.nav.sequence}
              </a>
            </li>
            <li>
              <a
                href={isArticlePage ? "/#topics" : "#topics"}
                onClick={(e) => scrollToSection(e, 'topics')}
              >
                {t.nav.topics}
              </a>
            </li>
            <li>
              <a
                href={isArticlePage ? "/#library" : "#library"}
                onClick={(e) => scrollToSection(e, 'library')}
              >
                {t.nav.featured}
              </a>
            </li>
            <li>
              <a
                href={isArticlePage ? "/#posts" : "#posts"}
                onClick={(e) => scrollToSection(e, 'posts')}
              >
                {t.nav.posts}
              </a>
            </li>
            <li>
              <a
                href={isArticlePage ? "/#subscribe" : "#subscribe"}
                onClick={(e) => scrollToSection(e, 'subscribe')}
              >
                {t.nav.subscribe}
              </a>
            </li>
          </ul>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  )
}
