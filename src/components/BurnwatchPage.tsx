import {
  ArrowLeft,
  Banknote,
  Brain,
  MessageCircle,
  OctagonPause,
  HardDrive,
  Gauge,
  TrendingUp,
  Repeat,
  Wallet,
  ShieldAlert,
  ExternalLink,
  Terminal,
  ShieldCheck,
} from 'lucide-react'
import { CountUp } from './CountUp'
import { FanCards, FanCard } from './ui/fan-cards'
import { ThemeToggle } from './ThemeToggle'
import { CopyButton } from './CopyButton'
import { Footer } from './Footer'
import { useReveal } from '@/hooks/useReveal'

const pipInstall = 'pip install llm-burnwatch'

const pythonSnippet = `from llm_burnwatch import CostTracker

tracker = CostTracker()
tracker.log_call(
    label="summarize",
    model="gpt-4o-mini",
    input_tokens=812,
    output_tokens=143,
)`

const cliCommands = [
  'llm-burnwatch status',
  'llm-burnwatch report',
  'llm-burnwatch detect',
  'llm-burnwatch demo-data --out demo.jsonl',
  'llm-burnwatch dashboard --out dashboard.html',
]

export function BurnwatchPage() {
  useReveal()
  return (
    <>
      <div className="top-menu">
        <ThemeToggle />
      </div>
      <section id="burnwatch-page">
        <div className="container">
          <a href="/#tools" className="bw-back-link reveal">
            <ArrowLeft className="bw-back-icon" /> На главную
          </a>

          <header className="bw-head reveal">
            <h1 className="s-title">LLM <span>Burnwatch</span></h1>
            <p className="bw-lede">
              Сторож, который считает сколько на самом деле стоят вызовы к LLM
              и предупреждает, когда агент срывается с цепи.
            </p>
          </header>

          <div className="bw-section reveal">
            <h2 className="bw-h2">Зачем это нужно</h2>
            <p className="bw-p">
              Стоимость вызова LLM считается не «за сообщение», а по числу
              токенов. Когда агент делает несколько вызовов подряд, прикинуть
              расход на глаз почти нереально. Хуже, если агент зацикливается.
              Бюджет может незаметно сгореть за минуты, пока никто не смотрит
              в лог.
            </p>
          </div>

          <div className="bw-section reveal">
            <h2 className="bw-h2">Что делает</h2>
            <ul className="bw-features">
              <li className="bw-feature">
                <Banknote className="bw-feature-icon" />
                <span>Считает стоимость, токены и метку каждого вызова</span>
              </li>
              <li className="bw-feature">
                <Brain className="bw-feature-icon" />
                <span>Сам учится норме для каждой части приложения, поэтому настраивать заранее ничего не нужно</span>
              </li>
              <li className="bw-feature">
                <MessageCircle className="bw-feature-icon" />
                <span>Объясняет аномалии простыми словами, например «этот вызов стоил в 20 раз дороже обычного»</span>
              </li>
              <li className="bw-feature">
                <OctagonPause className="bw-feature-icon" />
                <span>Может жёстко остановить зациклившегося агента лимитом на один запрос</span>
              </li>
              <li className="bw-feature">
                <HardDrive className="bw-feature-icon" />
                <span>Живёт только на вашем диске в виде одного файла — без обязательных зависимостей, сервера и аккаунта</span>
              </li>
            </ul>
          </div>

          <div className="bw-section reveal">
            <h2 className="bw-h2">Пять детекторов аномалий</h2>
            <FanCards>
              <FanCard>
                <Gauge className="p-icon" />
                <div className="p-label">Baseline — необычный отдельный вызов относительно истории по метке и модели</div>
              </FanCard>
              <FanCard>
                <TrendingUp className="p-icon" />
                <div className="p-label">CUSUM — постепенный устойчивый сдвиг стоимости или токенов, не видимый в отдельных вызовах</div>
              </FanCard>
              <FanCard>
                <Repeat className="p-icon" />
                <div className="p-label">Frequency — зацикливание агента или всплеск числа вызовов</div>
              </FanCard>
              <FanCard>
                <Wallet className="p-icon" />
                <div className="p-label">Budget — превышение месячного бюджета или темп, который к нему приведёт</div>
              </FanCard>
              <FanCard>
                <ShieldAlert className="p-icon" />
                <div className="p-label">Rules — нарушение явно заданных пользователем политик, всегда critical</div>
              </FanCard>
            </FanCards>
          </div>

          <div className="bw-section reveal">
            <div className="bw-metrics">
              <div className="bw-metric">
                <div className="bw-metric-val"><CountUp target={90} />%+</div>
                <div className="bw-metric-label">Покрытие тестами</div>
              </div>
              <div className="bw-metric">
                <div className="bw-metric-val"><CountUp target={5} /></div>
                <div className="bw-metric-label">Детекторов аномалий</div>
              </div>
              <div className="bw-metric">
                <div className="bw-metric-val">0</div>
                <div className="bw-metric-label">Сетевых вызовов по умолчанию</div>
              </div>
              <div className="bw-metric">
                <div className="bw-metric-val">MIT</div>
                <div className="bw-metric-label">Лицензия</div>
              </div>
            </div>
          </div>

          <div className="bw-section reveal">
            <h2 className="bw-h2">Быстрый старт</h2>
            <div className="bw-code-block">
              <pre className="bw-code"><code>{pipInstall}</code></pre>
              <CopyButton text={pipInstall} />
            </div>
            <div className="bw-code-block">
              <pre className="bw-code"><code>{pythonSnippet}</code></pre>
              <CopyButton text={pythonSnippet} />
            </div>
            <p className="bw-p">Дальше идут команды CLI для проверки состояния, отчёта и поиска аномалий:</p>
            <div className="bw-cli-list">
              {cliCommands.map((cmd) => (
                <div className="bw-cli-item" key={cmd}>
                  <Terminal className="bw-cli-icon" />
                  <div className="bw-copy-frame">
                    <code>{cmd}</code>
                    <CopyButton text={cmd} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bw-section reveal">
            <h2 className="bw-h2">Гарантия по сети</h2>
            <div className="bw-callout">
              <ShieldCheck className="bw-callout-icon" />
              <p>Ядро никогда не обращается к сети. Всё происходит только на вашем диске. Сеть используется только тогда, когда вы сами включаете такие функции: алерты в Slack, Telegram, вебхук или импорт файла цен по ссылке.</p>
            </div>
          </div>

          <div className="bw-section bw-links reveal">
            <h2 className="bw-h2">Ссылки</h2>
            <div className="bw-links-row">
              <a href="https://github.com/chemodannebro-rgb/llm-burnwatch" target="_blank" rel="noopener noreferrer" className="bw-link-item">
                <ExternalLink className="bw-link-icon" /> GitHub-репозиторий
              </a>
              <div className="bw-link-item bw-link-static">
                <Terminal className="bw-link-icon" />
                <code>{pipInstall}</code>
                <CopyButton text={pipInstall} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
