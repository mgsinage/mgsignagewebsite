import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Star } from 'lucide-react'
import { SITE } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              Signage &amp; Branding since {SITE.founded}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Signage That Makes Your{' '}
              <span className="text-brand">Brand Visible</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              From LED letter boards and glow signage to complete indoor and
              outdoor branding solutions, MG Signage helps businesses create a
              powerful visual presence.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-5 w-5 text-brand" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-2xl font-extrabold text-foreground">8+</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Years of execution
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold text-foreground">15+</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Cities covered
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold text-foreground">All</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Signage types
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
              <Image
                src="/projects/storefront-branding.png"
                alt="Branded retail storefront with illuminated signage by MG Signage"
                width={900}
                height={1000}
                className="h-[420px] w-full object-cover sm:h-[520px]"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-3 hidden w-56 rounded-2xl border border-border bg-background p-4 shadow-lg sm:block">
              <div className="flex items-center gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                Trusted for fabrication &amp; installation across India.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
