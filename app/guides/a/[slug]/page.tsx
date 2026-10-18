import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { guideArticle } from '@/lib/db/schema'

async function getArticle(slug: string) {
  const [row] = await db
    .select()
    .from(guideArticle)
    .where(eq(guideArticle.slug, slug))
    .limit(1)
  return row
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return { title: 'Guide not found | The Ide Project' }
  return {
    title: `${article.title} | The Ide Project`,
    description: article.description,
  }
}

function ArticleBody({ body }: { body: string }) {
  const blocks = body.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean)

  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} className="mt-4 font-serif text-2xl font-bold text-foreground">
              {block.replace(/^##\s+/, '')}
            </h2>
          )
        }

        const lines = block.split('\n')
        if (lines.every((l) => l.trim().startsWith('- '))) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 text-foreground/80">
              {lines.map((l, j) => (
                <li key={j}>{l.trim().replace(/^-\s+/, '')}</li>
              ))}
            </ul>
          )
        }

        return (
          <p key={i} className="whitespace-pre-line leading-relaxed text-foreground/80">
            {block}
          </p>
        )
      })}
    </div>
  )
}

export default async function CustomGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  const published = article.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 py-4 lg:px-8">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            {article.category}
          </p>
          <h1 className="mb-3 font-serif text-4xl font-bold text-foreground lg:text-5xl">
            {article.title}
          </h1>
          <p className="mb-4 text-sm text-muted-foreground">
            By The Ide Project | {published}
          </p>
          <p className="text-lg text-muted-foreground">{article.description}</p>
        </div>

        <ArticleBody body={article.content} />
      </article>
    </main>
  )
}
