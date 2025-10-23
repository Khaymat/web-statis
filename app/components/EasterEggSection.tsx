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
    <div className="py-20 px-4 bg-brand-purple-100 text-brand-purple-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">A Special Question</h2>
        <p className="text-xl mb-8">"berapa skor yang kamu berikan untuk Khay?"</p>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="w-full max-w-md mx-auto px-4 py-2 text-lg text-center bg-white border border-brand-purple-300 rounded-lg focus:ring-brand-purple-500 focus:border-brand-purple-500"
          placeholder="Enter your score here..."
        />
      </div>
      {isTriggered && <EasterEggView />}
    </div>
  )
}