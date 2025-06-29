import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PricingAI(): React.ReactElement {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">AI Automation That Pays for Itself</h1>
                    <p>Stop losing leads and wasting time on repetitive tasks. Our AI agents work 24/7 to grow your business while you focus on what matters most.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
                    {/* AI Assistant */}
                    <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-medium">AI Assistant</h2>
                                <span className="my-3 block text-2xl font-semibold">$800 <span className="text-base font-normal text-green-600">/ month</span></span>
                                <p className="text-muted-foreground text-sm">🤖 Perfect for small teams</p>
                            </div>

                            <Button
                                asChild
                                variant="outline"
                                className="w-full">
                                <Link href="#contact">Start Automating</Link>
                            </Button>

                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {[
                                    '🤖 AI chatbot for website & social media',
                                    '📧 Automated email responses',
                                    '📅 Appointment scheduling automation',
                                    '📊 Basic lead qualification',
                                    '🔔 Instant notification system',
                                    '📱 Multi-platform integration',
                                    '📈 Monthly performance reports',
                                    '💬 Email support & training',
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

                    {/* AI Powerhouse */}
                    <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)] flex flex-col justify-between">
                        <div className="flex flex-col h-full justify-between gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="font-medium">AI Powerhouse</h2>
                                    <span className="my-3 block text-2xl font-semibold">$2,000 <span className="text-base font-normal text-blue-600">/ month</span></span>
                                    <p className="text-muted-foreground text-sm">⚡ For businesses ready to scale with AI</p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="#contact">Unlock AI Power</Link>
                                </Button>
                            </div>

                            <div>
                                <div className="text-sm font-medium mb-2">🚀 Everything in AI Assistant, plus:</div>
                                <ul className="mt-2 list-outside space-y-3 text-sm">
                                    {[
                                        '🧠 Advanced AI customer service (handles 90% of inquiries)',
                                        '🎯 Intelligent lead scoring & qualification',
                                        '📊 Automated sales pipeline management',
                                        '📈 Predictive analytics & insights',
                                        '🔄 Custom workflow automation',
                                        '📱 CRM integration & data synchronization',
                                        '🎥 AI-powered content generation',
                                        '📞 Voice AI for phone interactions',
                                        '🏆 Dedicated AI specialist',
                                        '⚡ 24/7 monitoring & optimization',
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
                    <p>⚡ <strong>Save 20+ hours per week guaranteed!</strong> Our AI agents have automated 500+ hours of work for our clients. <Link href="https://discord.gg/ANZwR594" className="underline text-blue-600 font-semibold">Get FREE AI consultation on Discord</Link> or book your automation assessment below.</p>
                </div>
            </div>
        </section>
    )
} 