import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WhyChoose } from '@/components/why-choose'
import { Services } from '@/components/services'
import { ProjectsGallery } from '@/components/projects-gallery'
import { Brands } from '@/components/brands'
import { Coverage } from '@/components/coverage'
import { About } from '@/components/about'
import { EnquiryForm } from '@/components/enquiry-form'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { COVERAGE, SERVICES, SITE } from '@/lib/site-data'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  description:
    'Signage, branding and advertising fabrication company providing complete indoor and outdoor branding solutions across India since 2016.',
  url: 'https://mgsignage.site',
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: String(SITE.founded),
  image: 'https://mgsignage.site/logos/mg-signage-square.png',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.line1,
    addressLocality: 'Dehradun',
    addressRegion: 'Uttarakhand',
    postalCode: '248001',
    addressCountry: 'IN',
  },
  areaServed: COVERAGE.map((city) => ({ '@type': 'City', name: city })),
  makesOffer: SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title },
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <WhyChoose />
        <Services />
        <ProjectsGallery />
        <Brands />
        <Coverage />
        <About />
        <EnquiryForm />
        <CtaSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
