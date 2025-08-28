# CallCatcher Website

A modern, responsive website for CallCatcher - helping home service businesses recover missed calls and grow their business.

## 🚀 Features

- **Modern Design**: Clean, Apple-inspired design with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Ready**: Proper meta tags and structured content
- **Interactive Elements**: Floating animations, smooth scrolling, and engaging CTAs

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd callcatcher-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `out`
5. Deploy!

## 🌐 Custom Domain Setup

### With Vercel:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain
5. Update DNS records as instructed

### With Squarespace Domain:
1. In Vercel, add your domain
2. In Squarespace, go to Settings → Domains
3. Add a CNAME record pointing to your Vercel URL
4. Wait for DNS propagation (up to 48 hours)

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Problems.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── public/
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🎨 Customization

- **Colors**: Update `tailwind.config.js` for brand colors
- **Content**: Modify component files for text and images
- **Styling**: Use Tailwind classes or add custom CSS in `globals.css`

## 📞 Support

For questions or support, contact the development team.

---

Built with ❤️ for CallCatcher
