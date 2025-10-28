"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowUpRight } from "lucide-react"

interface Article {
  slug: string
  title: string
  description: string
  date: string
  author: string
}

interface ArticleListProps {
  articles: Article[]
}

export default function ArticleList({ articles }: ArticleListProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="grid gap-8">
      {articles.map((article, index) => (
        <motion.article
          key={article.slug}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500 rounded-l-xl" />
          <div className="p-6">
            <Link href={`/blog/${article.slug}`} className="block">
              <h2 className="text-2xl font-serif font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
            </Link>
            <div className="flex items-center justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-400" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{new Date(article.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            <Link href={`/blog/${article.slug}`} className="absolute top-4 right-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
