import Link from "next/link"
import fs from "fs"
import path from "path"
import ArticleList from "@/components/ArticleList" // Updated import path

interface Article {
  slug: string
  title: string
  description: string
  date: string
  author: string
}

async function getArticles(): Promise<Article[]> {
  const articlesDir = path.join(process.cwd(), "app/blog/articles")

  // Check if the directory exists
  if (!fs.existsSync(articlesDir)) {
    console.warn("Articles directory not found, returning empty list.")
    return []
  }

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

        <ArticleList articles={articles} />

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  )
}
