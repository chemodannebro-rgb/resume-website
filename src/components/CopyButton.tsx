import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // буфер обмена недоступен, молча игнорируем
    }
  }

  return (
    <button
      type="button"
      className={`bw-copy-btn ${className}`}
      data-copied={copied}
      aria-label={copied ? 'Скопировано' : 'Скопировать'}
      onClick={handleClick}
    >
      <Copy className="bw-copy-icon-copy" />
      <Check className="bw-copy-icon-check" />
      <span className="bw-copy-tip">Скопировано</span>
    </button>
  )
}
