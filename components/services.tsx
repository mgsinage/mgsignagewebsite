import Link from 'next/link'
import {
  ArrowUpRight,
  Building2,
  CreditCard,
  Droplets,
  Layers,
  LayoutPanelTop,
  Lightbulb,
  Megaphone,
  MonitorPlay,
  PackageCheck,
  Scissors,
  Shapes,
  Signpost,
  Sparkles,
  StickyNote,
  Type,
} from 'lucide-react'
import { SERVICES } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

const ICONS = {
  Type,
  Sparkles,
  Droplets,
  Lightbulb,
  Layers,
  Shapes,
  LayoutPanelTop,
  MonitorPlay,
  CreditCard,
  StickyNote,
  Signpost,
  Scissors,
  Building2,
  Megaphone,
  PackageCheck,
} as const

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-secondary py-16 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                What We Do
              </p>
              <h2
                id="services-heading"
                className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
              >
                Complete Signage &amp; Branding Services
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                End-to-end fabrication, supply and installation for every type
                of indoor and outdoor branding.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Request a service
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon]
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.05}>
                <div className="group flex h-full items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
