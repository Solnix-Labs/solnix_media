import { Metadata } from "next";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import SolutionSection from "@/components/sections/solution-section";
import PricingSection from "@/components/sections/pricing-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Solnix Media | Transform Your Business with Premium Digital Solutions - 40% Revenue Increase Guaranteed",
  description: "Help SMBs increase revenue by 40% on average through stunning websites, AI automation, and proven digital marketing. Join 50+ successful businesses growing with Solnix Media. Free consultation available.",
  alternates: {
    canonical: "/",
  },
};

// Updated JSON-LD with proper business information
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Solnix Media',
  url: 'https://solnixmedia.com',
  logo: 'https://solnixmedia.com/Solnix TradeMark Black.svg',
  sameAs: [
    'https://twitter.com/solnixmedia',
    'https://linkedin.com/company/solnixmedia',
    'https://facebook.com/solnixmedia',
    'https://github.com/solnixmedia'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@solnixmedia.com',
    url: 'https://solnixmedia.com/contact',
    availableLanguage: 'English'
  },
  description: 'Premium digital solutions helping SMBs increase revenue by 40% on average through high-converting websites, AI automation, and proven digital marketing strategies.',
  foundingDate: '2024',
  serviceArea: 'Worldwide',
  areaServed: 'Worldwide',
  knowsAbout: [
    'High-Converting Web Development',
    'AI Automation Solutions',
    'ROI-Focused Digital Marketing',
    'SEO & Local Search Optimization',
    'Business Growth Strategies',
    'Revenue Optimization'
  ],
  offers: [
    {
      '@type': 'Offer',
      name: 'Quick Start Package',
      description: 'Launch fast, grow faster - Perfect for new businesses with guaranteed results',
      price: '500',
      priceCurrency: 'USD',
      availability: 'InStock',
      validFrom: '2024-01-01'
    },
    {
      '@type': 'Offer',
      name: 'Growth Accelerator',
      description: 'For serious businesses ready to dominate their market with guaranteed ROI',
      availability: 'InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: 'Custom Quote with Guaranteed ROI',
        priceCurrency: 'USD'
      }
    }
  ]
};

// Website JSON-LD
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Solnix Media',
  url: 'https://solnixmedia.com',
  description: 'Transform Your Business with Premium Digital Solutions - 40% Revenue Increase Guaranteed',
  inLanguage: 'en-US',
  copyrightHolder: {
    '@type': 'Organization',
    name: 'Solnix Media'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://solnixmedia.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default function Home(): React.ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd)
        }}
      />
      <HeroSection />
      <ServicesSection />
      <SolutionSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}