'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { PROJECTS } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

export function ProjectsGallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % PROJECTS.length)),
    [],
  )
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + PROJECTS.length) % PROJECTS.length,
      ),
    [],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, next, prev])

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-background py-16 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Our Work
            </p>
            <h2
              id="projects-heading"
              className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Featured Projects
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              A look at signage and branding work fabricated and installed by
              our team. Tap any image to view it larger.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.src} delay={(i % 3) * 0.05}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                aria-label={`View ${project.title}`}
              >
                <Image
                  src={project.src || '/placeholder.svg'}
                  alt={project.title}
                  width={700}
                  height={i % 2 === 0 ? 900 : 600}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-left text-sm font-semibold text-white">
                    <span className="block text-xs font-medium uppercase tracking-wide text-white/70">
                      {project.category}
                    </span>
                    {project.title}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={PROJECTS[active].title}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PROJECTS[active].src || '/placeholder.svg'}
                alt={PROJECTS[active].title}
                width={1400}
                height={1000}
                className="mx-auto max-h-[78vh] w-auto rounded-xl object-contain"
              />
              <figcaption className="mt-4 text-center text-white">
                <span className="block text-xs font-medium uppercase tracking-wide text-white/60">
                  {PROJECTS[active].category}
                </span>
                <span className="font-heading text-lg font-semibold">
                  {PROJECTS[active].title}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
