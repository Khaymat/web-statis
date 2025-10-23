import type React from "react"
import "./globals.css"
import { Playfair_Display, Poppins } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
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
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="bg-gradient-to-br from-pink-50 via-pink-50 to-pink-100 text-gray-900 font-poppins">
        {children}
      </body>
    </html>
  )
}
