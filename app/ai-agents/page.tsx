import { Metadata } from "next";
import HeroSectionAI from "@/components/sections/hero-section-ai";
import ServicesSection from "@/components/sections/services-section";
import SolutionSection from "@/components/sections/solution-section";
import PricingAI from "@/components/sections/pricing-ai";
import TestimonialsAI from "@/components/sections/testimonials-ai";
import FAQAI from "@/components/sections/faq-ai";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";

export const metadata: Metadata = {
    title: "AI Agents & Automation | Save 20+ Hours/Week While Boosting Sales by 60% - Solnix Media",
    description: "Custom AI agents that work 24/7 to automate customer service, lead generation, and repetitive tasks. Never miss a lead again with intelligent automation that closes 60% more deals.",
    alternates: {
        canonical: "/ai-agents",
    },
};

// Updated JSON-LD for AI agents service
const aiAgentsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Agents & Automation Services',
    provider: {
        '@type': 'Organization',
        name: 'Solnix Media',
        url: 'https://solnixmedia.com'
    },
    description: 'Custom AI agents that work 24/7 to save 20+ hours per week while boosting sales by 60%',
    offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '800',
        availability: 'https://schema.org/InStock'
    },
    areaServed: 'Worldwide',
    serviceType: 'AI Automation'
};

export default function AIAgentsPage(): React.ReactElement {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(aiAgentsJsonLd)
                }}
            />
            <HeroSectionAI />
            <ServicesSection />
            <SolutionSection />
            <TestimonialsAI />
            <PricingAI />
            <FAQAI />
            <ContactSection />
            <FooterSection />
        </>
    );
} 