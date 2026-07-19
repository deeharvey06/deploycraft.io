import { motion } from 'motion/react'
import { Target, Layers, ShieldCheck } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { CTA } from '@/components/CTA'

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Outcomes over output',
    description:
      'We measure success by what shipped and how it performs in production — not lines of code or hours logged.',
  },
  {
    icon: Layers,
    title: 'Full lifecycle, not just build',
    description:
      'Architecture, development, automation, and operations are one continuous discipline. We stay involved past the first release.',
  },
  {
    icon: ShieldCheck,
    title: 'Senior engineering, applied directly',
    description:
      'No account managers translating between you and the engineers doing the work. You talk to the people building it.',
  },
]

export function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />

        <div className="container-px mx-auto max-w-4xl text-center">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              About DeployCraft
            </span>
            <h1 className="mt-4 text-4xl font-semibold text-text sm:text-5xl">
              Engineering better software delivery
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              DeployCraft helps organizations accelerate software delivery
              by combining modern engineering practices with practical
              business solutions. Our focus isn't simply writing code —
              it's helping teams deliver production-ready software that's
              scalable, maintainable, secure, and built for long-term
              success.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Our Mission
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
                Software development doesn't end when the code is written
              </h2>
              <p className="mt-5 leading-relaxed text-text-secondary">
                Successful products require thoughtful architecture,
                efficient development workflows, automated deployments,
                cloud infrastructure, monitoring, and ongoing optimization.
                We partner with organizations throughout the entire
                software delivery lifecycle — not just the parts that are
                easiest to scope.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                That means we're as invested in your CI/CD pipeline and
                your on-call rotation as we are in the first line of code.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid gap-4">
                {[
                  { label: 'Startups to enterprise', value: 'SaaS, fintech, healthcare, government & more' },
                  { label: 'Full lifecycle', value: 'Architecture through production optimization' },
                  { label: 'Senior-only', value: 'No junior bench, no hand-offs' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ x: 4 }}
                    className="rounded-xl border border-border bg-surface px-6 py-5"
                  >
                    <div className="text-sm font-semibold text-text">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-sm text-text-secondary">
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40 py-24 lg:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              How we work
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
              A few principles we don't compromise on
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {PRINCIPLES.map((principle, i) => (
              <FadeIn key={principle.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-surface p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <principle.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-semibold text-text">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                    {principle.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
