import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -10px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))

    return () => {
      obs.disconnect()
    }
  }, [])
}
