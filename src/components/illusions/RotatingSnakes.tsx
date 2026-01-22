import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function RotatingSnakes() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Draw the rotating snakes illusion
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colors = ['#000000', '#00f0ff', '#ffffff', '#a855f7'] // black, cyan, white, purple
    const size = 440
    const ringCount = 6
    const segmentsPerRing = 24

    ctx.fillStyle = '#0a0a12'
    ctx.fillRect(0, 0, size, size)

    const centerX = size / 2
    const centerY = size / 2

    for (let ring = 0; ring < ringCount; ring++) {
      const radius = 30 + ring * 35
      const segmentAngle = (Math.PI * 2) / segmentsPerRing
      const offset = ring % 2 === 0 ? 0 : segmentAngle / 2

      for (let seg = 0; seg < segmentsPerRing; seg++) {
        const startAngle = seg * segmentAngle + offset
        const endAngle = startAngle + segmentAngle * 0.9
        const colorIndex = (seg + ring) % 4

        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, startAngle, endAngle)
        ctx.arc(centerX, centerY, radius - 15, endAngle, startAngle, true)
        ctx.closePath()
        ctx.fillStyle = colors[colorIndex]!
        ctx.fill()
      }
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const title = section.querySelector('.perception-title')
    const subtitle = section.querySelector('.perception-subtitle')
    const illusion = section.querySelector('.snakes-illusion')
    const instructions = section.querySelector('.perception-instructions')

    gsap.set([title, subtitle, illusion, instructions], { opacity: 0, y: 30 })

    ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      onEnter: () => {
        gsap.to(title, { opacity: 1, y: 0, duration: 0.8 })
        gsap.to(subtitle, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
        gsap.to(illusion, { opacity: 1, y: 0, duration: 0.8, delay: 0.4 })
        gsap.to(instructions, { opacity: 1, y: 0, duration: 0.8, delay: 0.6 })
      },
    })

  }, [])

  return (
    <section ref={sectionRef} className="perception-section py-[120px] relative flex flex-col justify-center" id="snakes-test">
      <div className="perception-container text-center max-w-[900px] mx-auto px-10">
        <h2
          className="perception-title font-display text-4xl font-extrabold mb-4"
        >
          The Rotating Snakes
        </h2>

        <p
          className="perception-subtitle text-[17px] mb-[50px] max-w-[600px] mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          This image is completely static. Your brain creates the motion. Look at different parts and watch the "snakes" rotate.
        </p>

        <div
          className="snakes-illusion relative w-full max-w-[500px] h-[500px] mx-auto flex items-center justify-center rounded-[20px] overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(15, 15, 22, 0.9), rgba(8, 8, 14, 0.95))',
            border: '1px solid rgba(0, 240, 255, 0.2)',
          }}
        >
          <canvas
            ref={canvasRef}
            className="snakes-canvas"
            width={440}
            height={440}
          />
        </div>

        <div
          className="perception-instructions mt-[30px] py-5 px-[30px] rounded-xl text-left max-w-[600px] mx-auto"
          style={{
            background: 'rgba(0, 240, 255, 0.05)',
            border: '1px solid rgba(0, 240, 255, 0.1)',
          }}
        >
          <p className="m-0 text-[15px] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--accent-cyan)' }}>What's happening:</strong>{' '}
            The Rotating Snakes illusion (Akiyoshi Kitaoka) uses specific color sequences and contrast gradients to trigger motion-detecting neurons in your visual cortex. Your brain literally perceives movement where none exists—proof that perception is construction, not reception.
          </p>
        </div>
      </div>
    </section>
  )
}
