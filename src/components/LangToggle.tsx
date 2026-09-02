import { useState } from 'react'

export function LangToggle() {
  const [lang, setLang] = useState<'ru' | 'en'>('ru')

  return (
    <button
      className="icon-btn lang-toggle"
      data-lang={lang}
      aria-label="Язык (в разработке)"
      title="Перевод сайта в разработке"
      onClick={() => setLang((l) => (l === 'ru' ? 'en' : 'ru'))}
    >
      <span className="lang-label-ru">RU</span>
      <span className="lang-label-en">EN</span>
    </button>
  )
}
