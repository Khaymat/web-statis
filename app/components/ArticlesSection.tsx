"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"

const articles = [
  {
    id: 1,
    title: "Understanding Thesis Guidance",
    excerpt:
      "Learn how proper guidance can transform your thesis writing experience and improve your academic outcomes.",
    category: "Guidance",
    readTime: "5 min read",
    slug: "understanding-thesis-guidance",
  },
  {
    id: 2,
    title: "The Role of Counseling in Academic Success",
    excerpt:
      "Discover how counseling support can help you manage stress and maintain mental wellness during your thesis.",
    category: "Counseling",
    readTime: "7 min read",
    slug: "counseling-academic-success",
  },
  {
    id: 3,
    title: "Building Confidence in Your Research",
    excerpt: "Practical strategies to develop confidence in your research methodology and findings.",
    category: "Research",
    readTime: "6 min read",
    slug: "building-research-confidence",
  },
  {
    id: 4,
    title: "Time Management for Thesis Writers",
    excerpt: "Master the art of balancing your thesis work with personal wellness and other commitments.",
    category: "Productivity",
    readTime: "8 min read",
    slug: "thesis-time-management",
  },
  {
    id: 5,
    title: "Overcoming Writer's Block",
    excerpt: "Effective techniques to break through creative barriers and keep your writing momentum going.",
    category: "Writing",
    readTime: "5 min read",
    slug: "overcoming-writers-block",
  },
  {
    id: 6,
    title: "Effective Communication with Your Advisor",
    excerpt: "Build a strong relationship with your thesis advisor through clear and meaningful communication.",
    category: "Guidance",
    readTime: "6 min read",
    slug: "advisor-communication",
  },
]

export default function ArticlesSection() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <a href={`/articles/${article.slug}`}>
              <Card className="h-full bg-white border-pink-200 hover:shadow-lg hover:border-pink-300 transition-all cursor-pointer group">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-grow">{article.excerpt}</p>
                  <div className="mt-4 text-pink-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Read More →
                  </div>
                </div>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
