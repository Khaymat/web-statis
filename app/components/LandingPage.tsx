'use client'

import dynamic from 'next/dynamic'
import QuotesSection from './QuotesSection'
import EasterEggSection from './EasterEggSection'
import AudioPlayer from './AudioPlayer'

const FlowerScene = dynamic(() => import('./FlowerScene'), { ssr: false })

export default function LandingPage() {
  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
          <h1 className="text-8xl font-great-vibes text-[rgb(var(--primary))]">bumikaumwanita</h1>
          <p className="mt-4 text-2xl text-[rgb(var(--accent))]">A gift for my beloved</p>
        </div>
        <FlowerScene />
      </div>
      <QuotesSection />
      <EasterEggSection />
      <AudioPlayer />
    </div>
  )
}