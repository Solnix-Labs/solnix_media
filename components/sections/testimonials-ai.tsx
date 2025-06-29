"use client";

import React from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Zap, Brain, Clock, TrendingUp } from 'lucide-react';

const TestimonialsAI = () => {
    const testimonials = [
        {
            id: 1,
            company: "RealEstate Solutions",
            industry: "Real Estate Agency",
            avatar: "RS",
            color: "from-blue-500 to-blue-600",
            icon: TrendingUp,
            quote: "The AI agent handles 90% of initial inquiries and books showings automatically. We've closed 60% more deals and save 25 hours per week. Never missing a lead again has transformed our business!",
            metrics: [
                { label: "60% More Deals", color: "from-green-400 to-green-600" },
                { label: "25 Hours Saved", color: "from-blue-400 to-blue-600" }
            ]
        },
        {
            id: 2,
            company: "Dental Specialists Group",
            industry: "Dental Practice",
            avatar: "DS",
            color: "from-purple-500 to-purple-600",
            icon: Clock,
            quote: "AI appointment scheduling and patient follow-ups increased our booking rate by 85%. The voice AI handles calls professionally, and our staff can focus on patient care instead of admin work.",
            metrics: [
                { label: "85% More Bookings", color: "from-green-400 to-green-600" },
                { label: "Voice AI", color: "from-purple-400 to-purple-600" }
            ]
        },
        {
            id: 3,
            company: "Legal Consultants Pro",
            industry: "Law Firm",
            avatar: "LC",
            color: "from-orange-500 to-orange-600",
            icon: Brain,
            quote: "The AI qualifies leads and schedules consultations 24/7. Our conversion rate from inquiry to client increased by 120%. The system pays for itself with just one additional client per month!",
            metrics: [
                { label: "120% Conversion", color: "from-green-400 to-green-600" },
                { label: "24/7 Automation", color: "from-orange-400 to-orange-600" }
            ]
        },
        {
            id: 4,
            company: "FinanceFirst Advisory",
            industry: "Financial Services",
            avatar: "FS",
            color: "from-red-500 to-red-600",
            icon: TrendingUp,
            quote: "AI lead scoring identifies our best prospects automatically. We&apos;re closing bigger deals faster - average deal size up 45% and sales cycle shortened by 30%. The ROI is incredible!",
            metrics: [
                { label: "45% Bigger Deals", color: "from-green-400 to-green-600" },
                { label: "30% Faster Sales", color: "from-red-400 to-red-600" }
            ]
        },
        {
            id: 5,
            company: "Manufacturing Connect",
            industry: "B2B Manufacturing",
            avatar: "MC",
            color: "from-teal-500 to-teal-600",
            icon: Zap,
            quote: "AI customer service handles 95% of support tickets instantly. Customer satisfaction increased while our support costs dropped by 70%. The system learns and gets smarter every day.",
            metrics: [
                { label: "95% Automated", color: "from-green-400 to-green-600" },
                { label: "70% Cost Savings", color: "from-teal-400 to-teal-600" }
            ]
        },
        {
            id: 6,
            company: "E-Learning Masters",
            industry: "Online Education",
            avatar: "EL",
            color: "from-indigo-500 to-indigo-600",
            icon: Brain,
            quote: "AI-powered course recommendations and student support increased enrollment by 200%. The system nurtures leads through the entire funnel and personalizes the experience for each student.",
            metrics: [
                { label: "200% Enrollment", color: "from-green-400 to-green-600" },
                { label: "Personalized AI", color: "from-indigo-400 to-indigo-600" }
            ]
        }
    ];

    return (
        <section id="testimonials" className="py-16 md:py-32 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-2xl" />
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
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <Zap className="w-5 h-5 text-primary" />
                        <AnimatedGradientText className="text-sm font-semibold tracking-wider uppercase">
                            AI Automation Success
                        </AnimatedGradientText>
                        <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                        AI That Actually Works
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        See how our AI agents automated 500+ hours of work and helped businesses close 60% more deals
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => {
                        const IconComponent = testimonial.icon;
                        return (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className={cn(
                                    "relative h-full overflow-hidden transition-all duration-500",
                                    "bg-background/80 backdrop-blur-sm rounded-xl border shadow-lg hover:shadow-2xl",
                                    "transform hover:-translate-y-2 hover:scale-[1.02]",
                                    "before:absolute before:inset-0 before:-z-10",
                                    "before:bg-gradient-to-br before:from-white/10 before:to-transparent",
                                    "dark:before:from-white/5"
                                )}>
                                    <BorderBeam size={100} duration={12} delay={index * 2} />

                                    <div className="flex flex-col space-y-1.5 p-6 pb-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="relative">
                                                <div className={cn(
                                                    "w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg",
                                                    "bg-gradient-to-br",
                                                    testimonial.color,
                                                    "group-hover:scale-110 transition-transform duration-300"
                                                )}>
                                                    {testimonial.avatar}
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                                                </div>
                                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
                                                    <IconComponent className="w-3 h-3 text-white" />
                                                </div>
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
                                    </div>

                                    <div className="p-6 pt-0 space-y-6">
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
                                                    className="relative group/metric"
                                                >
                                                    <span className={cn(
                                                        "inline-block px-3 py-1.5 rounded-full text-xs font-semibold",
                                                        "bg-gradient-to-r text-white shadow-sm",
                                                        "transition-all duration-300 hover:shadow-lg",
                                                        metric.color
                                                    )}>
                                                        {metric.label}
                                                    </span>
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* AI-themed hover glow effect */}
                                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-xl blur-xl" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
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
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <Zap className="w-8 h-8 text-primary" />
                            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                Ready to Automate Your Success?
                            </h3>
                            <Brain className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20 rounded-lg blur-lg -z-10" />
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Stop losing leads and wasting time. Let AI work 24/7 to grow your business while you sleep.
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
                                "transition-all duration-300 overflow-hidden"
                            )}
                        >
                            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                            <span className="relative z-10">Automate My Business Now</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsAI; 