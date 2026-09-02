export function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <div className="reveal">
          <div className="s-label">Карьера</div>
          <h2 className="s-title">Пройденный <span>путь</span></h2>
        </div>
        <div className="tl">
          <div className="tl-item tl-current reveal">
            <div className="tl-badge">10 лет</div>
            <span className="tl-dot" />
            <div className="tl-body">
              <div className="tl-co">Сбер</div>
              <div className="tl-role">Product Manager → Lead Product Manager</div>
            </div>
            <div className="tl-yr">2021 – 2026</div>
          </div>
          <div className="tl-item reveal d1">
            <span className="tl-dot" />
            <div className="tl-body">
              <div className="tl-co">СофтТелематика</div>
              <div className="tl-role">Senior Business Systems Analyst</div>
            </div>
            <div className="tl-yr">2020 – 2021</div>
          </div>
          <div className="tl-item reveal d2">
            <span className="tl-dot" />
            <div className="tl-body">
              <div className="tl-co">МТС ИТ</div>
              <div className="tl-role">Senior Business Analyst (Technical)</div>
            </div>
            <div className="tl-yr">2019 – 2020</div>
          </div>
          <div className="tl-item reveal d3">
            <span className="tl-dot" />
            <div className="tl-body">
              <div className="tl-co">МОЦ ИКТ</div>
              <div className="tl-role">System Analyst → Middle System Analyst</div>
            </div>
            <div className="tl-yr">2016 – 2019</div>
          </div>
        </div>
      </div>
    </section>
  )
}
