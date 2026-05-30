# Vishal Nama — Programming Tutor Website

A complete, production-ready personal teaching/tutoring website built with Next.js 16 (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Toast**: Sonner
- **Icons**: Lucide React
- **Theme**: next-themes (dark/light mode)
- **Fonts**: Sora (headings) + Inter (body) + JetBrains Mono (code)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with Hero, Stats, Services, How It Works, About, Testimonials, Pricing, FAQ, Contact |
| `/courses` | All programming courses with level badges |
| `/about` | Full bio, skills, timeline, teaching philosophy |
| `/blog` | Blog post listing with tag filters |
| `/blog/[slug]` | Individual blog post |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Customization

### Personal Information

All personal info is centralized in **one file**:

```
src/lib/constants.ts
```

Edit `SITE_CONFIG` to update your:
- Name, email, WhatsApp number
- Social links (GitHub, LinkedIn, YouTube)
- Teaching location and availability
- Site URL (for SEO)

### Adding Your Photo

1. Add your photo to `public/photo.jpg`
2. In `src/components/sections/About.tsx`, replace the placeholder `<div>` with:
   ```tsx
   import Image from "next/image";
   <Image src="/photo.jpg" alt="Vishal Nama" fill className="object-cover rounded-2xl" />
   ```

### Adding an OG Image

Create a `1200×630` image and save it to `public/og-image.png`.

### Updating Content

| Content | File |
|---------|------|
| Services/What I Teach | `src/lib/constants.ts` → `SERVICES` |
| Courses | `src/lib/constants.ts` → `COURSES` |
| Testimonials | `src/lib/constants.ts` → `TESTIMONIALS` |
| Pricing Plans | `src/lib/constants.ts` → `PRICING_PLANS` |
| FAQ | `src/lib/constants.ts` → `FAQ_ITEMS` |
| Blog Posts | `src/lib/constants.ts` → `BLOG_POSTS` |

### Enabling Email Notifications

The contact form POSTs to `/api/contact`. To receive email notifications:

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Add `RESEND_API_KEY` and `CONTACT_EMAIL` to `.env.local`
3. Uncomment the Resend code in `src/app/api/contact/route.ts`
4. Install: `npm install resend`

### WhatsApp Number

Update in `src/lib/constants.ts`:
```ts
whatsapp: "919XXXXXXXXX", // Country code + number, no + or spaces
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Build locally

```bash
npm run build
npm run start
```

## SEO Features

- Meta tags with Open Graph and Twitter Card
- JSON-LD structured data (Person, LocalBusiness, EducationalOrganization)
- Auto-generated sitemap (`/sitemap.xml`)
- robots.txt (`/robots.txt`)
- Canonical URLs
- Local SEO optimized for "programming tutor Jaipur"

## Features

- Dark/light mode toggle
- Animated hero with floating code snippets
- Count-up stats animation
- Framer Motion scroll animations
- Contact form with validation
- WhatsApp floating button with pulse animation
- Back-to-top button
- Scroll progress bar
- Custom 404 page with terminal theme
- Mobile-responsive hamburger menu
- Tag-filtered blog listing

## License

MIT — feel free to customize and use for your own tutoring website.
