# Updated Portfolio

This is a modern portfolio website built with Next.js and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setting Up API Key for Junbot

The Junbot component uses the Groq AI API to generate responses. To set up your API key:

1. Create a `.env.local` file in the root directory of the project
2. Add your Groq API key to the file:
   ```
   NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
   ```
3. Restart the development server

Alternatively, you can enter your API key directly in the Junbot interface when it appears.

### Getting a Groq API Key

1. Sign up for an account at [groq.com](https://groq.com)
2. Navigate to the API section to create an API key
3. Copy the API key and add it to your `.env.local` file as shown above

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS styling.
- [Groq API Documentation](https://console.groq.com/docs/quickstart) - learn about Groq's API.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
