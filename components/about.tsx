import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const POINTS = [
  'In-house fabrication for consistent quality control',
  'Site survey, execution and installation handled end to end',
  'Durable materials selected for outdoor and indoor conditions',
  'Reliable delivery across multiple cities and states',
]

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-secondary py-16 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/projects/ss-letters.png"
              alt="Stainless steel letter fabrication"
              width={500}
              height={600}
              className="h-full w-full rounded-2xl border border-border object-cover"
            />
            <Image
              src="/projects/installation.png"
              alt="On-site signage installation by MG Signage"
              width={500}
              height={600}
              className="mt-8 h-full w-full rounded-2xl border border-border object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              About MG Signage
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Fabrication and execution built around visibility
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                MG Signage provides complete indoor and outdoor branding
                solutions. We have worked in the signage and branding industry
                since 2016, specializing in the fabrication, installation and
                execution of branding projects across multiple cities and
                states in India.
              </p>
              <p>
                Our work spans local shops and restaurants through to national
                brands. Each project is handled with a focus on fabrication
                quality, clean execution and the brand presence our clients
                need to stand out.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-snug text-foreground">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
