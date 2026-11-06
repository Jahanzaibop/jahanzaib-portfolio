import { useEffect, useRef } from 'react'
import SectionHeading from '../SectionHeading.jsx'
import { shellClass } from '../sectionStyles.js'

const projects = [
  {
    number: '01',
    type: 'YACHT BOOKING · WORDPRESS',
    title: 'IGY Marinas',
    note: 'Developed the IGY Marinas yacht-booking website on WordPress, building custom themes and plugins to support a seamless reservation experience. Integrated payment gateways and secure transactions to contribute to customer satisfaction and increased bookings.',
    image: 'igy-marinas',
    imageWidth: 1200,
    imageHeight: 682,
    url: 'https://www.igymarinas.com/',
    art: 'art-warm',
    mark: 'I',
  },
  {
    number: '02',
    type: 'E-COMMERCE · SHOPIFY',
    title: 'Absolute Green',
    note: 'Developed an e-commerce website on Shopify for Absolute Green, featuring air fresheners, wood cleaner, linen spray and fabric refreshers, and hand sanitizer.',
    image: 'absolute-green',
    imageWidth: 1200,
    imageHeight: 675,
    url: 'https://absolutegreen.com/',
    art: 'art-stone',
    mark: 'S',
  },
  {
    number: '03',
    type: 'GAMING · WORDPRESS',
    title: 'GameHub',
    note: 'Developed a WordPress gaming website focused on PS5 games and gaming content. Created user-friendly game pages, organized categories, and published articles, guides, reviews, and comparisons to support user engagement and organic search visibility.',
    image: 'gamehub',
    imageWidth: 1200,
    imageHeight: 682,
    url: 'https://gamehub.com.co/',
    art: 'art-olive',
    mark: 'R',
  },
  {
    number: '04',
    type: 'REAL ESTATE · WORDPRESS',
    title: 'For Sale By Owner',
    note: 'Developed and launched FSBO Real Estate Listings, a user-friendly WordPress website for listing real estate properties.',
    image: 'fsbo',
    imageWidth: 1200,
    imageHeight: 630,
    url: 'https://www.forsalebyowner.com/',
    art: 'art-stone',
    mark: 'F',
  },
]

function ProjectArtwork({ project }) {
  const atmosphere = project.art === 'art-warm'
    ? 'bg-[radial-gradient(ellipse_at_50%_52%,rgba(100,139,218,.42),transparent_42%),linear-gradient(145deg,#182b48,#0b1020_72%)]'
    : project.art === 'art-stone'
      ? 'bg-[radial-gradient(ellipse_at_60%_42%,rgba(148,164,211,.32),transparent_38%),linear-gradient(145deg,#20263b,#0c1120_75%)]'
      : 'bg-[radial-gradient(ellipse_at_49%_50%,rgba(111,112,190,.32),transparent_43%),linear-gradient(145deg,#24213b,#10101e_75%)]'

  return (
    <div
      className={`projects-art group relative grid min-h-[260px] place-items-center overflow-hidden border border-space-line max-sm:aspect-[1.15] max-sm:rounded-xl ${atmosphere}`}
      data-project-art
      aria-hidden={!project.image}
    >
      {project.image && (
        <a
          className="absolute inset-0 z-[1] block overflow-hidden"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.title} website (opens in a new tab)`}
        >
          <picture className="block h-full w-full">
            <source
              media="(max-width: 640px)"
              srcSet={`/${project.image}-640.jpg`}
            />
            <img
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
              src={`/${project.image}-1200.jpg`}
              srcSet={`/${project.image}-640.jpg 640w, /${project.image}-1200.jpg 1200w`}
              sizes="(max-width: 640px) 100vw, (max-width: 1100px) 80vw, 65vw"
              width={project.imageWidth}
              height={project.imageHeight}
              alt={`Screenshot of the ${project.title} website`}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </a>
      )}
      <span
        className="projects-art-grid absolute inset-0 bg-[linear-gradient(rgba(202,215,248,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(202,215,248,.13)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[.14] [mask-image:linear-gradient(transparent,#000_45%,transparent)]"
        data-art-grid
      />
      {!project.image && (
        <>
          <span className="projects-art-orbit absolute aspect-square w-[48%] rounded-full border border-[#c8d7ff26]" data-art-orbit />
          <span className="projects-art-orbit-inner absolute aspect-square w-[34%] rounded-full border border-[#c8d7ff1c]" data-art-orbit-inner />
          <span
            className="relative z-[1] translate-x-[-5px] font-display text-[clamp(100px,15vw,190px)] font-normal leading-none tracking-[-.12em] text-[#cddcffc2] text-shadow-[0_8px_45px_rgba(0,0,0,.45)] transition-transform duration-500 group-hover:translate-x-px group-hover:-translate-y-1 max-sm:text-[120px]"
            data-art-mark
          >
            {project.mark}
          </span>
        </>
      )}
      {!project.image && (
        <span className="absolute bottom-4 left-4 z-[1] font-mono text-[7px] tracking-[.12em] text-[#d8e2f89e]">
          CONCEPT / PLACEHOLDER
        </span>
      )}
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const trackRef = useRef(null)
  const counterRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    let cancelled = false
    let animationContext
    let observer

    const initialize = async () => {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
        ])
        if (cancelled) return

        gsap.registerPlugin(ScrollTrigger)
        animationContext = gsap.context(() => {
          const media = gsap.matchMedia()

          media.add('(min-width: 901px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)', () => {
            const stage = stageRef.current
            const track = trackRef.current
            const cards = gsap.utils.toArray('[data-project-panel]', track)
            const counter = counterRef.current
            const progress = progressRef.current

            if (!stage || !track || cards.length < 2) return

            stage.classList.add('is-pinned')
            const getTravelDistance = () => Math.max(0, track.scrollWidth - stage.clientWidth)

            const timeline = gsap.timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${Math.max(window.innerHeight, getTravelDistance())}`,
                pin: true,
                pinSpacing: true,
                scrub: 0.65,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                  const activeIndex = Math.min(
                    cards.length - 1,
                    Math.round(self.progress * (cards.length - 1)),
                  )
                  if (counter) {
                    counter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`
                  }
                  if (progress) {
                    progress.style.transform = `scaleX(${self.progress})`
                  }
                },
              },
            })

            timeline.to(track, {
              x: () => -getTravelDistance(),
              duration: cards.length - 1,
              ease: 'none',
            }, 0)
            cards.forEach((card, index) => {
              const art = card.querySelector('[data-project-art]')
              const artMark = card.querySelector('[data-art-mark]')
              const copy = card.querySelector('[data-project-copy]')
              const segment = Math.min(index, cards.length - 2)

              timeline.fromTo(art, {
                y: 18,
                scale: 1.04,
              }, {
                y: -18,
                scale: 1,
                duration: 1,
                ease: 'none',
              }, segment)
              if (artMark) {
                timeline.fromTo(artMark, {
                  scale: 0.88,
                }, {
                  scale: 1,
                  duration: 1,
                  ease: 'none',
                }, segment)
              }
              timeline.fromTo(copy, {
                y: 14,
              }, {
                y: -14,
                duration: 1,
                ease: 'none',
              }, segment)
            })

            return () => {
              stage.classList.remove('is-pinned')
              if (progress) progress.style.transform = ''
              if (counter) counter.textContent = `01 / ${String(cards.length).padStart(2, '0')}`
            }
          })

          return () => media.revert()
        }, section)
      } catch (error) {
        if (!cancelled) {
          console.error('Unable to initialize the Projects scroll animation.', error)
        }
      }
    }

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          void initialize()
        }
      }, { rootMargin: '180px 0px' })
      observer.observe(section)
    } else {
      void initialize()
    }

    return () => {
      cancelled = true
      observer?.disconnect()
      animationContext?.revert()
    }
  }, [])

  return (
    <section
      className={`${shellClass} relative min-h-[100svh] border-b border-space-line`}
      id="work"
      ref={sectionRef}
      aria-labelledby="projects-title"
    >
      <div className="flex min-h-[100svh] flex-col justify-center py-[clamp(40px,7vh,80px)]">
        <div className="flex items-end justify-between gap-8 max-sm:block">
          <SectionHeading
            index="03"
            eyebrow="SELECTED WORK"
            titleId="projects-title"
            title="A few things I build."
            description="A selection of live websites I’ve developed across commerce, gaming, and real estate."
          />
          <span className="pb-2 font-mono text-[9px] tracking-[.105em] text-dim max-sm:mt-[22px] max-sm:inline-block">
            04 PROJECTS
          </span>
        </div>

        <div
          className="projects-stage mt-9"
          ref={stageRef}
        >
          <div
            className="projects-track grid grid-cols-3 gap-[18px] max-[900px]:gap-[13px] max-sm:grid-cols-1 max-sm:gap-9"
            ref={trackRef}
          >
            {projects.map((project) => (
              <article
                className="projects-panel min-w-0"
                data-project-panel
                key={project.number}
                aria-label={`${project.number}: ${project.title}`}
              >
                <ProjectArtwork project={project} />
                <div
                  className="projects-copy flex items-start justify-between gap-[15px] pt-5"
                  data-project-copy
                >
                  <div>
                    <p className="text-[9px] font-medium tracking-[.12em] text-accent">{project.type}</p>
                    <h3 className="mt-[10px] font-display text-base font-medium tracking-[-.025em] text-[#e3e1db]">
                      {project.url ? (
                        <a className="transition-colors hover:text-accent-bright" href={project.url} target="_blank" rel="noreferrer">
                          {project.title}
                        </a>
                      ) : project.title}
                    </h3>
                    <p className="mt-[7px] text-[11px] leading-[1.7] text-dim">{project.note}</p>
                  </div>
                  <span className="font-mono text-[8px] tracking-[.105em] text-dim">{project.number}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-5 max-[900px]:hidden" aria-hidden="true">
          <div className="h-px flex-1 overflow-hidden bg-space-line-strong">
            <div className="h-full origin-left scale-x-0 bg-accent-bright" ref={progressRef} />
          </div>
          <span className="min-w-[54px] text-right font-mono text-[9px] tracking-[.1em] text-muted" ref={counterRef}>
            01 / 04
          </span>
          <span className="font-mono text-[8px] tracking-[.12em] text-dim">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  )
}
