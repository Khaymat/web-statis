"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import fs from "fs"
import path from "path"

interface Article {
  slug: string
  title: string
  description: string
  date: string
  author: string
}

async function getArticles(): Promise<Article[]> {
  const articlesDir = path.join(process.cwd(), "app/blog/articles")
  const files = fs.readdirSync(articlesDir)

  const articles = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "")
      const filePath = path.join(articlesDir, file)
      const content = fs.readFileSync(filePath, "utf-8")

      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
      const frontmatter = frontmatterMatch ? frontmatterMatch[1] : ""

      const titleMatch = frontmatter.match(/title:\s*["']?([^"\n]+)["']?/)
      const descriptionMatch = frontmatter.match(/description:\s*["']?([^"\n]+)["']?/)
      const dateMatch = frontmatter.match(/date:\s*["']?([^"\n]+)["']?/)
      const authorMatch = frontmatter.match(/author:\s*["']?([^"\n]+)["']?/)

      return {
        slug,
        title: titleMatch ? titleMatch[1] : "Untitled",
        description: descriptionMatch ? descriptionMatch[1] : "No description",
        date: dateMatch ? dateMatch[1] : "Unknown date",
        author: authorMatch ? authorMatch[1] : "Anonymous",
      }
    })

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-50 to-pink-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="text-pink-600 hover:text-pink-700 font-semibold mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-gray-900 mb-4">Articles & Resources</h1>
          <p className="text-lg text-gray-700">Guidance, counseling, and insights for your thesis journey</p>
        </div>

        <div className="grid gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-pink-500"
            >
              <Link href={`/blog/${article.slug}`} className="group">
                <h2 className="text-2xl font-bold font-playfair text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                  {article.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{article.author}</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  )
}
