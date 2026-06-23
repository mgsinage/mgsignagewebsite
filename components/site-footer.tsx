import type { SVGProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { NAV_LINKS, SERVICES, SITE } from '@/lib/site-data'

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedinIcon },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="#top" className="flex items-center gap-2.5" aria-label="MG Signage home">
              <Image
                src="/logos/mg-signage-round.png"
                alt="MG Signage logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full"
              />
              <span className="font-heading text-lg font-extrabold tracking-tight text-foreground">
                MG <span className="text-brand">Signage</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}. Complete indoor and outdoor branding solutions
              since {SITE.founded}.
            </p>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.title}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-start gap-2.5 transition-colors hover:text-brand"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-brand" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-start gap-2.5 transition-colors hover:text-brand"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-brand" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" aria-hidden="true" />
                <span>
                  {SITE.address.line1}, {SITE.address.line2},{' '}
                  {SITE.address.postal}
                </span>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-brand hover:text-brand"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <p className="text-xs text-muted-foreground opacity-70">
  Brand Setup & Digital Presence by{" "}
  <a
    href="https://suryanshrjoshi.online"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-brand"
  >
    Suryansh R Joshi
  </a>
</p>
          <p className="text-sm text-muted-foreground">
            Dehradun, Uttarakhand, India
          </p>
        </div>
      </div>
    </footer>
  )
}
