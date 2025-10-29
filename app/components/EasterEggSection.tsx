'use client'

import { useState } from 'react'
import EasterEggView from './EasterEggView'

export default function EasterEggSection() {
  const [value, setValue] = useState('')
  const [isTriggered, setIsTriggered] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    if (newValue === '2222') {
      setIsTriggered(true)
    }
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-6xl font-great-vibes mb-8 text-[rgb(var(--primary))]">A Special Question</h2>
        <p className="text-2xl mb-8 text-[rgb(var(--accent))]">"berapa skor yang kamu berikan untuk Khay?"</p>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="w-full max-w-md mx-auto px-4 py-2 text-lg text-center bg-[rgba(var(--input),0.7)] border border-[rgb(var(--border))] rounded-lg focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--ring))] text-[rgb(var(--foreground-rgb))] placeholder:text-[rgba(var(--foreground-rgb),0.5)]"
          placeholder="Enter your score here..."
        />
      </div>
      {isTriggered && <EasterEggView />}
    </div>
  )
}