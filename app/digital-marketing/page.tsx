import { Metadata } from "next";
import HeroSectionMarketing from "@/components/sections/hero-section-marketing";
import ServicesSection from "@/components/sections/services-section";
import SolutionSection from "@/components/sections/solution-section";
import PricingMarketing from "@/components/sections/pricing-marketing";
import TestimonialsMarketing from "@/components/sections/testimonials-marketing";
import FAQMarketing from "@/components/sections/faq-marketing";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";

export const metadata: Metadata = {
    title: "Digital Marketing Services | ROI-Focused Campaigns That Generate $5 for Every $1 Spent - Solnix Media",
    description: "Professional digital marketing services that pay for themselves. Rank #1 on Google, dominate social media, and get 150% more traffic in 90 days. Proven strategies, guaranteed results.",
    alternates: {
        canonical: "/digital-marketing",
    },
};

// Updated JSON-LD for digital marketing service
const marketingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital Marketing Services',
    provider: {
        '@type': 'Organization',
        name: 'Solnix Media',
        url: 'https://solnixmedia.com'
    },
    description: 'ROI-focused digital marketing campaigns that generate $5 for every $1 spent',
    offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '1000',
        availability: 'https://schema.org/InStock'
    },
    areaServed: 'Worldwide',
    serviceType: 'Digital Marketing'
};

export default function DigitalMarketingPage(): React.ReactElement {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(marketingJsonLd)
                }}
            />
            <HeroSectionMarketing />
            <ServicesSection />
            <SolutionSection />
            <TestimonialsMarketing />
            <PricingMarketing />
            <FAQMarketing />
            <ContactSection />
            <FooterSection />
        </>
    );
} 