import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

const ARTICLES = [
  {
    category: 'Architecture',
    title: 'When to modernize vs. rewrite a legacy system',
    excerpt:
      'A framework for deciding whether to incrementally modernize an existing platform or start fresh — and how to avoid the trap of a rewrite that never ships.',
    readTime: '7 min read',
  },
  {
    category: 'DevOps',
    title: 'Cutting deployment risk without slowing releases',
    excerpt:
      'How feature flags, progressive rollouts, and automated rollback strategies let teams ship daily without the 2am pager duty.',
    readTime: '5 min read',
  },
  {
    category: 'Cloud',
    title: 'A practical guide to right-sizing cloud infrastructure',
    excerpt:
      'Most teams over-provision by default. Here\'s how to measure actual usage and cut cloud spend without hurting reliability.',
    readTime: '6 min read',
  },
  {
    category: 'Engineering Leadership',
    title: 'What a fractional staff engineer actually does',
    excerpt:
      'Fractional leadership works when it\'s scoped correctly. A look at what to expect from the engagement and what it shouldn\'t replace.',
    readTime: '4 min read',
  },
  {
    category: 'Product Engineering',
    title: 'Building design systems that survive a rebrand',
    excerpt:
      'Token-based design systems reduce the cost of visual change. Here\'s how to structure one so it doesn\'t need to be rebuilt every two years.',
    readTime: '8 min read',
  },
  {
    category: 'Architecture',
    title: 'API design decisions that are expensive to reverse',
    excerpt:
      'Versioning strategy, pagination, and auth boundaries are easy to defer and costly to change later. A checklist for getting them right early.',
    readTime: '6 min read',
  },
]

export function Insights() {
  return (
    <section className="pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="container-px mx-auto max-w-7xl">
        <FadeIn className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Insights
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-text sm:text-5xl">
            Notes on software delivery
          </h1>
          <p className="mt-5 text-lg text-text-secondary">
            Practical thinking on architecture, DevOps, and engineering
            leadership from the team building it.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.06}>
              <motion.a
                href="#"
                onClick={(e) => e.preventDefault()}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-accent">
                    {article.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-text-secondary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-text">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {article.excerpt}
                </p>
                <span className="mt-6 text-xs text-text-secondary">
                  {article.readTime}
                </span>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
