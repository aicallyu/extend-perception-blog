import { useState } from 'react'
import { useLanguage, Language } from '@/i18n'

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
]

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find(l => l.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-sm font-medium transition-all duration-300"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          color: 'var(--text-secondary)',
        }}
      >
        <span className="text-base sm:text-lg">{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div
            className="absolute right-0 mt-2 py-2 rounded-xl shadow-xl z-50 min-w-[140px]"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}
          >
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors duration-200 ${
                  language === lang.code ? 'font-semibold' : ''
                }`}
                style={{
                  color: language === lang.code ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  background: 'transparent',
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
                {language === lang.code && (
                  <span className="ml-auto" style={{ color: 'var(--accent-cyan)' }}>✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}

      <style>{`
        .relative button:hover {
          border-color: var(--accent-cyan);
        }
        .relative div button:hover {
          background: rgba(0, 240, 255, 0.1) !important;
        }
      `}</style>
    </div>
  )
}
