import type React from "react"
import "./globals.css"
import { Great_Vibes, Poppins } from "next/font/google"

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"], variable: "--font-great-vibes" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" })

export const metadata = {
  title: "bumikaumwanita - Thesis Guidance & Counseling",
  description:
    "A supportive space for thesis guidance and counseling. Discover articles, resources, and motivational quotes to inspire your academic journey.",
  keywords: "thesis, guidance, counseling, motivation, academic support, bumikaumwanita",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${poppins.variable}`}>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  )
}
