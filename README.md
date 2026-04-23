# GrowX - Invest & Multiply Your Wealth

The ultimate investment app for consistent monthly returns. Secure, transparent, and easy to use.

## Features

- 📈 **6% Monthly Returns** - Guaranteed returns on your investments
- 🔒 **Secure Platform** - Bank-level security for all transactions
- 📊 **Automated Investing** - Simple, automated investment strategies
- 🤝 **Referral Bonus** - Earn bonuses by referring friends
- 📱 **Mobile-First** - Smooth experience on all devices

## Tech Stack

- **Framework**: Next.js 16.2.4
- **UI Library**: React 19.2.4
- **Animations**: Framer Motion 11.11.1
- **Icons**: Lucide React 0.446.0
- **Styling**: CSS Modules + Styled JSX

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Or
yarn dev
pnpm dev
bun dev
```

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
grow-x/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Landing page
│   │   ├── join/         # Referral code page
│   │   ├── layout.tsx    # Root layout
│   │   └── loading.tsx   # Loading skeleton
│   └── components/       # Reusable components
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Features.tsx
│       ├── StepGuide.tsx
│       ├── CTA.tsx
│       └── LoadingWrapper.tsx
├── public/               # Static assets
├── .gitignore
├── package.json
└── tsconfig.json
```

## Referral Code System

The app displays referral codes from URL parameter `?ref=CODE`:

1. Visit `/join?ref=YOUR_CODE`
2. Code loads and displays dynamically
3. Falls back to `GROWX-777` if no ref parameter
4. Code stored in localStorage for persistence


## License

MIT License - see LICENSE file for details.
