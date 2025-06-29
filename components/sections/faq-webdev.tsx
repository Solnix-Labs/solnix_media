'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const FAQWebDev = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How quickly can you build my website?",
            answer: "For our Website Starter package, we deliver in just 48 hours! Our Website Pro package typically takes 5-7 business days. We work fast because we know every day without a professional website is money lost to competitors."
        },
        {
            question: "Will my website actually generate more leads?",
            answer: "Absolutely! Our websites are conversion-optimized and average 25% higher conversion rates than industry standard. We include lead capture forms, clear calls-to-action, and proven design elements that turn visitors into customers. Most clients see 3x more leads within the first month."
        },
        {
            question: "What if I don't like the design?",
            answer: "With our Website Pro package, you get unlimited revisions for 3 months. We work closely with you to ensure the design perfectly represents your brand and converts visitors. Our goal is your complete satisfaction."
        },
        {
            question: "Will my website work on mobile devices?",
            answer: "Yes! All our websites are mobile-first and fully responsive. With 60%+ of web traffic coming from mobile devices, we ensure your site looks perfect and loads fast on phones, tablets, and desktops."
        },
        {
            question: "Do you provide hosting and domain setup?",
            answer: "Yes, we handle everything! Domain registration, hosting setup, SSL certificates, and security configurations are all included. You don't need to worry about any technical details."
        },
        {
            question: "Can I update my website content myself?",
            answer: "Absolutely! We build on user-friendly content management systems that make updating text, images, and pages as easy as editing a Word document. We also provide training and documentation."
        },
        {
            question: "What about SEO and Google rankings?",
            answer: "Every website includes basic SEO optimization - proper site structure, meta tags, fast loading speeds, and mobile optimization. For advanced SEO and ranking #1 on Google, check out our digital marketing services."
        },
        {
            question: "How much does website maintenance cost?",
            answer: "Basic maintenance (updates, security, backups) is included for the first 30 days. After that, we offer maintenance packages starting at $97/month, or you can handle updates yourself with our easy-to-use system."
        },
        {
            question: "What makes your websites different from cheap alternatives?",
            answer: "We focus on conversion optimization, not just pretty designs. Our websites are built to generate leads and sales, load lightning-fast, and include professional features like AI chatbots and analytics. Cheap websites lose you money - ours make you money."
        },
        {
            question: "Do you offer any guarantees?",
            answer: "Yes! We guarantee your website will be delivered on time and meet all specifications. If you're not satisfied with your Website Pro package, we'll continue revisions until you're 100% happy. Your success is our success."
        }
    ];

    return (
        <section className="py-16 md:py-32">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-muted-foreground">
                        Get answers to common questions about our website development services
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
                    <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                    <p className="text-foreground mb-6">
                        Get a free consultation and we&apos;ll answer all your questions about your website project
                    </p>
                    <Button
                        asChild
                    >
                        <Link href="#contact">Get Free Consultation</Link>
                    </Button>
                </div>
            </div>
        </section >
    );
};

export default FAQWebDev; 