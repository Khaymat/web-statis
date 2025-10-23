import fs from "fs"
import path from "path"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ArticleParams {
  slug: string
}

async function getArticle(slug: string) {
  try {
    const filePath = path.join(process.cwd(), `app/blog/articles/${slug}.mdx`)
    const content = fs.readFileSync(filePath, "utf-8")

    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
    const frontmatter = frontmatterMatch ? frontmatterMatch[1] : ""
    const body = frontmatterMatch ? content.slice(frontmatterMatch[0].length + 1) : content

    const titleMatch = frontmatter.match(/title:\s*["']?([^"\n]+)["']?/)
    const descriptionMatch = frontmatter.match(/description:\s*["']?([^"\n]+)["']?/)
    const dateMatch = frontmatter.match(/date:\s*["']?([^"\n]+)["']?/)
    const authorMatch = frontmatter.match(/author:\s*["']?([^"\n]+)["']?/)

    return {
      slug,
      title: titleMatch ? titleMatch[1] : "Untitled",
      description: descriptionMatch ? descriptionMatch[1] : "",
      date: dateMatch ? dateMatch[1] : "",
      author: authorMatch ? authorMatch[1] : "Anonymous",
      content: body.trim(),
    }
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), "app/blog/articles")
  const files = fs.readdirSync(articlesDir)

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }))
}

export default async function ArticlePage({ params }: { params: ArticleParams }) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-50 to-pink-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-pink-600 hover:text-pink-700 font-semibold mb-8 inline-block">
          ← Back to Articles
        </Link>

        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <header className="mb-8 border-b-2 border-pink-200 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">{article.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{article.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By {article.author}</span>
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {article.content.split("\n").map(
              (paragraph, index) =>
                paragraph.trim() && (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ),
            )}
          </div>
        </article>
      </div>
    </main>
  )
}
