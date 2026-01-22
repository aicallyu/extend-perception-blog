import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/i18n'

gsap.registerPlugin(ScrollTrigger)

// n8n Webhook URL - replace with your actual webhook URL after importing the workflow
const WEBHOOK_URL = import.meta.env.VITE_SUBSCRIBE_WEBHOOK_URL || 'https://your-n8n-instance.com/webhook/unblind-subscribe'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Subscribe() {
  const sectionRef = useRef<HTMLElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const { t, language } = useLanguage()

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const box = section.querySelector('.subscribe-box')

    gsap.set(box, { opacity: 0, scale: 0.95 })

    gsap.to(box, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: box,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

  }, [])

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
          source: 'landing-page',
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Subscription failed')
      }
    } catch {
      setStatus('error')
      // Reset to idle after 4 seconds
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return t.subscribe.sending
      case 'success':
        return '✓'
      case 'error':
        return '!'
      default:
        return t.subscribe.button
    }
  }

  const getButtonStyle = () => {
    if (status === 'success') {
      return { background: 'linear-gradient(135deg, #10b981, #059669)' }
    }
    if (status === 'error') {
      return { background: 'linear-gradient(135deg, #ef4444, #dc2626)' }
    }
    return {}
  }

  return (
    <section ref={sectionRef} className="subscribe-section py-24" id="subscribe">
      <div className="container">
        <div
          className="subscribe-box py-16 px-12 text-center relative overflow-hidden rounded-[36px]"
          style={{
            background: 'linear-gradient(145deg, rgba(0, 240, 255, 0.06), rgba(168, 85, 247, 0.04))',
            border: '1px solid rgba(0, 240, 255, 0.2)',
          }}
        >
          {/* Rotating background */}
          <div
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(0, 240, 255, 0.12), transparent 15%)',
              animation: 'rotateBg 12s linear infinite',
            }}
          />

          {/* Inner background */}
          <div
            className="absolute inset-[2px] rounded-[34px] z-0"
            style={{
              background: 'linear-gradient(145deg, rgba(3, 3, 5, 0.98), rgba(10, 10, 16, 0.95))',
            }}
          />

          <div className="subscribe-content relative z-[1]">
            <h2
              className="subscribe-title font-display text-[52px] font-black mb-6"
            >
              {t.subscribe.title} <span className="gradient-text">{t.subscribe.titleHighlight}</span>
            </h2>

            <p
              className="subscribe-desc text-[19px] mb-[52px] max-w-[520px] mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.subscribe.subtitle}
            </p>

            {status === 'success' ? (
              <div className="success-message py-6 px-8 rounded-[14px] max-w-[540px] mx-auto" style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
              }}>
                <p className="text-lg font-medium" style={{ color: '#10b981' }}>
                  {t.subscribe.success}
                </p>
              </div>
            ) : (
              <form
                className="subscribe-form flex gap-[18px] max-w-[540px] mx-auto flex-wrap justify-center"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  className="subscribe-input flex-1 min-w-[200px] py-[22px] px-[30px] rounded-[14px] font-main text-base outline-none transition-all duration-400"
                  placeholder={t.subscribe.namePlaceholder}
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  disabled={status === 'sending'}
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)',
                    opacity: status === 'sending' ? 0.6 : 1,
                  }}
                />
                <input
                  type="email"
                  className="subscribe-input flex-1 min-w-[200px] py-[22px] px-[30px] rounded-[14px] font-main text-base outline-none transition-all duration-400"
                  placeholder={t.subscribe.placeholder}
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={status === 'sending'}
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)',
                    opacity: status === 'sending' ? 0.6 : 1,
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary subscribe-btn py-[22px] px-11 transition-all duration-300"
                  disabled={status === 'sending'}
                  style={{
                    ...getButtonStyle(),
                    opacity: status === 'sending' ? 0.8 : 1,
                    minWidth: '160px',
                  }}
                >
                  {getButtonText()}
                </button>
              </form>
            )}

            {status === 'error' && (
              <p className="mt-4 text-sm" style={{ color: '#ef4444' }}>
                {t.subscribe.error}
              </p>
            )}

            <p
              className="subscribe-note mt-7 text-[13px] font-mono tracking-[0.08em]"
              style={{ color: 'var(--text-muted)' }}
            >
              {t.subscribe.note}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .subscribe-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 40px rgba(0, 240, 255, 0.3);
        }
        .subscribe-input::placeholder {
          color: var(--text-muted);
        }
        .subscribe-input:disabled {
          cursor: not-allowed;
        }
        .light-mode .subscribe-box::after {
          background: linear-gradient(145deg, rgba(245, 245, 247, 0.98), rgba(255, 255, 255, 0.95));
        }
        @media (max-width: 768px) {
          .subscribe-box {
            padding: 70px 36px !important;
          }
          .subscribe-form {
            flex-direction: column;
          }
          .subscribe-input {
            min-width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
