"use client";

import React from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { TrendingUp, Target, Megaphone, BarChart3 } from 'lucide-react';

const TestimonialsMarketing = () => {
    const testimonials = [
        {
            id: 1,
            company: "Peak Health Clinic",
            industry: "Healthcare Practice",
            avatar: "PH",
            color: "from-green-500 to-green-600",
            icon: TrendingUp,
            quote: "Our Google Ads ROI went from -20% to +650% in 90 days! We&apos;re now booking 50+ new patients monthly from digital marketing alone. The local SEO work has us ranking #1 for all our services.",
            metrics: [
                { label: "650% ROI", color: "from-green-400 to-green-600" },
                { label: "50+ New Patients", color: "from-blue-400 to-blue-600" },
                { label: "#1 Rankings", color: "from-purple-400 to-purple-600" }
            ]
        },
        {
            id: 2,
            company: "Elite Security Systems",
            industry: "B2B Security Company",
            avatar: "ES",
            color: "from-blue-500 to-blue-600",
            icon: Target,
            quote: "LinkedIn campaigns generated $300K in new business in 6 months. Our cost per lead dropped by 75%, and we&apos;re now the go-to security company in our region. Incredible results!",
            metrics: [
                { label: "$300K Revenue", color: "from-green-400 to-green-600" },
                { label: "75% Lower CPA", color: "from-blue-400 to-blue-600" }
            ]
        },
        {
            id: 3,
            company: "Luxe Fashion Boutique",
            industry: "E-commerce Fashion",
            avatar: "LF",
            color: "from-orange-500 to-orange-600",
            icon: Megaphone,
            quote: "Social media marketing tripled our online sales! Instagram and Facebook campaigns bring in $50K monthly revenue. The influencer partnerships were game-changing for our brand.",
            metrics: [
                { label: "3x Online Sales", color: "from-green-400 to-green-600" },
                { label: "$50K Monthly", color: "from-orange-400 to-orange-600" }
            ]
        },
        {
            id: 4,
            company: "Home Solutions Pro",
            industry: "Home Services",
            avatar: "HS",
            color: "from-red-500 to-red-600",
            icon: BarChart3,
            quote: "Local SEO campaigns increased our service calls by 400%! We dominate Google Maps in our area and the email marketing brings back repeat customers. Revenue up 250% year-over-year.",
            metrics: [
                { label: "400% More Calls", color: "from-green-400 to-green-600" },
                { label: "250% Revenue Growth", color: "from-red-400 to-red-600" }
            ]
        },
        {
            id: 5,
            company: "TechFlow Consulting",
            industry: "IT Consulting",
            avatar: "TF",
            color: "from-purple-500 to-purple-600",
            icon: Target,
            quote: "Content marketing strategy positioned us as industry experts. We&apos;re generating 10x more qualified leads, and our average deal size increased by 60%. The thought leadership content is phenomenal!",
            metrics: [
                { label: "10x More Leads", color: "from-green-400 to-green-600" },
                { label: "60% Bigger Deals", color: "from-purple-400 to-purple-600" }
            ]
        },
        {
            id: 6,
            company: "Fitness Academy Plus",
            industry: "Fitness Center Chain",
            avatar: "FA",
            color: "from-teal-500 to-teal-600",
            icon: TrendingUp,
            quote: "Facebook and Google Ads campaigns filled our classes to capacity! Membership sales increased 180% with a 12:1 ROI. The automated email sequences keep members engaged and reduce churn.",
            metrics: [
                { label: "12:1 ROI", color: "from-green-400 to-green-600" },
                { label: "180% Growth", color: "from-teal-400 to-teal-600" }
            ]
        }
    ];

    return (
        <section id="case-studies" className="py-16 md:py-32 relative overflow-hidden">
            {/* Dynamic background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                        <Megaphone className="w-5 h-5 text-primary" />
                        <AnimatedGradientText className="text-sm font-semibold tracking-wider uppercase">
                            Marketing Success Stories
                        </AnimatedGradientText>
                        <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                        Marketing Campaigns That Actually Work
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Over $2M in revenue generated for our clients. Here&apos;s proof that our marketing strategies deliver real results.
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

                                    {/* Marketing-themed hover glow effect */}
                                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-xl blur-xl" />
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
                            <TrendingUp className="w-8 h-8 text-primary" />
                            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                                Ready to Multiply Your Revenue?
                            </h3>
                            <BarChart3 className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur-lg -z-10" />
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Stop wasting money on marketing that doesn&apos;t work. Let&apos;s build campaigns that pay for themselves.
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
                            <TrendingUp className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                            <span className="relative z-10">Multiply My Revenue Now</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsMarketing; 