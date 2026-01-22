import { ReactNode, useState, useEffect, useRef } from 'react'

interface HighlightBoxProps {
  children: ReactNode
  copyText: string
  shareText: string
}

export default function HighlightBox({ children, copyText, shareText }: HighlightBoxProps) {
  const [copied, setCopied] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API may not be available in some contexts
    }
  }

  const handleShare = async () => {
    const url = window.location.href
    const text = `"${shareText}" – from UNBLIND`

    if (navigator.share) {
      try {
        await navigator.share({ title: 'UNBLIND', text, url })
      } catch {
        // User cancelled or share failed - fallback to clipboard
        await navigator.clipboard.writeText(`${text} ${url}`)
        setLinkCopied(true)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setLinkCopied(false), 2000)
      }
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`)
      setLinkCopied(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setLinkCopied(false), 2000)
    }
  }

  return (
    <div
      className="highlight-box my-12 p-8 rounded-2xl relative overflow-hidden transition-all duration-400 group"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid rgba(0, 240, 255, 0.2)',
      }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
        }}
      />

      {/* Content */}
      <div className="text-lg" style={{ color: 'var(--text-secondary)' }}>
        {children}
      </div>

      {/* Action buttons */}
      <div
        className="highlight-box-actions flex gap-2 mt-5 opacity-0 translate-y-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
      >
        <button
          onClick={handleCopy}
          className={`action-btn px-4 py-2.5 rounded-lg font-mono text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all duration-300 ${
            copied ? 'copied' : ''
          }`}
          style={{
            background: copied ? '#10b981' : 'rgba(0, 240, 255, 0.1)',
            border: copied ? '1px solid #10b981' : '1px solid rgba(0, 240, 255, 0.2)',
            color: copied ? 'white' : 'var(--accent-cyan)',
          }}
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
        <button
          onClick={handleShare}
          className="action-btn px-4 py-2.5 rounded-lg font-mono text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all duration-300"
          style={{
            background: linkCopied ? '#10b981' : 'rgba(0, 240, 255, 0.1)',
            border: linkCopied ? '1px solid #10b981' : '1px solid rgba(0, 240, 255, 0.2)',
            color: linkCopied ? 'white' : 'var(--accent-cyan)',
          }}
        >
          {linkCopied ? '✓ Link Copied!' : '↗ Share'}
        </button>
      </div>

      <style>{`
        .highlight-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 240, 255, 0.15);
        }
        [data-theme="light"] .highlight-box {
          border-color: rgba(8, 145, 178, 0.25);
        }
        [data-theme="light"] .highlight-box:hover {
          box-shadow: 0 20px 60px rgba(8, 145, 178, 0.15);
        }
        .action-btn:hover {
          background: var(--accent-cyan) !important;
          color: var(--bg-dark) !important;
          transform: scale(1.05);
        }
        [data-theme="light"] .action-btn {
          background: rgba(8, 145, 178, 0.1);
          border-color: rgba(8, 145, 178, 0.25);
        }
      `}</style>
    </div>
  )
}
