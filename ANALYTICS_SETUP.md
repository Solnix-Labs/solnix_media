# Analytics & Google Ads Setup Guide

## Quick Setup (2 minutes)

### Step 1: Create Environment File
Create a file called `.env.local` in your project root (same folder as `package.json`):

```bash
# In your terminal:
touch .env.local
```

### Step 2: Add Your Tracking Codes
Open `.env.local` and add your tracking codes:

```env
# Google Analytics 4 (GA4) Measurement ID - REQUIRED
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-WDGHMRKXSK

# Google Ads Conversion ID - OPTIONAL (for Google Ads)
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-123456789
```

### Step 3: Get Your Tracking Codes

#### For Google Analytics (GA4):
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property (or create one)
3. Go to **Admin** → **Property Settings** → **Property Details**
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)
5. Replace `G-WDGHMRKXSK` in your `.env.local` file

#### For Google Ads (Optional):
1. Go to [Google Ads](https://ads.google.com/)
2. Click **Tools & Settings** → **Conversions**
3. Click **+ New Conversion Action**
4. Set up a conversion (e.g., "Contact Form Submission")
5. Copy your **Conversion ID** (format: `AW-XXXXXXXXX`)
6. Add it to your `.env.local` file

## What's Already Set Up

✅ **Google Analytics tracking** - Automatically tracks all page views  
✅ **Google Ads remarketing** - Visitors will be added to your remarketing lists  
✅ **Form submission tracking** - Contact form submissions are tracked  
✅ **Error tracking** - JavaScript errors are reported to Analytics  
✅ **SEO optimization** - All service pages are optimized for search  

## Testing Your Setup

1. **Start your development server:**
   ```bash
   pnpm dev
   ```

2. **Check the browser console:**
   - Open Developer Tools (F12)
   - Go to the Console tab
   - You should see gtag loading messages

3. **Verify in Google Analytics:**
   - Go to your GA4 property
   - Check **Reports** → **Realtime**
   - Navigate your site - you should see activity

## Advanced: Conversion Tracking

To track specific conversions (like form submissions), the code is already set up. You just need to:

1. Set up conversion actions in Google Ads
2. Get the conversion label
3. The form will automatically send conversion events

Example conversion event (already implemented):
```javascript
gtag('event', 'conversion', {
  send_to: 'AW-123456789/AbC-D_efG-h12_34-567',
  value: 1.0,
  currency: 'USD'
});
```

## File Structure

```
your-project/
├── .env.local              ← Your tracking codes go here
├── lib/gtag.ts            ← Analytics helper functions
├── components/
│   └── analytics-tracker.tsx ← Tracks page views
├── app/
│   └── layout.tsx         ← Loads Google scripts
└── ANALYTICS_SETUP.md     ← This guide
```

## Troubleshooting

**Problem:** Analytics not working  
**Solution:** Check that your `.env.local` file exists and has the correct variable names

**Problem:** No data in Google Analytics  
**Solution:** Make sure you're using the correct Measurement ID format (`G-XXXXXXXXXX`)

**Problem:** Google Ads not tracking  
**Solution:** Verify your Google Ads ID format (`AW-XXXXXXXXX`) and that conversions are set up

## Environment Variables Reference

| Variable | Required | Format | Description |
|----------|----------|--------|-------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Yes | `G-XXXXXXXXXX` | Google Analytics 4 tracking ID |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | No | `AW-XXXXXXXXX` | Google Ads conversion tracking ID |

## Next Steps

1. Create your `.env.local` file with the tracking codes
2. Deploy your site
3. Set up Google Ads campaigns targeting your service pages:
   - `/web-development`
   - `/digital-marketing` 
   - `/ai-agents`
4. Monitor performance in Google Analytics and Google Ads

Your analytics setup is complete! 🎉 