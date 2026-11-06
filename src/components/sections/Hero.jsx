import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import Reveal from '../Reveal.jsx'
import { eyebrowClass, shellClass } from '../sectionStyles.js'

const codeLines = [
  [
    { text: 'const ', kind: 'keyword' },
    { text: 'developer = {' },
  ],
  [
    { text: '  focus', kind: 'property' },
    { text: ': ' },
    { text: '"thoughtful experiences"', kind: 'string' },
    { text: ',' },
  ],
  [
    { text: '  platforms', kind: 'property' },
    { text: ': [' },
    { text: '"WordPress"', kind: 'string' },
    { text: ', ' },
    { text: '"Shopify"', kind: 'string' },
    { text: '],' },
  ],
  [
    { text: '  tools', kind: 'property' },
    { text: ': [' },
    { text: '"React"', kind: 'string' },
    { text: ', ' },
    { text: '"Node.js"', kind: 'string' },
    { text: ']' },
  ],
  [{ text: '}' }],
  [
    { text: 'build', kind: 'keyword' },
    { text: '(' },
    { text: '"for the web"', kind: 'string' },
    { text: ');' },
  ],
]

const codeLength = codeLines.reduce(
  (total, line) => total + line.reduce((lineTotal, token) => lineTotal + token.text.length, 0),
  0,
) + codeLines.length - 1

function HeroArtwork() {
  const reduceMotion = useReducedMotion()
  const [typedChars, setTypedChars] = useState(0)
  const typedCharsRef = useRef(0)
  const artworkRef = useRef(null)
  const visibleChars = reduceMotion ? codeLength : typedChars

  useEffect(() => {
    if (reduceMotion) return undefined

    let cancelled = false
    let intervalId
    let observer
    let characterCount = typedCharsRef.current
    let direction = 1
    let pauseTicks = 0

    const startTyping = () => {
      if (intervalId || cancelled) return
      intervalId = window.setInterval(() => {
        if (pauseTicks > 0) {
          pauseTicks -= 1
          return
        }

        characterCount = direction > 0
          ? Math.min(codeLength, characterCount + 2)
          : Math.max(0, characterCount - 3)
        typedCharsRef.current = characterCount
        setTypedChars(characterCount)

        if (characterCount === codeLength && direction > 0) {
          direction = -1
          pauseTicks = 28
        } else if (characterCount === 0 && direction < 0) {
          direction = 1
          pauseTicks = 8
        }
      }, 30)
    }

    const stopTyping = () => {
      window.clearInterval(intervalId)
      intervalId = undefined
    }

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          startTyping()
        } else {
          stopTyping()
        }
      }, { threshold: 0.25 })
      if (artworkRef.current) observer.observe(artworkRef.current)
    } else {
      startTyping()
    }

    return () => {
      cancelled = true
      observer?.disconnect()
      stopTyping()
    }
  }, [reduceMotion])

  return (
    <div className="hero-visual relative w-full max-sm:mt-12" aria-hidden="true">
      <div ref={artworkRef} className="hero-code-window relative ml-auto w-full max-w-[560px] overflow-hidden border border-space-line-strong bg-[#0a0f1b] shadow-[0_28px_90px_rgba(0,0,0,.24)]">
        <div className="flex h-[54px] items-center gap-[7px] border-b border-space-line bg-[#0c1220] px-5">
          <span className="size-[7px] rounded-full bg-[#d58c91]" />
          <span className="size-[7px] rounded-full bg-[#d5b77c]" />
          <span className="size-[7px] rounded-full bg-[#83b69e]" />
          <span className="ml-4 font-mono text-[9px] tracking-[.06em] text-muted">developer-work.js</span>
          <span className="ml-auto flex items-center gap-2 font-mono text-[8px] tracking-[.12em] text-[#91c5ad]"><span className="size-[5px] rounded-full bg-[#83c9a8]" /> READY</span>
        </div>
        <div className="code-editor-lines relative grid min-h-[272px] content-center py-7 font-mono text-[clamp(10px,.95vw,12px)] leading-[2.4] text-[#cbd4e8] max-sm:min-h-[235px] max-sm:text-[10px]">
          {codeLines.map((line, lineIndex) => {
            const lineStart = codeLines
              .slice(0, lineIndex)
              .reduce((total, previousLine) => total + previousLine.reduce((sum, token) => sum + token.text.length, 0), 0)
              + lineIndex
            let tokenStart = lineStart
            const lineLength = line.reduce((sum, token) => sum + token.text.length, 0)
            const active = visibleChars >= lineStart && visibleChars < lineStart + lineLength

            return (
              <div className={`flex min-h-[32px] items-center whitespace-pre${active ? ' bg-[#a8b9e809]' : ''}`} key={lineIndex}>
                <span className="w-[66px] flex-none pr-6 text-right text-[#52617a] select-none max-sm:w-[48px] max-sm:pr-4">{String(lineIndex + 1).padStart(2, '0')}</span>
                <span>
                  {line.map((token, tokenIndex) => {
                    const count = Math.max(0, Math.min(token.text.length, visibleChars - tokenStart))
                    tokenStart += token.text.length
                    if (!count) return null
                    const tokenClass = token.kind === 'keyword'
                      ? 'text-[#b8ace9]'
                      : token.kind === 'property'
                        ? 'text-[#8fc8d1]'
                        : token.kind === 'string'
                          ? 'text-[#a5c9ad]'
                          : ''
                    return <span className={tokenClass} key={tokenIndex}>{token.text.slice(0, count)}</span>
                  })}
                  {active && <span className="code-caret ml-1 inline-block h-[15px] w-[2px] bg-[#a6c5e0] align-middle" />}
                </span>
              </div>
            )
          })}
        </div>
        <div className="flex h-[39px] items-center justify-between border-t border-space-line px-5 font-mono text-[8px] tracking-[.08em] text-dim">
          <span>BUILDING WITH CARE</span>
          <span>JS · UTF-8</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const boardX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.7 })
  const boardY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.7 })

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 18)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 14)
  }

  const resetBoardPosition = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
      className={`${shellClass} hero-layout relative grid min-h-[min(790px,calc(100svh-88px))] grid-cols-[1.05fr_.8fr] items-center gap-[8%] border-b border-space-line py-20 max-[900px]:min-h-[670px] max-[900px]:grid-cols-[1.1fr_.8fr] max-sm:min-h-0 max-sm:grid-cols-1 max-sm:gap-0 max-sm:py-[58px]`}
      id="home"
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetBoardPosition}
    >
      <Reveal className="relative z-10">
        <p className={`${eyebrowClass} mb-7 flex items-center gap-3 text-accent`}>
          <span className="relative size-[7px] rounded-full bg-[#93c8b3]">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#93c8b3] opacity-30 motion-reduce:animate-none" />
          </span>
          INDEPENDENT WEB DEVELOPER
        </p>
        <h1
          className="m-0 max-w-[740px] font-display text-[clamp(56px,7.2vw,102px)] font-medium leading-[.99] tracking-[-.085em] text-ink max-[900px]:text-[clamp(54px,8vw,78px)] max-sm:text-[clamp(49px,13vw,68px)]"
          id="hero-title"
        >
          Thoughtful
          <br />
          digital <span className="text-accent">work.</span>
        </h1>
        <p className="mt-7 max-w-[460px] text-[15px] leading-[1.85] text-muted max-sm:mt-5 max-sm:text-[13px]">
          I’m <strong className="font-medium text-ink">Jahanzaib</strong>, a developer building and
          maintaining considered websites and commerce experiences across WordPress, Shopify, React,
          and Node.js.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a className="inline-flex min-h-[48px] items-center justify-center border border-accent-bright bg-accent-bright px-5 text-[12px] font-medium text-space transition-colors duration-300 hover:bg-transparent hover:text-accent-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright" href="#work">
            Explore my work
          </a>
          <a className="inline-flex min-h-[48px] items-center justify-center border border-space-line-strong px-5 text-[12px] text-ink transition-colors duration-300 hover:border-accent-bright hover:bg-[#a8b9e812] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-space-line pt-5 max-sm:mt-10">
          <div>
            <p className="font-display text-[25px] tracking-[-.06em] text-ink">06<span className="text-accent">+</span></p>
            <p className="mt-1 font-mono text-[8px] tracking-[.13em] text-dim">YEARS ON THE WEB</p>
          </div>
          <div>
            <p className="font-display text-[25px] tracking-[-.06em] text-ink">04</p>
            <p className="mt-1 font-mono text-[8px] tracking-[.13em] text-dim">YEARS WITH SHOPIFY</p>
          </div>
          <div className="max-w-[150px]">
            <p className="font-display text-[25px] tracking-[-.06em] text-ink">WEB<span className="text-accent">/</span>COMMERCE</p>
            <p className="mt-1 font-mono text-[8px] tracking-[.13em] text-dim">FOCUSED DEVELOPMENT</p>
          </div>
        </div>
      </Reveal>
      <Reveal className="relative z-0" delay={0.12} variant="scale">
        <motion.div className="will-change-transform" style={reduceMotion ? undefined : { x: boardX, y: boardY }}>
          <HeroArtwork />
        </motion.div>
      </Reveal>
      <a className="absolute bottom-5 left-0 flex items-center gap-3 font-mono text-[8px] tracking-[.14em] text-dim transition-colors hover:text-accent-bright max-sm:hidden" href="#about">
        <span className="h-px w-8 bg-accent" /> SCROLL TO EXPLORE
      </a>
      <span className="absolute bottom-5 right-0 font-mono text-[8px] tracking-[.14em] text-dim max-sm:hidden" aria-hidden="true">01 — 06</span>
    </section>
  )
}
