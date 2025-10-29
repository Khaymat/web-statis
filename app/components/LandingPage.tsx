'use client'

import QuotesSection from './QuotesSection'
import EasterEggSection from './EasterEggSection'
import AudioPlayer from './AudioPlayer'

export default function LandingPage() {
  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-8xl font-great-vibes text-[rgb(var(--primary))]">bumikaumwanita</h1>
          <p className="mt-4 text-2xl text-[rgb(var(--accent))]">A gift for my beloved</p>
        </div>
      </div>
      <QuotesSection />
      <EasterEggSection />
      <AudioPlayer />
    </div>
  )
}