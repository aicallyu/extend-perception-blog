import { useLanguage } from '@/i18n'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-[90px] border-t border-white/5">
      <div className="container">
        <div className="footer-content flex justify-between items-center flex-wrap gap-9">
          <div className="footer-logo font-display text-xl font-extrabold tracking-[0.1em] text-[var(--text-secondary)]">
            <span style={{ color: 'var(--accent-cyan)' }}>X</span>
            <span style={{ color: 'var(--accent-purple)' }}>P</span>
            <span className="ml-2 text-sm font-normal tracking-normal opacity-60">Extend Perception</span>
          </div>
          <div className="footer-links flex gap-11">
            <a href="#" className="footer-link text-[13px] font-semibold text-[var(--text-secondary)] no-underline tracking-[0.08em] uppercase transition-colors duration-300 hover:text-[var(--accent-cyan)]">
              {t.footer.rss}
            </a>
            <a href="#posts" className="footer-link text-[13px] font-semibold text-[var(--text-secondary)] no-underline tracking-[0.08em] uppercase transition-colors duration-300 hover:text-[var(--accent-cyan)]">
              {t.footer.archive}
            </a>
            <a href="#" className="footer-link text-[13px] font-semibold text-[var(--text-secondary)] no-underline tracking-[0.08em] uppercase transition-colors duration-300 hover:text-[var(--accent-cyan)]">
              {t.footer.about}
            </a>
          </div>
          <div className="footer-text text-[13px] text-[var(--text-muted)]">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}
