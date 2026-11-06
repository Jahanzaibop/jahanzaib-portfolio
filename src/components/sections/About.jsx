import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { shellClass, sectionPadClass } from '../sectionStyles.js'
import AboutIllustration from '../AboutIllustration.jsx'

export default function About() {
  return (
    <section className={`${shellClass} ${sectionPadClass} grid grid-cols-[1fr_.8fr] items-start gap-[12%] max-[900px]:grid-cols-[1fr_.9fr] max-[900px]:gap-[8%] max-sm:block`} id="about">
      <Reveal>
        <SectionHeading
          index="01"
          eyebrow="A LITTLE ABOUT ME"
          title={<>Good work lives<br />in the details.</>}
        />
        <AboutIllustration />
      </Reveal>
      <Reveal className="pt-[59px] text-sm leading-[1.9] text-muted max-sm:pt-[30px] max-sm:text-[13px]" delay={0.08}>
        <p className="font-display text-xl leading-[1.55] text-[#d2d2cb] max-sm:text-lg">
          I’m a web developer with 6+ years of experience creating and
          maintaining business websites and e-commerce stores.
        </p>
        <p className="mt-[18px]">
          My work spans WordPress and WooCommerce, Shopify, and modern
          JavaScript development with React and Node.js. I care about the
          practical details behind a polished experience: thoughtful
          implementation, dependable maintenance, and interfaces that feel
          considered on every screen.
        </p>
        <a className="mt-5 inline-flex rounded-sm px-3 py-2 text-xs text-[#d5d3cc] transition-colors duration-300 hover:bg-[#a8b9e81a] hover:text-accent-bright" href="#contact">Have a project in mind?</a>
      </Reveal>
    </section>
  )
}
