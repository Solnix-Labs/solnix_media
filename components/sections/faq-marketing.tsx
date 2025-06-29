'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const FAQMarketing = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How do you guarantee ROI on marketing campaigns?",
            answer: "We focus on proven strategies with measurable results. Our campaigns are data-driven and we optimize continuously. Most clients see $5 return for every $1 spent within 90 days. If we don't deliver positive ROI within 6 months, we'll work for free until we do."
        },
        {
            question: "What's included in your marketing packages?",
            answer: "Marketing Kickstart includes local SEO, social media management, email campaigns, Google Ads, and monthly reports. Marketing Domination adds national SEO, video marketing, advanced PPC, marketing automation, influencer campaigns, and dedicated account management."
        },
        {
            question: "How long before I see results?",
            answer: "Google Ads can generate leads within 24-48 hours. SEO results typically show in 30-90 days. Social media engagement improves within 2 weeks. Most clients see significant traffic and lead increases within the first month."
        },
        {
            question: "Do you work with businesses in my industry?",
            answer: "Yes! We've successfully worked with healthcare, legal, fitness, e-commerce, B2B services, restaurants, real estate, and more. Our strategies adapt to any industry because good marketing principles are universal."
        },
        {
            question: "What if my marketing budget is limited?",
            answer: "Our Marketing Kickstart package is designed for smaller budgets but still delivers results. We focus on high-impact, cost-effective strategies first. As you see ROI, we can scale up your investment for even better returns."
        },
        {
            question: "How do you measure success?",
            answer: "We track everything: website traffic, lead generation, conversion rates, cost per acquisition, ROI, and revenue attribution. You'll get detailed monthly reports showing exactly how your marketing investment is performing."
        },
        {
            question: "Can you help with both online and offline marketing?",
            answer: "Absolutely! While we specialize in digital marketing, we can integrate offline strategies and help create cohesive campaigns that work across all channels for maximum impact."
        },
        {
            question: "What makes you different from other marketing agencies?",
            answer: "We're results-obsessed, not just activity-focused. Many agencies report on 'impressions' and 'reach' - we focus on leads, sales, and ROI. Plus, we're a lean team without corporate overhead, so you get better results at better prices."
        },
        {
            question: "Do I need to sign a long-term contract?",
            answer: "No long-term contracts required! We work month-to-month because we're confident in our results. Most clients stay because they're seeing great ROI, not because they're locked in."
        },
        {
            question: "What if I'm already working with another marketing company?",
            answer: "We can audit your current marketing and show you exactly what's working and what's not. Many clients switch to us after seeing how much better their ROI could be. We'll make the transition seamless."
        }
    ];

    return (
        <section className="py-16 md:py-32">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Marketing Questions Answered</h2>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to know about ROI-focused digital marketing
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-border rounded-lg">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <h3 className="text-2xl font-bold mb-4">Ready to Multiply Your Revenue?</h3>
                    <p className="text-foreground mb-6">
                        Get a free marketing audit and see exactly how we can increase your ROI
                    </p>
                    <Button
                        asChild
                    >
                        <Link href="#contact">Get Free Marketing Audit</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FAQMarketing; 