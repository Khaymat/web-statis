"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface PasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (password: string) => void
  question: string
}

export default function PasswordModal({ isOpen, onClose, onSubmit, question }: PasswordModalProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "020222") {
      onSubmit(password)
      setPassword("")
      setError("")
    } else {
      setError("Incorrect answer. Please try again.")
      setPassword("")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Access Required</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
                <X size={24} />
              </button>
            </div>

            <p className="text-gray-700 mb-6 font-poppins">{question}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your answer..."
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors font-poppins"
              />
              {error && <p className="text-red-500 text-sm font-poppins">{error}</p>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-poppins font-semibold hover:shadow-lg transition-shadow"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
