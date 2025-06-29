'use client'
import Link from 'next/link'
import SolnixLogo from '@/components/solnix-logo'
import { Menu } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet'

const menuItems = [
    { name: 'Services', anchorHref: '/#services', pageHref: '/services' },
    { name: 'Solution', anchorHref: '/#solution', pageHref: '/solution' },
    { name: 'Pricing', anchorHref: '/#pricing', pageHref: '/pricing' },
    { name: 'About', anchorHref: '/#about', pageHref: '/about' },
]

export const HeroHeader = (): React.ReactElement => {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <SolnixLogo className="w-12 h-12" />
                            </Link>

                            {/* Mobile Menu */}
                            <Sheet>
                                <SheetTrigger asChild>
                                    <button
                                        aria-label="Open Menu"
                                        className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                        <Menu className="size-6" />
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-80 max-w-full">
                                    <SheetTitle className="sr-only">Menu</SheetTitle>

                                    {/* Navigation */}
                                    <nav className="mt-12">
                                        <ul className="space-y-6 text-center">
                                            {menuItems.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.anchorHref}
                                                        className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors block py-2"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>

                                    {/* Bottom Actions */}
                                    <div className="absolute bottom-8 left-6 right-6 space-y-4">
                                        <div className="flex justify-center">
                                            <Switch />
                                        </div>
                                        <Link href="/contact" className="block">
                                            <Button className="w-full" size="lg">Contact Us</Button>
                                        </Link>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.anchorHref}
                                            className="text-muted-foreground hover:text-foreground block duration-150"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex lg:w-fit lg:gap-6">
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <div className="flex items-center gap-2">
                                    <Switch />
                                </div>
                                <Link href="/contact" className="w-full md:w-auto">
                                    <Button className="w-full md:w-auto">Contact Us</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
