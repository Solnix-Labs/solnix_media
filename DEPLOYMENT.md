# Deployment Guide for Solnix Media

## Overview
This project is configured for deployment to GitHub Pages at your custom domain `solnixmedia.com`. The site includes individual marketing landing pages for:

- **Main Landing Page** (`/`) - Overview of all services
- **Web Development** (`/web-development`) - Web development services
- **Digital Marketing** (`/digital-marketing`) - Digital marketing services  
- **AI Agents** (`/ai-agents`) - AI automation services
- **Contact Page** (`/contact`) - Contact form and information

## Deployment Process

### 1. GitHub Repository Setup

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin master
   ```

2. **Enable GitHub Pages** in your repository:
   - Go to your GitHub repository
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

### 2. Custom Domain Configuration

The deployment is already configured for your custom domain `solnixmedia.com`:

1. **DNS Configuration** - Point your domain to GitHub Pages:
   - Create **A records** pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or create a **CNAME record** pointing `www.solnixmedia.com` to `your-username.github.io`

2. **GitHub Pages Domain Setting**:
   - In repository **Settings** → **Pages**
   - Enter `solnixmedia.com` in the **Custom domain** field
   - Enable **Enforce HTTPS**

### 3. Contact Form Setup

The contact form is configured to use Formspree (static-friendly form service):

1. **Sign up at [Formspree.io](https://formspree.io)**
2. **Create a new form** and get your form ID
3. **Update the form endpoint** in `components/contact-email.tsx`:
   ```typescript
   // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### 4. Automatic Deployment

Once set up, deployment is automatic:
- Every push to `master` branch triggers deployment
- GitHub Actions builds and deploys the site
- Usually takes 2-5 minutes to complete

### 5. Manual Deployment (if needed)

You can also deploy manually:

```bash
# Build the site
pnpm build

# Deploy to GitHub Pages (if you have gh-pages CLI)
pnpm deploy
```

## Site Structure

```
solnixmedia.com/
├── /                    # Main landing page
├── /web-development/    # Web development marketing page
├── /digital-marketing/  # Digital marketing marketing page
├── /ai-agents/          # AI agents marketing page
└── /contact/           # Contact page
```

## Build Configuration

The site is configured for static export with:
- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Disabled for static compatibility
- **Custom Domain**: Automatic CNAME file generation
- **SEO Optimization**: Sitemap and robots.txt included

## Performance Features

- ✅ Static site generation for fast loading
- ✅ Optimized bundle splitting
- ✅ Responsive design for all devices
- ✅ SEO-optimized with structured data
- ✅ Analytics tracking ready (Google Analytics)

## Troubleshooting

### Build Fails
1. Check that all dependencies are installed: `pnpm install`
2. Verify TypeScript compilation: `pnpm check-types`
3. Run linting: `pnpm lint`

### Custom Domain Not Working
1. Verify DNS settings point to GitHub Pages
2. Check CNAME file exists in repository root
3. Ensure GitHub Pages settings are correct
4. Wait up to 24 hours for DNS propagation

### Contact Form Not Working
1. Replace `YOUR_FORM_ID` with actual Formspree ID
2. Verify Formspree form is active
3. Check browser console for errors

## Next Steps

1. **Set up your custom domain DNS**
2. **Configure Formspree for contact form**
3. **Push to GitHub to trigger first deployment**
4. **Monitor deployment in Actions tab**
5. **Test all pages and functionality**

Your marketing landing pages will be live at:
- Main: https://solnixmedia.com
- Web Dev: https://solnixmedia.com/web-development/
- Marketing: https://solnixmedia.com/digital-marketing/
- AI Agents: https://solnixmedia.com/ai-agents/
- Contact: https://solnixmedia.com/contact/ 