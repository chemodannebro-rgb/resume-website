import { useEffect, useRef } from 'react'

export function ScrollProgressBar() {
  const pbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pb = pbRef.current
    if (!pb) return

    const handleScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      pb.style.width = (scrolled / total * 100) + '%'
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div id="pb" ref={pbRef} />
}
