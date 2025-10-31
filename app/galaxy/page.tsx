'use client'

import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Galaxy from '@/app/components/Galaxy'
import QuoteCard from '@/app/components/QuoteCard'
import { quotes } from '@/app/lib/quotes'

export default function GalaxyPage() {
  const [activeQuote, setActiveQuote] = useState<string | null>(null)

  const handleStarClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setActiveQuote(quotes[randomIndex])
  }

  const handleCloseQuote = () => {
    setActiveQuote(null)
  }

  return (
    <div className="w-screen h-screen bg-black isolate">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Galaxy onStarClick={handleStarClick} resetCamera={!activeQuote} />
      </Canvas>
      <QuoteCard quote={activeQuote} onClose={handleCloseQuote} />
      <audio src="/music/space.mp3" autoPlay loop />
    </div>
  )
}
