'use client'

import { useState } from 'react'
import EasterEggView from './EasterEggView'

export default function EasterEggSection() {
  const [value, setValue] = useState('')
  const [isTriggered, setIsTriggered] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value === '2222') {
      setIsTriggered(true)
    } else {
      const phoneNumber = '6282386531389'
      const message = `aku+beri+skornya+${encodeURIComponent(value)}+deh`
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
      window.open(whatsappUrl, '_blank')
    }
  }

  if (isTriggered) {
    return <EasterEggView />
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-6xl font-great-vibes mb-8 text-[rgb(var(--primary))]">A Special Question</h2>
        <p className="text-2xl mb-8 text-[rgb(var(--accent))]">"berapa skor yang kamu berikan untuk Khay?"</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full max-w-xs px-4 py-2 text-lg text-center bg-[rgba(var(--input),0.7)] border border-[rgb(var(--border))] rounded-lg focus:ring-[rgb(var(--ring))] focus:border-[rgb(var(--ring))] text-[rgb(var(--foreground-rgb))] placeholder:text-[rgba(var(--foreground-rgb),0.5)]"
            placeholder="Enter your score here..."
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[rgb(var(--primary))] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-colors"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  )
}