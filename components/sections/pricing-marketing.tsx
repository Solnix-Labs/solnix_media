import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PricingMarketing(): React.ReactElement {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Marketing Plans That Actually Work</h1>
                    <p>Stop wasting money on ads that don&apos;t convert. Our proven campaigns generate $5 for every $1 spent and deliver results you can measure.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
                    {/* Marketing Kickstart */}
                    <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-medium">Marketing Kickstart</h2>
                                <span className="my-3 block text-2xl font-semibold">$1,000 <span className="text-base font-normal text-green-600">/ month</span></span>
                                <p className="text-muted-foreground text-sm">🎯 Perfect for local businesses</p>
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
                                    '📍 Local SEO optimization',
                                    '📱 Social media management (2 platforms)',
                                    '📧 Email marketing campaigns',
                                    '📊 Google Ads setup & management',
                                    '📈 Monthly performance reports',
                                    '🎯 Lead generation optimization',
                                    '💬 Basic customer review management',
                                    '📞 Monthly strategy calls',
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

                    {/* Marketing Domination */}
                    <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)] flex flex-col justify-between">
                        <div className="flex flex-col h-full justify-between gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="font-medium">Marketing Domination</h2>
                                    <span className="my-3 block text-2xl font-semibold">$2,500 <span className="text-base font-normal text-blue-600">/ month</span></span>
                                    <p className="text-muted-foreground text-sm">🚀 For businesses ready to dominate their market</p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="#contact">Dominate My Market</Link>
                                </Button>
                            </div>

                            <div>
                                <div className="text-sm font-medium mb-2">🔥 Everything in Kickstart, plus:</div>
                                <ul className="mt-2 list-outside space-y-3 text-sm">
                                    {[
                                        '🌍 National/International SEO campaigns',
                                        '📱 Full social media management (all platforms)',
                                        '🎥 Video marketing & YouTube optimization',
                                        '📊 Advanced PPC campaigns (Google, Facebook, LinkedIn)',
                                        '🤖 Marketing automation & CRM integration',
                                        '📈 Conversion rate optimization',
                                        '🎯 Influencer partnership campaigns',
                                        '📞 Weekly strategy calls & priority support',
                                        '🏆 Dedicated account manager',
                                        '📊 Advanced analytics & competitor analysis',
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
                    <p>💰 <strong>Guaranteed ROI or your money back!</strong> Our marketing campaigns have generated over $2M in revenue for our clients. <Link href="https://discord.gg/ANZwR594" className="underline text-blue-600 font-semibold">Get FREE marketing audit on Discord</Link> or book your strategy call below.</p>
                </div>
            </div>
        </section>
    )
} 