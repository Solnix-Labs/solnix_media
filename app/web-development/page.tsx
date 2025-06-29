import { Metadata } from "next";
import HeroSectionWebDev from "@/components/sections/hero-section-webdev";
import ServicesSection from "@/components/sections/services-section";
import SolutionSection from "@/components/sections/solution-section";
import PricingWebDev from "@/components/sections/pricing-webdev";
import TestimonialsWebDev from "@/components/sections/testimonials-webdev";
import FAQWebDev from "@/components/sections/faq-webdev";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";

export const metadata: Metadata = {
    title: "Web Development Services | High-Converting Websites That Generate 3x More Leads - Solnix Media",
    description: "Professional web development services that turn visitors into customers. Our websites generate 25% higher conversion rates and 150% more leads. Fast delivery, mobile-optimized, SEO-ready.",
    alternates: {
        canonical: "/web-development",
    },
};

// Updated JSON-LD for web development service
const webDevJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development Services',
    provider: {
        '@type': 'Organization',
        name: 'Solnix Media',
        url: 'https://solnixmedia.com'
    },
    description: 'High-converting websites that generate 3x more leads and 25% higher conversion rates',
    offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '500',
        availability: 'https://schema.org/InStock'
    },
    areaServed: 'Worldwide',
    serviceType: 'Web Development'
};

export default function WebDevelopmentPage(): React.ReactElement {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webDevJsonLd)
                }}
            />
            <HeroSectionWebDev />
            <ServicesSection />
            <SolutionSection />
            <TestimonialsWebDev />
            <PricingWebDev />
            <FAQWebDev />
            <ContactSection />
            <FooterSection />
        </>
    );
} 