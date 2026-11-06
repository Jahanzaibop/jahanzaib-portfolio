import { useEffect, useRef } from 'react'

const TRAIL_LENGTH = 4

export default function CodeCursorTrail() {
  const trailRefs = useRef([])

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return undefined

    const target = { x: 0, y: 0 }
    const points = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
    let frameId = 0
    let visible = false

    const draw = () => {
      let moving = false
      points.forEach((point, index) => {
        const destination = index === 0 ? target : points[index - 1]
        const easing = index === 0 ? 0.34 : 0.22
        point.x += (destination.x - point.x) * easing
        point.y += (destination.y - point.y) * easing

        const element = trailRefs.current[index]
        if (element) {
          element.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`
        }

        if (Math.abs(destination.x - point.x) > 0.2 || Math.abs(destination.y - point.y) > 0.2) {
          moving = true
        }
      })

      if (moving) {
        frameId = window.requestAnimationFrame(draw)
      } else {
        frameId = 0
      }
    }

    const onPointerMove = (event) => {
      if (event.pointerType !== 'mouse') return
      target.x = event.clientX
      target.y = event.clientY

      if (!visible) {
        visible = true
        points.forEach((point) => {
          point.x = target.x
          point.y = target.y
        })
        trailRefs.current.forEach((element) => {
          if (element) element.style.opacity = '1'
        })
      }

      if (!frameId) frameId = window.requestAnimationFrame(draw)
    }

    const hide = () => {
      visible = false
      trailRefs.current.forEach((element) => {
        if (element) element.style.opacity = '0'
      })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('blur', hide)
    document.documentElement.addEventListener('mouseleave', hide)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('blur', hide)
      document.documentElement.removeEventListener('mouseleave', hide)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden overflow-hidden md:block" aria-hidden="true">
      {Array.from({ length: TRAIL_LENGTH }, (_, index) => (
        <span
          className={`absolute left-0 top-0 rounded-full opacity-0 transition-opacity duration-200 ${
            index === 0
              ? 'size-[9px] bg-cyan-100 shadow-[0_0_16px_4px_rgba(110,220,255,.48)]'
              : index === 1
                ? 'size-[7px] bg-indigo-200/90 shadow-[0_0_12px_3px_rgba(145,155,255,.32)]'
                : 'size-[5px] bg-violet-200/80 shadow-[0_0_10px_2px_rgba(191,145,255,.24)]'
          }`}
          key={index}
          ref={(element) => { trailRefs.current[index] = element }}
        />
      ))}
    </div>
  )
}
