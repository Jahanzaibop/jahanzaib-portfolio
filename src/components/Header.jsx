import { shellClass } from './sectionStyles.js'

export default function Header() {
  return (
    <header className={`${shellClass} relative z-20 flex h-[88px] items-center justify-between border-b border-space-line font-mono text-[9px] tracking-[.105em] max-sm:h-[70px]`}>
      <a className="inline-flex items-center gap-3 max-sm:gap-2" href="#home" aria-label="Jahanzaib, home">
        <span className="grid size-[36px] place-items-center border border-space-line-strong font-display text-[15px] font-medium text-accent-bright transition-colors duration-300 hover:bg-[#a8b9e812] max-sm:size-[32px]">J.</span>
        <span className="text-[10px] tracking-[.18em] text-[#c9cbc5] max-sm:text-[8px]">JAHANZAIB<span className="ml-2 text-dim">/</span><span className="ml-2 text-dim">DEVELOPER</span></span>
      </a>
      <nav className="flex h-full items-center gap-[clamp(22px,4vw,54px)] uppercase text-muted max-sm:gap-[15px] max-sm:text-[8px]" aria-label="Main navigation">
        <a className="transition-colors hover:text-accent-bright max-sm:hidden" href="#about">About</a>
        <a className="transition-colors hover:text-accent-bright" href="#work">Work</a>
        <a className="transition-colors hover:text-accent-bright max-sm:hidden" href="#experience">Experience</a>
        <a className="flex h-[38px] items-center border border-space-line-strong px-[15px] text-ink transition-colors duration-300 hover:border-accent-bright hover:bg-accent-bright hover:text-space max-sm:h-[34px] max-sm:px-[10px]" href="#contact">Let’s talk</a>
      </nav>
    </header>
  )
}
