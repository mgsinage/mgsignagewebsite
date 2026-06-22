import { MessageCircle, Phone } from 'lucide-react'
import { SITE } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

export function CtaSection() {
  return (
    <section className="bg-background pb-16 lg:pb-24" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-center sm:px-12 lg:py-20">
            <div
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/20 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2
                id="cta-heading"
                className="text-balance font-heading text-3xl font-extrabold tracking-tight text-background sm:text-4xl"
              >
                Let&apos;s Build Your Brand Visibility
              </h2>
              <p className="mt-4 text-pretty text-background/70">
                Get premium signage fabrication and professional installation
                for your business. Talk to our team today.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-background/25 bg-transparent px-7 py-3.5 text-base font-semibold text-background transition-colors hover:bg-background/10"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
