'use client'

import { useState, type FormEvent } from 'react'
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { SERVICES, SITE } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

export function EnquiryForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const phone = String(data.get('phone') ?? '')
    const business = String(data.get('business') ?? '')
    const requirement = String(data.get('requirement') ?? '')
    const message = String(data.get('message') ?? '')

    const text = [
      `New enquiry from ${name || 'a customer'}`,
      phone && `Phone: ${phone}`,
      business && `Business: ${business}`,
      requirement && `Requirement: ${requirement}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `${SITE.whatsappHref}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
    form.reset()
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-background py-16 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Get In Touch
            </p>
            <h2
              id="contact-heading"
              className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Request a Quote
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Tell us about your signage requirement and we&apos;ll get back to
              you with the right solution and pricing.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-start gap-3 text-foreground transition-colors hover:text-brand"
                >
                  <Phone className="mt-0.5 h-5 w-5 text-brand" aria-hidden="true" />
                  <span className="text-sm font-medium">{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-start gap-3 text-foreground transition-colors hover:text-brand"
                >
                  <Mail className="mt-0.5 h-5 w-5 text-brand" aria-hidden="true" />
                  <span className="text-sm font-medium">{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <MapPin className="mt-0.5 h-5 w-5 text-brand" aria-hidden="true" />
                <span className="text-sm font-medium not-italic">
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}, {SITE.address.postal}
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-3">
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-14 w-14 text-brand" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Your enquiry has opened in WhatsApp. Send the message and our
                    team will respond shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </Field>
                    <Field label="Phone Number" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        className="form-input"
                        placeholder="+91"
                      />
                    </Field>
                  </div>
                  <Field label="Business Name" htmlFor="business">
                    <input
                      id="business"
                      name="business"
                      type="text"
                      className="form-input"
                      placeholder="Your business or brand"
                    />
                  </Field>
                  <Field label="Requirement" htmlFor="requirement">
                    <select
                      id="requirement"
                      name="requirement"
                      defaultValue=""
                      className="form-input"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Tell us about your project, size, location and timeline."
                    />
                  </Field>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    Request a Quote
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <a
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                    Prefer to chat? Message us on WhatsApp
                  </a>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
