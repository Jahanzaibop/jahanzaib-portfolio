import { useState } from 'react'
import Reveal from '../Reveal.jsx'
import { eyebrowClass, shellClass } from '../sectionStyles.js'

const contactEmail = 'jahanzaibabdulrazzak@gmail.com'

export default function Contact() {
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const message = formData.get('message').trim()
    const subject = `Portfolio inquiry from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setFormMessage('Opening your email app with your message ready to send.')
    window.location.href = mailto
  }

  return (
    <section className={`${shellClass} relative border-t border-space-line py-[clamp(5.5rem,10vw,9rem)]`} id="contact">
      <div className="grid grid-cols-[1.1fr_.8fr] gap-[10%] max-[900px]:grid-cols-1 max-[900px]:gap-14">
        <Reveal>
          <p className={`${eyebrowClass} flex items-center gap-3 text-accent`}>
            <span className="size-[7px] rounded-full bg-[#9bc8d8] shadow-[0_0_14px_rgba(128,194,221,.6)]" />
            OPEN TO THE RIGHT PROJECT
          </p>
          <h2 className="mb-4 mt-7 font-display text-[clamp(44px,6.1vw,76px)] font-medium leading-[1.04] tracking-[-.08em] text-ink max-sm:text-[clamp(43px,11vw,60px)]">
            Let’s make something
            <br />
            <span className="text-accent">worth remembering.</span>
          </h2>
          <p className="max-w-[510px] text-[15px] leading-[1.8] text-muted max-sm:text-[14px]">
            Tell me a little about what you’re building. The form opens your email app with the message addressed to me.
          </p>

          <form className="mt-9 grid gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <label className="grid gap-2 text-[13px] text-[#c2cce0]" htmlFor="contact-name">
                Your name
                <input
                  autoComplete="name"
                  className="min-h-12 w-full border border-space-line-strong bg-[#0a0f1b] px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-dim focus:border-accent"
                  id="contact-name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </label>
              <label className="grid gap-2 text-[13px] text-[#c2cce0]" htmlFor="contact-email">
                Your email
                <input
                  autoComplete="email"
                  className="min-h-12 w-full border border-space-line-strong bg-[#0a0f1b] px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-dim focus:border-accent"
                  id="contact-email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </label>
            </div>
            <label className="grid gap-2 text-[13px] text-[#c2cce0]" htmlFor="contact-message">
              What would you like to build?
              <textarea
                className="min-h-36 w-full resize-y border border-space-line-strong bg-[#0a0f1b] px-4 py-3 text-[15px] leading-[1.7] text-ink outline-none transition-colors placeholder:text-dim focus:border-accent"
                id="contact-message"
                name="message"
                placeholder="A few details about your project..."
                required
                rows="5"
              />
            </label>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <button
                className="inline-flex min-h-12 items-center justify-center border border-accent-bright bg-accent-bright px-5 text-[13px] font-medium text-space transition-colors duration-300 hover:bg-transparent hover:text-accent-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright"
                type="submit"
              >
                Prepare email
              </button>
              <p className="text-[12px] leading-relaxed text-muted" role="status" aria-live="polite">
                {formMessage || 'Your message is sent from your email app.'}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal className="relative max-[900px]:min-h-[360px]" delay={0.12} variant="scale">
          <aside className="contact-card relative flex h-full min-h-[480px] flex-col justify-between overflow-hidden border border-space-line-strong bg-[#0a0f1b] p-8 max-sm:min-h-[380px] max-sm:p-6" aria-label="Contact details">
            <div className="contact-card-glow pointer-events-none absolute -right-20 -top-20 size-[320px] rounded-full border border-[#a8b9e821]" aria-hidden="true" />
            <div className="contact-card-glow contact-card-glow-inner pointer-events-none absolute -right-2 top-[-1px] size-[190px] rounded-full border border-[#a8b9e815]" aria-hidden="true" />
            <div className="relative z-10 flex items-start justify-between gap-5">
              <div>
                <p className={`${eyebrowClass} text-accent`}>DIRECT CONTACT</p>
                <h3 className="mt-5 max-w-[330px] font-display text-[clamp(28px,3vw,40px)] leading-[1.12] tracking-[-.055em] text-ink">
                  A good project starts with a conversation.
                </h3>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-space-line-strong font-mono text-[14px] text-accent-bright" aria-hidden="true">@</span>
            </div>

            <div className="relative z-10 mt-12">
              <p className="font-mono text-[11px] tracking-[.12em] text-dim">EMAIL</p>
              <a
                className="mt-3 inline-block break-all text-[clamp(16px,1.65vw,21px)] leading-relaxed text-[#dfe5f5] underline decoration-space-line-strong underline-offset-8 transition-colors hover:text-accent-bright"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
            </div>

            <div className="relative z-10 mt-12 border-t border-space-line pt-6">
              <p className="font-mono text-[11px] tracking-[.12em] text-dim">AREAS I WORK IN</p>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-[14px] text-[#c4cce0]">
                <li>WordPress</li>
                <li>WooCommerce</li>
                <li>Shopify</li>
                <li>React &amp; Node.js</li>
              </ul>
            </div>
            <p className="relative z-10 mt-8 text-[12px] leading-[1.7] text-muted">
              No project details yet? A short introduction is a great place to start.
            </p>
          </aside>
        </Reveal>
      </div>

      <div className="relative z-10 mt-20 flex justify-between border-t border-space-line pt-5 font-mono text-[11px] tracking-[.105em] text-dim max-sm:mt-14 max-sm:flex-wrap max-sm:gap-3">
        <span>JAHANZAIB · DEVELOPER</span>
        <a className="rounded-sm px-2 py-1 transition-colors duration-300 hover:bg-[#a8b9e81a] hover:text-accent-bright" href="#home">BACK TO TOP</a>
      </div>
    </section>
  )
}
