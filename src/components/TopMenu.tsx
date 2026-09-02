import { ThemeToggle } from './ThemeToggle'
import { LangToggle } from './LangToggle'
import { ShareButton } from './ShareButton'

export function TopMenu() {
  return (
    <div className="top-menu">
      <ThemeToggle />
      <LangToggle />
      <ShareButton />
    </div>
  )
}
