import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lewis Nhuguti | Full-Stack Developer",
  description: "Portfolio of Lewis Nhuguti, a Full-Stack Developer specializing in React, Next.js, Laravel, and Mobile Apps.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeToggle />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
