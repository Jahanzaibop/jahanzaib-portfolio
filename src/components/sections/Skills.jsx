import Reveal from '../Reveal.jsx'
import SectionHeading from '../SectionHeading.jsx'
import { shellClass, sectionPadClass } from '../sectionStyles.js'

const skills = [
  { name: 'WordPress', detail: 'Custom development' },
  { name: 'WooCommerce', detail: 'Commerce experiences' },
  { name: 'Shopify', detail: 'Store development' },
  { name: 'React', detail: 'Interactive interfaces' },
  { name: 'Node.js', detail: 'Server-side development' },
  { name: 'JavaScript', detail: 'Modern web applications' },
]

export default function Skills() {
  return (
    <section className={`${shellClass} ${sectionPadClass}`} id="skills">
      <Reveal>
        <SectionHeading
          index="02"
          eyebrow="TOOLS OF THE TRADE"
          title="Built on solid foundations."
          description="A practical toolkit for building, improving, and supporting the web."
        />
      </Reveal>
      <div className="mt-14 grid grid-cols-3 gap-px overflow-hidden border border-space-line bg-space-line max-sm:mt-[38px] max-sm:grid-cols-2">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 0.045}>
            <div className="group flex min-h-[145px] items-start gap-[21px] bg-[#090d17] px-[25px] py-[30px] transition-colors duration-300 hover:bg-[#0e1524] max-[900px]:gap-[14px] max-[900px]:px-[18px] max-sm:min-h-[118px] max-sm:gap-[10px] max-sm:px-3 max-sm:py-[21px]">
              <span className="pt-[4px] font-mono text-[9px] text-dim transition-colors group-hover:text-accent max-sm:text-[8px]">0{index + 1}</span>
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="text-[15px] font-medium max-sm:text-[13px]">{skill.name}</h3>
                <p className="mt-[7px] text-[11px] text-dim max-sm:text-[10px]">{skill.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
