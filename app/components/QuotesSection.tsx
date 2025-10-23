"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const quotes = [
  "Your thesis is not just a document—it's a testament to your growth and dedication.",
  "Every challenge you face is an opportunity to become a stronger researcher.",
  "The path to completion is paved with small, consistent steps. You've got this.",
  "Your unique perspective matters. Your research has value.",
  "Struggling is not failing; it's part of the process of becoming an expert.",
  "Take care of yourself as you care for your thesis. Both deserve your attention.",
  "You are capable of more than you believe. Trust the process.",
  "Your advisor believes in you. Now it's time to believe in yourself.",
  "Progress over perfection. Every word you write brings you closer.",
  "You're not alone in this journey. Reach out, ask for help, and celebrate small wins.",
  "Your thesis will be finished. One chapter, one section, one paragraph at a time.",
  "The struggle you're facing today will become the strength you carry tomorrow.",
  "Your research matters. Your voice matters. You matter.",
  "Believe in the value of what you're creating, even when doubt creeps in.",
  "You've overcome challenges before. You'll overcome this one too.",
  "Your thesis is a reflection of your hard work, not your worth as a person.",
  "Take breaks. Rest is productive. Self-care is not selfish.",
  "You are exactly where you need to be in this moment.",
  "Your future self will thank you for pushing through today.",
  "Celebrate every milestone, no matter how small.",
  "You have the strength, the knowledge, and the support to finish this.",
  "Your thesis is a journey, not a destination. Enjoy the process.",
  "Doubt is normal. Pushing forward anyway is what makes you brave.",
  "You are building something meaningful. That takes time and courage.",
  "Your research will inspire others. Keep going.",
  "The hardest part is often just beginning. You've already started.",
  "You are stronger than your self-doubt.",
  "Your thesis is a gift to your field and to yourself.",
  "Progress is progress, no matter how slow it feels.",
  "You deserve to succeed. Believe it.",
  "Every expert was once a beginner. You're on your way.",
  "Your voice deserves to be heard through your research.",
  "You're not just writing a thesis—you're becoming a scholar.",
  "The finish line is closer than you think.",
  "Your dedication is inspiring. Keep shining.",
  "You have everything you need to succeed.",
  "Your thesis is a reflection of your passion and commitment.",
  "Challenges are proof that you're growing.",
  "You are capable of extraordinary things.",
  "Your research will make a difference.",
  "Trust yourself. You know more than you think.",
  "You're doing better than you believe.",
  "Your thesis journey is uniquely yours. Own it.",
  "Success is not about perfection; it's about persistence.",
  "You are worthy of your own support and encouragement.",
  "Your hard work will pay off. Keep believing.",
  "You're closer to the finish line than you were yesterday.",
  "Your thesis is a testament to your resilience.",
  "You have the power to create something amazing.",
  "Your journey matters. Your growth matters. You matter.",
  "The best time to finish is now. You can do this.",
  "Your research is important. Your voice is important. You are important.",
  "Every word you write is a step toward your dream.",
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "Your thesis will be complete. One day at a time.",
  "You deserve to celebrate your progress.",
  "Your dedication will lead to success.",
  "You are not alone. We believe in you.",
  "Your research has the power to inspire and change.",
  "You're doing an amazing job. Keep going.",
  "Your thesis is a reflection of your brilliance.",
  "You have the strength to finish what you started.",
  "Your voice matters in your field.",
  "You are capable of achieving your goals.",
  "Your hard work is not in vain.",
  "You're building a legacy through your research.",
  "Your thesis is a journey of self-discovery.",
  "You deserve recognition for your efforts.",
  "Your research will contribute to your field.",
  "You are growing stronger every day.",
  "Your thesis is a reflection of your passion.",
  "You have the tools to succeed.",
  "Your dedication is admirable.",
  "You're making a difference through your work.",
  "Your thesis will be your greatest achievement.",
  "You are capable of greatness.",
  "Your research matters to the world.",
  "You're on the path to success.",
  "Your voice will be heard.",
  "You deserve to be proud of yourself.",
  "Your thesis is within reach.",
  "You are stronger than your challenges.",
  "Your work has meaning and purpose.",
  "You're closer than you think.",
  "Your dedication will inspire others.",
  "You have what it takes to succeed.",
  "Your thesis is a reflection of your commitment.",
  "You are worthy of success.",
  "Your research will make an impact.",
  "You're doing incredible work.",
  "Your thesis journey is a testament to your character.",
  "You deserve to celebrate your achievements.",
  "Your voice is powerful and important.",
  "You will finish this thesis.",
  "Your success is inevitable with persistence.",
  "You are an inspiration to those around you.",
  "Your thesis will be a masterpiece.",
  "You have the courage to see this through.",
  "Your research will change perspectives.",
  "You're unstoppable.",
  "Your thesis is your legacy.",
  "You are destined for greatness.",
  "Your hard work will be rewarded.",
  "You're a true scholar in the making.",
]

export default function QuotesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-2xl w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-pink-200">
              <p className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-6 leading-relaxed">
                "{quotes[currentIndex]}"
              </p>
              <p className="text-pink-600 font-semibold">For Chai ✨</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevQuote}
            className="p-3 rounded-full bg-pink-200 hover:bg-pink-300 text-pink-700 transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-pink-600 w-8" : "bg-pink-200 w-2 hover:bg-pink-300"
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextQuote}
            className="p-3 rounded-full bg-pink-200 hover:bg-pink-300 text-pink-700 transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <p className="text-center mt-6 text-gray-600 text-sm">
          Quote {currentIndex + 1} of {quotes.length}
        </p>
      </div>
    </div>
  )
}
