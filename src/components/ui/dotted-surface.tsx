import { useRef, useEffect } from 'react'
import type { FC } from 'react'
import * as THREE from 'three'

interface DottedSurfaceProps {
  className?: string
}

const AMOUNT_X = 60
const AMOUNT_Y = 40
const SEPARATION = 40

const getCurrentTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'

// Colors from site palette: --bg light=#FFFFFF dark=#111009
const getBackgroundHex = (theme: string) => (theme === 'dark' ? 0x111009 : 0xffffff)

// Dot color: dark text #1C1917 on light / light text #F0EBE0 on dark
const getDotHex = (theme: string) => (theme === 'dark' ? 0xf0ebe0 : 0x1c1917)

const DottedSurface: FC<DottedSurfaceProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    points: THREE.Points
    geometry: THREE.BufferGeometry
    material: THREE.PointsMaterial
    animationId: number | null
    count: number
  } | null>(null)

  const initScene = () => {
    if (!containerRef.current) return
    const container = containerRef.current
    const width = window.innerWidth
    const height = window.innerHeight
    const theme = getCurrentTheme()

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(getBackgroundHex(theme), 260, 1000)

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000)
    camera.position.set(0, 90, 340)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(getBackgroundHex(theme), 1)
    container.appendChild(renderer.domElement)

    const positions: number[] = []
    for (let ix = 0; ix < AMOUNT_X; ix++) {
      for (let iy = 0; iy < AMOUNT_Y; iy++) {
        const x = ix * SEPARATION - (AMOUNT_X * SEPARATION) / 2
        const z = iy * SEPARATION - (AMOUNT_Y * SEPARATION) / 2
        positions.push(x, 0, z)
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      size: 5,
      color: getDotHex(theme),
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    sceneRef.current = { scene, camera, renderer, points, geometry, material, animationId: null, count: 0 }
  }

  const renderFrame = () => {
    if (!sceneRef.current) return
    const { scene, camera, renderer } = sceneRef.current
    renderer.render(scene, camera)
  }

  const animate = () => {
    if (!sceneRef.current) return

    // Pause on hidden tab to save battery/CPU
    if (document.visibilityState !== 'visible') {
      sceneRef.current.animationId = requestAnimationFrame(animate)
      return
    }

    const { geometry, scene, material, camera, renderer, count } = sceneRef.current
    const positionAttr = geometry.attributes.position as THREE.BufferAttribute
    const positions = positionAttr.array as Float32Array

    let i = 0
    for (let ix = 0; ix < AMOUNT_X; ix++) {
      for (let iy = 0; iy < AMOUNT_Y; iy++) {
        const index = i * 3 + 1
        positions[index] =
          Math.sin((ix + count) * 0.3) * 22 + Math.sin((iy + count) * 0.4) * 22
        i++
      }
    }
    positionAttr.needsUpdate = true

    const theme = getCurrentTheme()
    material.color.set(getDotHex(theme))
    renderer.setClearColor(getBackgroundHex(theme), 1)
    if (scene.fog) scene.fog.color.set(getBackgroundHex(theme))

    renderer.render(scene, camera)
    sceneRef.current.count += 0.06
    sceneRef.current.animationId = requestAnimationFrame(animate)
  }

  const handleResize = () => {
    if (!sceneRef.current) return
    const { camera, renderer } = sceneRef.current
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  useEffect(() => {
    // Respect prefers-reduced-motion: render one static frame only
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    initScene()

    if (prefersReduced) {
      renderFrame()
    } else {
      animate()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (sceneRef.current?.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId)
      }
      window.removeEventListener('resize', handleResize)

      if (sceneRef.current) {
        const { scene, points, geometry, material, renderer } = sceneRef.current
        scene.remove(points)
        geometry.dispose()
        material.dispose()
        renderer.dispose()
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement)
        }
      }
    }
  }, [])

  return <div ref={containerRef} className={`block h-full w-full ${className}`} />
}

export { DottedSurface }
