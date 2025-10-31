'use client'

import { motion } from 'framer-motion'

interface QuoteCardProps {
  quote: string | null
  onClose: () => void
}

export default function QuoteCard({ quote, onClose }: QuoteCardProps) {
  if (!quote) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 w-11/12 max-w-2xl p-8 bg-[rgba(var(--background-end-rgb),0.8)] border border-[rgb(var(--border))] rounded-xl shadow-lg backdrop-blur-sm"
    >
      <p className="text-2xl text-center font-great-vibes text-[rgb(var(--accent))]">
        {quote}
      </p>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 px-2 py-1 text-xs text-white bg-[rgb(var(--primary))] rounded-full"
      >
        X
      </button>
    </motion.div>
  )
}
