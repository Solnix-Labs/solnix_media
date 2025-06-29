import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Pricing(): React.ReactElement {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Investment Plans That Pay for Themselves</h1>
                    <p>Stop losing customers to competitors. Choose the plan that fits your growth stage and start seeing results within 30 days. Our clients typically see 3-5x ROI within the first quarter.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
                    {/* Starter Pack */}
                    <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-medium">Quick Start Package</h2>
                                <span className="my-3 block text-2xl font-semibold">$500 <span className="text-base font-normal text-green-600">/ Get Started Today</span></span>
                                <p className="text-muted-foreground text-sm">🚀 Launch fast, grow faster - Perfect for new businesses</p>
                            </div>

                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="#contact">Start Growing Now</Link>
                            </Button>

                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    '✅ Professional website that converts visitors to customers',
                                    '⚡ Lightning-fast setup (48 hours or less)',
                                    '🔒 Enterprise-grade security & backup systems',
                                    '📱 Mobile-optimized for maximum reach',
                                    '🎯 Basic SEO setup to get found on Google',
                                    '📧 Professional email support during launch',
                                    '📚 Complete documentation for easy management',
                                    '🎁 FREE 30-day performance optimization',
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Custom Solutions */}
                    <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)] flex flex-col justify-between">
                        <div className="flex flex-col h-full justify-between gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="font-medium">Growth Accelerator</h2>
                                    <span className="my-3 block text-2xl font-semibold">Custom Quote <span className="text-base font-normal text-blue-600">/ Guaranteed ROI</span></span>
                                    <p className="text-muted-foreground text-sm">💎 For serious businesses ready to dominate their market</p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="#contact">Book Strategy Call</Link>
                                </Button>
                            </div>

                            <div>
                                <div className="text-sm font-medium mb-2">🚀 What your competitors wish they had:</div>
                                <ul className="mt-2 list-outside space-y-3 text-sm">
                                    {[
                                        '💰 Revenue optimization strategies (avg. 40% increase)',
                                        '🤖 Custom AI automation to save 20+ hours/week',
                                        '📈 Advanced analytics & conversion tracking',
                                        '🎯 Multi-channel marketing campaigns that convert',
                                        '🛡️ Enterprise security & compliance solutions',
                                        '👥 Dedicated team of experts at your service',
                                        '⚡ Priority support with 4-hour response time',
                                        '🌍 International expansion & scaling strategies',
                                        '📊 Monthly performance reports & optimization',
                                        '🎁 And much more, tailored to dominate your niche',
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-12 max-w-2xl text-center text-muted-foreground text-base">
                    <p>🎯 <strong>Ready to leave your competition behind?</strong> Over 50 businesses have already accelerated their growth with Solnix Media. Join them and start seeing results in just 30 days. <Link href="https://discord.gg/ANZwR594" className="underline text-blue-600 font-semibold">Get FREE consultation on Discord</Link> or book a strategy call below.</p>
                </div>
            </div>
        </section>
    )
}
