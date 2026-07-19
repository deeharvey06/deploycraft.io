import { motion } from 'motion/react'
import { PencilRuler, Code, CloudCog, ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

const SERVICES = [
  {
    icon: PencilRuler,
    title: 'Software Architecture',
    description:
      'Design scalable systems before writing code. We define technical strategy, API and database architecture, and a roadmap that holds up as you grow.',
    tags: ['System Design', 'Technical Strategy', 'Scalability Planning'],
  },
  {
    icon: Code,
    title: 'Product Engineering',
    description:
      'Modern frontend and full-stack applications built for long-term success — from React interfaces to production-grade APIs and data layers.',
    tags: ['React & TypeScript', 'Full-Stack APIs', 'Automated Testing'],
  },
  {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    description:
      'Reliable deployments, CI/CD automation, cloud infrastructure, monitoring, and scaling — so releases become routine, not risky.',
    tags: ['CI/CD Pipelines', 'Infrastructure as Code', 'Observability'],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
            Every stage of software delivery, covered
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            From the first architecture diagram to production monitoring —
            we cover the full lifecycle.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-300 group-hover:from-primary/5 group-hover:to-accent/5" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="relative mt-6 text-xl font-semibold text-text">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-text-secondary">
                  {service.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#solutions"
                  className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
