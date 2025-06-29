'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const FAQAI = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How can AI actually help my specific business?",
            answer: "AI can automate customer inquiries, qualify leads, schedule appointments, manage your CRM, handle support tickets, and even make phone calls. We customize AI agents for your exact business needs - whether you're in real estate, healthcare, legal, or any other industry."
        },
        {
            question: "Will AI replace my employees?",
            answer: "No! AI enhances your team by handling repetitive tasks so your employees can focus on high-value work like closing deals and providing exceptional customer service. Our clients typically save 20+ hours per week while keeping their teams."
        },
        {
            question: "How quickly can AI be set up for my business?",
            answer: "Basic AI chatbots can be deployed within 48 hours. Custom AI workflows typically take 1-2 weeks. We handle all the setup, training, and integration so you can start seeing benefits immediately."
        },
        {
            question: "What if the AI makes mistakes or gives wrong information?",
            answer: "Our AI agents are carefully trained on your specific business information and have built-in safeguards. They escalate complex queries to humans and learn from every interaction. You maintain full control and oversight."
        },
        {
            question: "How much will AI automation actually save me?",
            answer: "Most clients save 20+ hours per week and see 60% more deals closed. If you value your time at $50/hour, that's $4,000+ monthly savings. Plus increased revenue from never missing leads. The ROI is typically 300-500%."
        },
        {
            question: "Is my customer data secure with AI?",
            answer: "Absolutely! We use enterprise-grade security, encrypted data transmission, and compliance with GDPR/CCPA. Your data never leaves secure servers, and we never share information with third parties."
        },
        {
            question: "Can AI integrate with my current software?",
            answer: "Yes! Our AI agents integrate with popular CRMs (Salesforce, HubSpot), communication tools (Slack, Teams), scheduling software, email platforms, and most business applications through APIs."
        },
        {
            question: "What happens if I want to cancel the AI service?",
            answer: "No long-term contracts! You can cancel anytime with 30 days notice. We'll help export your data and provide transition support. Most clients expand their AI usage instead of canceling because the results are so good."
        },
        {
            question: "How do I know if AI is actually working?",
            answer: "We provide detailed analytics: leads captured, conversations handled, appointments scheduled, time saved, and ROI metrics. You'll see exactly how AI is impacting your business with monthly performance reports."
        },
        {
            question: "What's the difference between your AI packages?",
            answer: "AI Assistant handles basic chatbots, email automation, and scheduling. AI Powerhouse includes advanced customer service, lead scoring, sales pipeline automation, predictive analytics, and custom workflows with dedicated support."
        }
    ];

    return (
        <section className="py-16 md:py-32">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">AI Automation Questions</h2>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to know about AI that actually works for your business
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
                    <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Success?</h3>
                    <p className="text-foreground mb-6">
                        Get a free AI consultation and see exactly how automation can transform your business
                    </p>
                    <Button
                        asChild
                    >
                        <Link href="#contact">Get Free AI Consultation</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FAQAI; 