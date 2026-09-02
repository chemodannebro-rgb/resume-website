import { useState } from 'react'

export function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    const shareData = { title: document.title, url: window.location.href }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        // пользователь отменил — ничего не делаем
      }
      return
    }
    try {
      await navigator.clipboard.writeText(shareData.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // буфер обмена недоступен — молча игнорируем
    }
  }

  return (
    <button
      className="icon-btn share-btn"
      data-copied={copied}
      aria-label={copied ? 'Ссылка скопирована' : 'Поделиться'}
      onClick={handleClick}
    >
      <svg className="icon-share" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
      <svg className="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </button>
  )
}
