# My Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** - React framework with App Router
- 📝 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Ready for Vercel** - Optimized for deployment

## Getting Started

### Prerequisites

Make sure you have Node.js 18.17 or later installed on your machine.

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd my-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Quick Deploy

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Vercel](https://vercel.com/new)
3. Import your Git repository
4. Vercel will automatically detect it's a Next.js app and configure the build settings
5. Click "Deploy" and your site will be live!

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

## Project Structure

```
my-site/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs/) - typed JavaScript
- [Vercel](https://vercel.com/docs) - deployment platform
