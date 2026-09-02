import { ParticleWave } from '@/components/ui/particle-wave'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { TopMenu } from '@/components/TopMenu'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { Skills } from '@/components/Skills'
import { Tools } from '@/components/Tools'
import { Timeline } from '@/components/Timeline'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { useReveal } from '@/hooks/useReveal'

function App() {
  useReveal()
  return (
    <>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ParticleWave />
      </div>
      <ScrollProgressBar />
      <TopMenu />
      <Hero />
      <Products />
      <Skills />
      <Tools />
      <Timeline />
      <Contact />
      <Footer />
    </>
  )
}

export default App
