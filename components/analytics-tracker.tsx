'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/gtag';

/**
 * Internal component that uses useSearchParams - must be wrapped in Suspense
 */
function AnalyticsTrackerInternal(): null {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');
        pageview(url);
    }, [pathname, searchParams]);

    return null;
}

/**
 * AnalyticsTracker makes sure that every client side navigation inside the
 * Next.js App Router is reported to Google Analytics / Ads.
 */
export default function AnalyticsTracker(): React.ReactElement {
    return (
        <Suspense fallback={null}>
            <AnalyticsTrackerInternal />
        </Suspense>
    );
} 