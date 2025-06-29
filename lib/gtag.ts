/*
 * Helper utilities for Google Analytics (GA4) & Google Ads using gtag.js
 * Wraps common calls so they can be re-used across the code-base without
 * sprinkling `window.gtag(...)` everywhere.
 */

'use client';

// The GA4 & Google Ads measurement IDs must be exposed at build-time via
// NEXT_PUBLIC_* env variables. Replace the placeholders in your .env file
// or hosting provider configuration.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? '';

// Report a page view to GA4 (and Google Ads if an ID is configured).
export function pageview(url: string): void {
  if (typeof window === 'undefined') return;
  if (GA_MEASUREMENT_ID) {
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
  if (GOOGLE_ADS_ID) {
    // sends a remarketing hit for SPA navigations
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.('config', GOOGLE_ADS_ID);
  }
}

// Generic event helper. Example:
//   event('conversion', { send_to: `${GOOGLE_ADS_ID}/abc123` })
export function event(action: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.('event', action, params);
} 