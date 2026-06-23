import { MapPin } from 'lucide-react'
import { COVERAGE } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

export function Coverage() {
  return (
    <section
      id="coverage"
      className="scroll-mt-20 bg-background py-16 lg:py-24"
      aria-labelledby="coverage-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Coverage
            </p>
            <h2
              id="coverage-heading"
              className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Projects Delivered Across Multiple Cities
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Based in Dehradun and executing signage projects across cities and
              states in India.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {COVERAGE.map((city, i) => (
            <Reveal key={city} delay={(i % 5) * 0.04}>
              <div className="flex h-full items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-brand/40">
                <MapPin
                  className="h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-foreground">
                  {city}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
