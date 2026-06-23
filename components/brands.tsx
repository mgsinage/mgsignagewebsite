import Image from 'next/image'
import { BRANDS } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

export function Brands() {
  return (
    <section
      id="brands"
      className="scroll-mt-20 bg-secondary py-16 lg:py-24"
      aria-labelledby="brands-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Brands Served
            </p>
            <h2
              id="brands-heading"
              className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Trusted By Businesses Across India
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Projects executed for businesses and brands across multiple
              industries.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {BRANDS.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 0.06}>
              <div className="flex h-28 items-center justify-center rounded-2xl border border-border bg-card px-6 transition-shadow hover:shadow-md">
                <Image
                  src={brand.src || '/placeholder.svg'}
                  alt={`${brand.name} logo`}
                  width={200}
                  height={80}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
