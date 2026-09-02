export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <div className="s-label">Компетенции</div>
          <h2 className="s-title">Чем могу <span>быть полезен</span></h2>
        </div>
        <div className="val-grid">

          <div className="val-item reveal">
            <div className="val-num">01</div>
            <div className="val-title">Управление командами</div>
            <p className="val-desc">Собираю и синхронизирую распределённые команды, выстраиваю процессы, а не просто слежу за ними. Управлял командой до 30 человек: две внутренние команды и подрядчик.</p>
          </div>

          <div className="val-item reveal d1">
            <div className="val-num">02</div>
            <div className="val-title">Технические интеграции</div>
            <p className="val-desc">Понимаю устройство систем изнутри, работаю с командой разработчиков напрямую, без переводчика — от API-дизайна до разбора инцидентов в проде.</p>
          </div>

          <div className="val-item reveal">
            <div className="val-num">03</div>
            <div className="val-title">Переговоры и стейкхолдеры</div>
            <p className="val-desc">Нахожу общий язык с любым подразделением — от безопасности и юристов до топ-менеджмента. Выступал перед аудиторией 100+ человек, защищал продуктовую стратегию на уровне генерального директора.</p>
          </div>

          <div className="val-item reveal d1">
            <div className="val-num">04</div>
            <div className="val-title">Метрики и данные</div>
            <p className="val-desc">Строю сквозную аналитику и принимаю решения по данным, а не по ощущениям. Отслеживал MAU, CR, Take Rate, Approval Rate, CSI, Error Rate — по каждому каналу отдельно.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
