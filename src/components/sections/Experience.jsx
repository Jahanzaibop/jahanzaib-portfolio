import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { shellClass, sectionPadClass } from '../sectionStyles.js'

const experience = [
  {
    period: '6+ YEARS',
    title: 'WordPress & WooCommerce development',
    description: 'Developing and maintaining business websites and e-commerce stores, from the core site experience through the WooCommerce storefront.',
    focus: ['WordPress', 'WooCommerce', 'Site maintenance'],
    category: 'WEB · COMMERCE',
  },
  {
    period: '4 YEARS',
    title: 'Shopify development',
    description: 'Building and supporting Shopify store experiences, with attention to clear storefronts and dependable day-to-day use.',
    focus: ['Shopify', 'Store development', 'E-commerce'],
    category: 'E-COMMERCE',
  },
  {
    period: 'ONGOING',
    title: 'React & Node.js',
    description: 'Using modern JavaScript to create interactive web experiences and extend beyond traditional content-managed websites.',
    focus: ['React.js', 'Node.js', 'JavaScript'],
    category: 'JAVASCRIPT',
  },
]

export default function Experience() {
  return (
    <section className={`${shellClass} ${sectionPadClass}`} id="experience">
      <Reveal>
        <SectionHeading
          index="04"
          eyebrow="EXPERIENCE"
          title="Experience, in practice."
          description="A track record built across business websites and online stores."
        />
      </Reveal>
      <div className="mt-14 border-t border-space-line-strong max-sm:mt-[34px]">
        {experience.map((item, index) => (
          <Reveal delay={index * 0.08} variant="left" key={item.title}>
            <article className="grid grid-cols-[.52fr_1.5fr_.5fr] items-start gap-[25px] border-b border-space-line px-5 py-[30px] transition-colors duration-300 hover:bg-[#10182a] max-sm:grid-cols-[1fr_auto] max-sm:gap-3 max-sm:px-3 max-sm:py-[23px]">
              <span className="pt-1 font-mono text-[8px] tracking-[.105em] text-accent max-sm:col-start-1">{item.period}</span>
              <div className="max-sm:col-span-full max-sm:row-start-2">
                <h3 className="text-base font-medium text-[#e5e2dc]">{item.title}</h3>
                <p className="mt-2 max-w-[650px] text-xs leading-[1.75] text-muted max-sm:text-[11px]">{item.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${item.title} areas of focus`}>
                  {item.focus.map((focus) => (
                    <li className="border border-space-line px-2.5 py-1 font-mono text-[8px] tracking-[.04em] text-dim" key={focus}>{focus}</li>
                  ))}
                </ul>
              </div>
              <span className="justify-self-end pt-1 font-mono text-[8px] tracking-[.105em] text-dim max-sm:col-start-2 max-sm:row-start-1 max-sm:text-[7px]">{item.category}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
