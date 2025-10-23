"use client"

import { useState } from "react"
import PasswordModal from "./PasswordModal"
import QuotesSection from "./QuotesSection"

export default function ProtectedQuotesSection() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showModal, setShowModal] = useState(!isUnlocked)

  const handlePasswordSubmit = (password: string) => {
    if (password === "020222") {
      setIsUnlocked(true)
      setShowModal(false)
    }
  }

  return (
    <>
      <PasswordModal
        isOpen={showModal && !isUnlocked}
        onClose={() => setShowModal(false)}
        onSubmit={handlePasswordSubmit}
        question="What is the age difference between Chai and Khai? (format: DDMMYY)"
      />
      {isUnlocked ? (
        <QuotesSection />
      ) : (
        <section className="h-screen w-full snap-start flex flex-col justify-center items-center p-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-playfair text-gray-900 mb-4">From Ur X</h2>
            <p className="text-lg text-gray-600 mb-8">This section is password protected</p>
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Unlock
            </button>
          </div>
        </section>
      )}
    </>
  )
}
