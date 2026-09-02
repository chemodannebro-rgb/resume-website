import { useEffect, useRef } from 'react'

interface CountUpProps {
  target: number
  duration?: number
}

// Cubic ease-out: 1 - (1-t)^3 — same as in index.old.html
const ease = (t: number) => 1 - Math.pow(1 - t, 3)

export function CountUp({ target, duration = 1400 }: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const observedRef = useRef(false)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    const startAnimation = () => {
      const t0 = performance.now()
      const loop = (now: number) => {
        const p = Math.min((now - t0) / duration, 1)
        el.textContent = String(Math.round(ease(p) * target))
        if (p < 1) {
          requestAnimationFrame(loop)
        } else {
          el.textContent = String(target)
        }
      }
      requestAnimationFrame(loop)
    }

    if (observedRef.current) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observedRef.current) {
            observedRef.current = true
            startAnimation()
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={spanRef}>0</span>
}

interface CountDownProps {
  from: number
  to: number
  duration?: number
}

export function CountDown({ from, to, duration = 1600 }: CountDownProps) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const observedRef = useRef(false)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    const startAnimation = () => {
      const t0 = performance.now()
      const loop = (now: number) => {
        const p = Math.min((now - t0) / duration, 1)
        const v = from - ease(p) * (from - to)
        el.textContent = v <= to + 0.05 ? String(to) : v.toFixed(1)
        if (p < 1) {
          requestAnimationFrame(loop)
        } else {
          el.textContent = String(to)
        }
      }
      requestAnimationFrame(loop)
    }

    if (observedRef.current) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observedRef.current) {
            observedRef.current = true
            startAnimation()
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [from, to, duration])

  return <span ref={spanRef}>{from}</span>
}
