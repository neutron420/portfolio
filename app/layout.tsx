import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ritesh Kumar Singh | Full Stack Developer & DevOps Engineer",
  description: "Portfolio of Ritesh Kumar Singh - Full Stack Developer and DevOps Engineer specializing in React, Node.js, Docker, and Kubernetes. Explore my projects and technical expertise.",
  keywords: [
    "Ritesh Kumar Singh",
    "Full Stack Developer",
    "Developer",
    "DevOps Engineer",
    "Portfolio",
    "portfolio",
    "portfolio website",
    "web development",
    "software development",
    "full stack developer",
    "devops engineer",
    "devops",
    "React",
    "Node.js",
    "Docker",
    "Kubernetes"
  ],
  authors: [{ name: "Ritesh Kumar Singh" }],
  creator: "Ritesh Kumar Singh",
  publisher: "Ritesh Kumar Singh",
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Person Schema markup for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ritesh Kumar Singh", // Fixed: removed /public
    "jobTitle": "Full Stack Developer and DevOps Engineer",
    "description": "Full Stack Developer and DevOps Engineer specializing in React, Node.js, Docker, and Kubernetes",
    "sameAs": [
      "https://github.com/neutron420",
      "https://www.linkedin.com/in/ritesh-singh1/",
      "https://x.com/RiteshS18572143"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Docker",
      "Kubernetes",
      "Cloud Computing",
      "DevOps"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}