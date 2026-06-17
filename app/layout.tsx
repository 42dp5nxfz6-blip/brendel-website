import type { Metadata } from "next"
import "./globals.css"
import { site } from "@/lib/site"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Inter, Barlow_Condensed } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} – Hochleistungssaugtechnik`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.seoKeywords,
  alternates: { canonical: "https://www.brendel-transport.de/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: `${site.name} – Hochleistungssaugtechnik`,
    description: site.description,
    url: "https://www.brendel-transport.de/",
    siteName: site.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${barlow.variable}`}>
      <body className="min-h-dvh bg-white text-zinc-950 antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
