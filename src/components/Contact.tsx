export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="reveal">
            <div className="s-label">Контакты</div>
            <h2 className="contact-title">Открыт к <span>диалогу</span></h2>
            <div className="contact-links">
              <a href="tel:+79154793140" className="contact-link reveal">
                <div className="cl-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="cl-info"><div className="cl-lbl">Телефон</div><div className="cl-val">+7 (915) 479-31-40</div></div>
              </a>
              <a href="https://t.me/FatBros" className="contact-link reveal d1" target="_blank" rel="noopener">
                <div className="cl-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215L3.02 9.65c-1.14.459-1.121 1.583-.197 1.865l4.34 1.376 1.937 5.96c.247.757 1.076.963 1.63.487l2.347-2.01 4.51 3.394c.829.622 1.99.229 2.24-.758l3.19-14.206c.27-1.188-.539-2.013-1.82-1.325z"/>
                  </svg>
                </div>
                <div className="cl-info"><div className="cl-lbl">Telegram</div><div className="cl-val">@FatBros</div></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
