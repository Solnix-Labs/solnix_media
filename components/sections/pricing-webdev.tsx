import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PricingWebDev(): React.ReactElement {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Website Packages That Generate Results</h1>
                    <p>Stop losing customers to competitors with outdated websites. Choose your conversion-optimized package and start generating 3x more leads within 48 hours.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
                    {/* Website Starter */}
                    <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-medium">Website Starter</h2>
                                <span className="my-3 block text-2xl font-semibold">$500 <span className="text-base font-normal text-green-600">/ Launch in 48h</span></span>
                                <p className="text-muted-foreground text-sm">🚀 Perfect for small businesses & startups</p>
                            </div>

                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="#contact">Launch My Website</Link>
                            </Button>

                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    '🎨 Professional custom design that converts',
                                    '📱 Mobile-responsive for all devices',
                                    '⚡ Lightning-fast loading speeds',
                                    '🔍 Basic SEO optimization included',
                                    '📧 Contact forms & lead capture',
                                    '🔒 SSL certificate & security setup',
                                    '📚 Easy content management system',
                                    '💬 30 days of email support',
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

                    {/* Website Pro */}
                    <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)] flex flex-col justify-between">
                        <div className="flex flex-col h-full justify-between gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="font-medium">Website Pro</h2>
                                    <span className="my-3 block text-2xl font-semibold">$1,500 <span className="text-base font-normal text-blue-600">/ Complete Solution</span></span>
                                    <p className="text-muted-foreground text-sm">💎 For businesses serious about growth</p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="#contact">Get Pro Website</Link>
                                </Button>
                            </div>

                            <div>
                                <div className="text-sm font-medium mb-2">🚀 Everything in Starter, plus:</div>
                                <ul className="mt-2 list-outside space-y-3 text-sm">
                                    {[
                                        '🎯 Advanced conversion optimization (A/B tested)',
                                        '🤖 AI chatbot for 24/7 customer support',
                                        '📈 Analytics & conversion tracking setup',
                                        '🛒 E-commerce functionality (if needed)',
                                        '🎥 Professional product/service videos',
                                        '📊 Monthly performance reports',
                                        '🔄 Unlimited revisions for 3 months',
                                        '📞 Priority phone & email support',
                                        '🎁 FREE social media setup',
                                        '⚡ Performance optimization guarantee',
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
                    <p>🎯 <strong>Ready to stop losing customers to competitors?</strong> Our websites generate 25% higher conversion rates than industry average. <Link href="https://discord.gg/ANZwR594" className="underline text-blue-600 font-semibold">Get FREE website audit on Discord</Link> or contact us below for a custom quote.</p>
                </div>
            </div>
        </section>
    )
} 