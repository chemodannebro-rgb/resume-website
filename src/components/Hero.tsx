import { HandwritingText } from './ui/handwriting-text'

const STAGGER_STEP = 0.09

function AnimatedChars({ text, startIndex = 0 }: { text: string; startIndex?: number }) {
  return (
    <>
      {text.split('').map((ch, i) => (
        <span key={i} className="hero-name-char" style={{ animationDelay: `${(startIndex + i) * STAGGER_STEP}s` }}>
          {ch}
        </span>
      ))}
    </>
  )
}

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <div className="container hero-inner">
        <div className="hero-text">
          <h1 className="hero-name" aria-label="Алексей Лисин">
            <span className="hero-name-plain" aria-hidden="true"><AnimatedChars text="Алексей" /></span>
            <span className="hero-name-grad" aria-hidden="true"><AnimatedChars text="Лисин" startIndex={7} /></span>
          </h1>
          <HandwritingText text="Product manager" className="hero-signature" height="calc(var(--hero-name-fs) * 0.6)" delay={0.7} duration={0.8} />
          <p className="hero-desc">Работаю над финансовыми и кредитными продуктами — от идеи до запуска и масштабирования. В IT уже 10 лет, последние пять — в продуктовом управлении. Разбираюсь в технической части, метриках и в управлении командами. Мне интересны задачи, где одновременно нужно думать как инженер и принимать решения как менеджер.</p>
          <div className="hero-cta-group">
            <a href="#skills" className="hero-cta hero-cta-secondary">Обо мне</a>
            <a href="#contact" className="hero-cta hero-cta-primary">Написать</a>
          </div>
        </div>
      </div>
    </section>
  )
}
