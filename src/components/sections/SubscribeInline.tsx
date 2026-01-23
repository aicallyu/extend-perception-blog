import { useState } from 'react'
import { useLanguage } from '@/i18n'

const WEBHOOK_URL = import.meta.env.VITE_SUBSCRIBE_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/xp-subscribe'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

interface SubscribeInlineProps {
  source?: string
}

export default function SubscribeInline({ source = 'inline' }: SubscribeInlineProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const { t, language } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (status === 'sending') return

    setStatus('sending')

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          language,
          source,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Subscription failed')
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  if (status === 'success') {
    return (
      <div className="subscribe-inline py-12 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 py-4 px-8 rounded-full" style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
          }}>
            <span className="text-2xl">✓</span>
            <span className="text-lg font-medium" style={{ color: '#10b981' }}>
              {t.subscribe.success}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="subscribe-inline py-12 px-6">
      <div className="container max-w-4xl mx-auto">
        <div
          className="flex flex-col md:flex-row items-center gap-6 py-8 px-8 md:px-12 rounded-2xl"
          style={{
            background: 'linear-gradient(145deg, rgba(0, 240, 255, 0.04), rgba(168, 85, 247, 0.03))',
            border: '1px solid rgba(0, 240, 255, 0.15)',
          }}
        >
          <div className="flex-shrink-0 text-center md:text-left">
            <h3 className="text-xl font-display font-bold mb-1">
              {t.subscribe.title} <span className="gradient-text">{t.subscribe.titleHighlight}</span>
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t.subscribe.note}
            </p>
          </div>

          <form
            className="flex flex-1 flex-col sm:flex-row gap-3 w-full md:w-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="flex-1 min-w-0 py-3 px-5 rounded-xl text-sm outline-none transition-all duration-300"
              placeholder={t.subscribe.namePlaceholder}
              required
              value={name}
              onChange={e => setName(e.target.value)}
              disabled={status === 'sending'}
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-primary)',
                opacity: status === 'sending' ? 0.6 : 1,
              }}
            />
            <input
              type="email"
              className="flex-1 min-w-0 py-3 px-5 rounded-xl text-sm outline-none transition-all duration-300"
              placeholder={t.subscribe.placeholder}
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={status === 'sending'}
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-primary)',
                opacity: status === 'sending' ? 0.6 : 1,
              }}
            />
            <button
              type="submit"
              className="btn btn-primary py-3 px-8 text-sm font-semibold whitespace-nowrap transition-all duration-300"
              disabled={status === 'sending'}
              style={{
                opacity: status === 'sending' ? 0.8 : 1,
                background: status === 'error'
                  ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                  : undefined,
              }}
            >
              {status === 'sending' ? t.subscribe.sending : status === 'error' ? '!' : t.subscribe.button}
            </button>
          </form>
        </div>

        {status === 'error' && (
          <p className="mt-3 text-center text-sm" style={{ color: '#ef4444' }}>
            {t.subscribe.error}
          </p>
        )}
      </div>

      <style>{`
        .subscribe-inline input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
        }
        .subscribe-inline input::placeholder {
          color: var(--text-muted);
        }
      `}</style>
    </div>
  )
}
