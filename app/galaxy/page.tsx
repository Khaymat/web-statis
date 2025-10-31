'use client'

import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import QuoteCard from '@/app/components/QuoteCard'
import { quotes } from '@/app/lib/quotes'

const Galaxy = dynamic(() => import('@/app/components/Galaxy'), {
  ssr: false,
  loading: () => <p className="text-white text-center">Loading galaxy...</p>,
})

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
