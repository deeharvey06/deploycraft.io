import { motion } from 'motion/react'
import { Search, PenTool, Hammer, Rocket, TrendingUp } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

const STEPS = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: 'Understand your business goals, technical landscape, and constraints.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    description: 'Define a scalable architecture and delivery strategy.',
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Build',
    description: 'Develop maintainable, production-ready software.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Deploy',
    description: 'Release confidently with monitoring and observability.',
  },
  {
    icon: TrendingUp,
    number: '05',
    title: 'Optimize',
    description: 'Improve performance, reliability, and long-term maintainability.',
  },
]

export function Process() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Process
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
            A proven delivery process
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Every engagement follows the same disciplined path from idea to
            production.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-4 md:grid-cols-5">
          {STEPS.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-text-secondary">
                    {step.number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <step.icon className="h-[18px] w-[18px]" />
                  </div>
                </div>
                <h3 className="mt-6 font-semibold text-text">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  {step.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
