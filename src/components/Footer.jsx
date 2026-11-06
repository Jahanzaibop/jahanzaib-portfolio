import { useState } from 'react'
import { shellClass } from './sectionStyles.js'

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear())

  return (
    <footer className={`${shellClass} flex justify-between gap-3 py-[23px] pb-[27px] font-mono text-[8px] tracking-[.105em] text-dim max-sm:text-[7px]`}>
      <span>© {year} JAHANZAIB</span>
      <span>DESIGNED &amp; BUILT WITH INTENTION</span>
      <a className="rounded-sm px-2 py-1 text-[#a6a8a2] transition-colors duration-300 hover:bg-[#a8b9e81a] hover:text-accent-bright" href="#home">BACK TO TOP</a>
    </footer>
  )
}
