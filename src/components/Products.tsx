import {
  Banknote,
  Users,
  Store,
  ShieldCheck,
  TrendingUp,
  Timer,
  BadgeCheck,
  ArrowLeftRight,
  Users2,
  CalendarClock,
  Activity,
} from 'lucide-react'
import { CountUp } from './CountUp'
import { FanCards, FanCard } from './ui/fan-cards'

export function Products() {
  return (
    <section id="products">
      <div className="container">
        <div className="products-head reveal">
          <div className="s-label">Продукты и проекты</div>
          <h2 className="s-title">То, что я <span>строил и запускал</span></h2>
        </div>

        <div className="p-product reveal">
          <div className="p-identity">
            <div className="p-type">BNPL · Сбер</div>
            <div className="p-title">«Плати частями»</div>
            <p className="p-desc">Спроектировал и запустил сервис с нуля за 3 месяца. В процессе развития выстроил несколько каналов оформления: онлайн, офлайн на терминалах, white-label-интеграцию для партнёров и SDK внутри SberPay. Сервис интегрирован с 20 внутренними и внешними системами, включающими более 100 сервисов. Внедрил многоуровневую антифрод-защиту — скоринг, противодействие социальной инженерии, анализ данных устройств и поведения пользователей. Настроил технический и бизнес-мониторинг с регламентом реагирования на инциденты. Построил сквозную аналитику по всей воронке продаж.</p>
            <div className="p-year">2022 – 2026</div>
          </div>
          <FanCards>
            <FanCard>
              <Banknote className="p-icon" />
              <div className="p-val"><CountUp target={20} /> млрд&nbsp;₽</div>
              <div className="p-label">Годовой оборот сервиса</div>
            </FanCard>
            <FanCard>
              <Users className="p-icon" />
              <div className="p-val"><CountUp target={800} />+</div>
              <div className="p-label">Партнёров в онлайне</div>
            </FanCard>
            <FanCard>
              <Store className="p-icon" />
              <div className="p-val"><CountUp target={50} /> тыс.+</div>
              <div className="p-label">Офлайн-терминалов по всей России</div>
            </FanCard>
            <FanCard>
              <ShieldCheck className="p-icon" />
              <div className="p-val">×16</div>
              <div className="p-label">Снижение доли мошеннических заказов (с 8% до 0,5%)</div>
            </FanCard>
            <FanCard>
              <TrendingUp className="p-icon" />
              <div className="p-val">+<CountUp target={11} />%</div>
              <div className="p-label">Рост конверсии оплаты после запуска сценария в один клик</div>
            </FanCard>
            <FanCard>
              <Timer className="p-icon" />
              <div className="p-val">2 мин</div>
              <div className="p-label">MTTR — снизили с 3 ч</div>
            </FanCard>
            <FanCard>
              <BadgeCheck className="p-icon" />
              <div className="p-val"><CountUp target={80} />%</div>
              <div className="p-label">Соответствие экосистемным стандартам Сбера — рост с 20%</div>
            </FanCard>
          </FanCards>
        </div>

        <div className="p-product reveal">
          <div className="p-identity">
            <div className="p-type">POS · Сбер</div>
            <div className="p-title">«Покупай со Сбером»</div>
            <p className="p-desc">Спроектировал архитектуру и API для переноса интеграций в контур банка. Организовал единый релизный цикл между пятью командами. Лично запустил миграцию первых партнёров — основу, на которой банк позже перевёл 40 тыс. партнёров.</p>
            <div className="p-year">2021 – 2022</div>
          </div>
          <FanCards>
            <FanCard>
              <ArrowLeftRight className="p-icon" />
              <div className="p-val"><CountUp target={40} /> тыс.</div>
              <div className="p-label">Партнёров мигрировало на решение банка</div>
            </FanCard>
            <FanCard>
              <Users2 className="p-icon" />
              <div className="p-val">5 команд</div>
              <div className="p-label">Синхронная разработка и единый релизный цикл</div>
            </FanCard>
            <FanCard>
              <CalendarClock className="p-icon" />
              <div className="p-val">2 года</div>
              <div className="p-label">Полный отказ от внешнего вендора</div>
            </FanCard>
            <FanCard>
              <Activity className="p-icon" />
              <div className="p-val">99,9%</div>
              <div className="p-label">SLA доступности сервиса</div>
            </FanCard>
          </FanCards>
        </div>

      </div>
    </section>
  )
}
