import {
    BellIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";

import { Globe } from "@/components/magicui/globe";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { OrbitingCirclesDemo } from "./orbiting-circles-demo";
import { IconCloudDemo } from "./icon-cloud-demo";
import { AnimatedBeamDemo } from "./animated-beam-demo";
import { Ripple } from "@/components/magicui/ripple";
import { MegaphoneIcon } from "lucide-react";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

// Add Discord SVG icon
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 16 16"
        {...props}
    >
        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
    </svg>
);

export function BentoDemo() {
    const features = [
        {
            Icon: FileTextIcon,
            name: "High-Converting Websites",
            description: "Generate 3x more leads with lightning-fast, mobile-optimized websites that turn visitors into customers. Average 25% conversion rate increase.",
            href: "/web-development",
            cta: "Boost Conversions",
            background: null,
            content: <OrbitingCirclesDemo />,
            className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
        },
        {
            Icon: InputIcon,
            name: "Rank #1 on Google",
            description: "Dominate local search and get found by customers actively looking for your services. Our clients see 150% traffic increase in 90 days.",
            href: "/digital-marketing",
            cta: "Rank Higher",
            background: null,
            content: <IconCloudDemo />,
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
        },
        {
            Icon: GlobeIcon,
            name: "Scale Globally",
            description: "Expand to new markets effortlessly with multi-language websites and international SEO. Reach 10x more customers worldwide.",
            href: "/global-expansion",
            cta: "Go Global",
            background: null,
            content: <Globe className="absolute right-20 top-30 opacity-60" />,
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
        },
        {
            Icon: DiscordIcon,
            name: "FREE Expert Advice",
            description: "Get instant answers from our team of experts! Join 500+ business owners getting free tips, resources, and exclusive strategies.",
            href: "https://discord.gg/ANZwR594",
            cta: "Join FREE",
            background: null,
            content: <div>
                <Ripple />
            </div>,
            className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
        },
        {
            Icon: BellIcon,
            name: "AI That Works 24/7",
            description:
                "Automate customer service, lead generation, and repetitive tasks. Our AI agents help clients save 20+ hours/week while boosting sales by 60%.",
            href: "/ai-agents",
            cta: "Automate Now",
            background: null,
            content: <AnimatedBeamDemo />,
            className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
        },
        {
            Icon: MegaphoneIcon,
            name: "Marketing That Pays for Itself",
            description: "ROI-focused campaigns that generate $5 for every $1 spent. From social media to email marketing - we handle it all while you focus on growing your business.",
            href: "/digital-marketing",
            cta: "Multiply Revenue",
            background: <AnimatedGridPattern
                numSquares={300}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />,
            className: "lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:row-end-5",
        },
    ];

    return (
        <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}
