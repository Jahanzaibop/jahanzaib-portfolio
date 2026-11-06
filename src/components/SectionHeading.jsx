import { eyebrowClass } from './sectionStyles.js'

export default function SectionHeading({ index, eyebrow, title, description, titleId }) {
  return (
    <div className="max-w-[720px]">
      <span className={`${eyebrowClass} mb-[25px] block text-accent`}>{index} / {eyebrow}</span>
      <h2 className="m-0 font-display text-[clamp(39px,5vw,63px)] font-medium leading-[1.12] tracking-[-.07em] text-ink max-sm:text-[clamp(37px,10vw,52px)]" id={titleId}>{title}</h2>
      {description && <p className="mt-[18px] max-w-[465px] text-sm leading-[1.8] text-muted max-sm:text-[13px]">{description}</p>}
    </div>
  )
}
