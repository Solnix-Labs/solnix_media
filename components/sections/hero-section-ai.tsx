import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from '@/components/header'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { ArrowRight } from 'lucide-react'
import { ErrorBoundary } from '@/components/error-boundary'

export default function HeroSectionAI() {
    return (
        <ErrorBoundary>
            {/* Main site header (logo, nav, etc.) */}
            <HeroHeader />
            <section>
                {/* Hero background and vertical spacing */}
                <div className="relative pt-28 pb-12 md:pt-40 md:pb-16 lg:pt-48 lg:pb-24 mb-12">
                    {/* Centered container for hero content */}
                    <div className="mx-auto max-w-7xl px-6 sm:px-8">
                        {/* Main hero content, centered on small screens, left-aligned on large */}
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-10">
                            {/* Announcement badge with animated gradient text */}
                            <AnimatedGroup>
                                <Link
                                    href="#services"
                                    className="hover:dark:border-t-border group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                                    aria-label="Learn more about our AI automation services">
                                    <span className="text-lg" role="img" aria-label="robot">🤖</span>
                                    <span className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                                    <AnimatedGradientText className="text-sm font-semibold tracking-tight">
                                        ⚡ 500+ Hours Automated for Clients
                                    </AnimatedGradientText>
                                    {/* Animated arrow effect */}
                                    <span className="group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500 flex">
                                        <span className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                        </span>
                                    </span>
                                </Link>
                            </AnimatedGroup>

                            {/* Main headline with animated text effect */}
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="mt-16 text-balance text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-tight">
                                AI Agents That Work While You Sleep
                            </TextEffect>
                            {/* Subheadline/description */}
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto mt-10 max-w-2xl text-balance text-base sm:text-lg md:text-xl text-muted-foreground">
                                Never miss another lead again. Our custom AI agents handle customer service, qualify prospects, and book appointments 24/7. Save 20+ hours per week while boosting sales by 60%.
                            </TextEffect>

                            {/* Call-to-action buttons */}
                            <AnimatedGroup className="mt-14 flex flex-col items-center justify-center gap-6 md:mt-16 md:flex-row md:gap-8">
                                {/* Primary CTA button */}
                                <div
                                    key={1}
                                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-xl px-6 py-2 text-base min-w-[160px]">
                                        <Link href="#contact">
                                            <span className="text-nowrap">Automate My Business</span>
                                        </Link>
                                    </Button>
                                </div>
                                {/* Secondary CTA button */}
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-11 rounded-xl px-6 py-2 min-w-[160px]">
                                    <Link href="#testimonials">
                                        <span className="text-nowrap">See AI in Action</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>
                </div>
            </section>
        </ErrorBoundary>
    )
} 