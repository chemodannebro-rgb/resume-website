import { Flame, Sparkles, ArrowRight } from 'lucide-react'

export function Tools() {
  return (
    <section id="tools">
      <div className="container">
        <div className="tools-head reveal">
          <div className="s-label">Личные проекты</div>
          <h2 className="s-title">Инструменты для работы <span>с LLM и агентами</span></h2>
        </div>
        <div className="tools-grid">
          <a href="/llm-burnwatch/" className="tool-card reveal">
            <div className="tool-card-icon"><Flame /></div>
            <div className="tool-card-title">LLM Burnwatch</div>
            <div className="tool-card-desc">Локальный контроль расходов на LLM. Сам учится норме по вашим вызовам и ловит аномалии — зацикливание агента, скачок цены, превышение бюджета.</div>
            <div className="tool-card-link">Открыть проект <ArrowRight className="tool-card-link-icon" /></div>
          </a>
          <div className="tool-card tool-card-soon reveal d1">
            <div className="tool-card-icon"><Sparkles /></div>
            <div className="tool-card-title">Что-то новое уже в работе</div>
            <div className="tool-card-desc">Скоро здесь появится ещё один проект — не переключайтесь.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
