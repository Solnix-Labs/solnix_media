"use client";

import React from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const TestimonialsWebDev = () => {
    const testimonials = [
        {
            id: 1,
            company: "TechCorp Solutions",
            industry: "B2B Software Company",
            avatar: "TC",
            color: "from-blue-500 to-blue-600",
            quote: "Our new website generates 300% more leads than our old one. In just 3 months, we've closed $150K in new business directly from website inquiries. The conversion rate optimization is phenomenal!",
            metrics: [
                { label: "300% More Leads", color: "from-green-400 to-green-600" },
                { label: "$150K Revenue", color: "from-blue-400 to-blue-600" }
            ]
        },
        {
            id: 2,
            company: "Bella's Fitness Studio",
            industry: "Local Fitness Business",
            avatar: "BF",
            color: "from-purple-500 to-purple-600",
            quote: "The new website looks amazing on mobile! My membership signups increased by 180% in the first month. The online booking system has saved me hours of phone calls every week.",
            metrics: [
                { label: "180% More Signups", color: "from-green-400 to-green-600" },
                { label: "10+ Hours Saved", color: "from-purple-400 to-purple-600" }
            ]
        },
        {
            id: 3,
            company: "Green Roots Landscaping",
            industry: "Landscaping Services",
            avatar: "GR",
            color: "from-orange-500 to-orange-600",
            quote: "We went from 2-3 inquiries per month to 15-20! The website showcases our work beautifully and the contact forms capture every lead. Our revenue has doubled since launch.",
            metrics: [
                { label: "600% More Inquiries", color: "from-green-400 to-green-600" },
                { label: "2x Revenue", color: "from-orange-400 to-orange-600" }
            ]
        },
        {
            id: 4,
            company: "Modern Café Chain",
            industry: "Restaurant Chain",
            avatar: "MC",
            color: "from-red-500 to-red-600",
            quote: "The e-commerce integration and online ordering system boosted our delivery sales by 250%. The website loads super fast and looks professional on all devices.",
            metrics: [
                { label: "250% More Orders", color: "from-green-400 to-green-600" },
                { label: "Lightning Fast", color: "from-red-400 to-red-600" }
            ]
        },
        {
            id: 5,
            company: "Legal Solutions Pro",
            industry: "Law Firm",
            avatar: "LS",
            color: "from-teal-500 to-teal-600",
            quote: "Our conversion rate went from 2% to 8.5% after the redesign. The professional design builds trust instantly, and the AI chatbot qualifies leads 24/7. Exceptional work!",
            metrics: [
                { label: "325% Conversion Boost", color: "from-green-400 to-green-600" },
                { label: "24/7 AI Support", color: "from-teal-400 to-teal-600" }
            ]
        },
        {
            id: 6,
            company: "Digital Consulting Group",
            industry: "Consulting Firm",
            avatar: "DC",
            color: "from-indigo-500 to-indigo-600",
            quote: "The website perfectly showcases our expertise and credibility. We&apos;re booking 40% more consultations, and clients often mention how professional our website looks. Outstanding ROI!",
            metrics: [
                { label: "40% More Bookings", color: "from-green-400 to-green-600" },
                { label: "Premium Brand", color: "from-indigo-400 to-indigo-600" }
            ]
        }
    ];

    return (
        <section id="testimonials" className="py-16 md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <AnimatedGradientText className="text-sm font-semibold tracking-wider uppercase mb-4">
                        ✨ Success Stories
                    </AnimatedGradientText>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        Real Websites, Real Results
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        See how our high-converting websites transformed these businesses and generated massive growth
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Card className={cn(
                                "relative h-full overflow-hidden transition-all duration-500",
                                "bg-background/80 backdrop-blur-sm",
                                "border-0 shadow-lg hover:shadow-2xl",
                                "transform hover:-translate-y-2 hover:scale-[1.02]",
                                "before:absolute before:inset-0 before:-z-10",
                                "before:bg-gradient-to-br before:from-white/10 before:to-transparent",
                                "dark:before:from-white/5"
                            )}>
                                <BorderBeam size={100} duration={12} delay={index * 2} />

                                <CardHeader className="pb-4">
                                    <div className="flex items-center space-x-4">
                                        <div className={cn(
                                            "relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg",
                                            "bg-gradient-to-br",
                                            testimonial.color,
                                            "group-hover:scale-110 transition-transform duration-300"
                                        )}>
                                            {testimonial.avatar}
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                                                {testimonial.company}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.industry}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    <blockquote className="text-muted-foreground leading-relaxed relative">
                                        <div className="absolute -top-2 -left-2 text-3xl text-primary/20 font-serif">&quot;</div>
                                        {testimonial.quote}
                                        <div className="absolute -bottom-4 -right-2 text-3xl text-primary/20 font-serif">&quot;</div>
                                    </blockquote>

                                    <div className="flex flex-wrap gap-2">
                                        {testimonial.metrics.map((metric, metricIndex) => (
                                            <motion.div
                                                key={metricIndex}
                                                whileHover={{ scale: 1.05 }}
                                                className="relative"
                                            >
                                                <span className={cn(
                                                    "inline-block px-3 py-1.5 rounded-full text-xs font-semibold",
                                                    "bg-gradient-to-r text-white shadow-sm",
                                                    "transition-all duration-300 hover:shadow-lg",
                                                    metric.color
                                                )}>
                                                    {metric.label}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5 rounded-xl blur-xl" />
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center relative"
                >
                    <div className="relative inline-block">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                            Ready to Join These Success Stories?
                        </h3>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg -z-10" />
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Your website is your #1 sales tool. Let&apos;s make it work 24/7 to grow your business.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <a
                            href="#contact"
                            className={cn(
                                "group relative inline-flex items-center justify-center",
                                "px-8 py-4 text-lg font-semibold rounded-xl",
                                "bg-gradient-to-r from-primary via-primary to-primary/80",
                                "text-primary-foreground shadow-lg hover:shadow-xl",
                                "transition-all duration-300 overflow-hidden",
                                "before:absolute before:inset-0 before:-z-10",
                                "before:bg-gradient-to-r before:from-primary/80 before:to-primary",
                                "before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                            )}
                        >
                            <span className="relative z-10">Get My High-Converting Website</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsWebDev; 