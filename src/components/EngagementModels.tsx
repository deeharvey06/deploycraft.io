import { motion } from 'motion/react'
import { Rocket, UserCog, RefreshCw, Zap } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

const MODELS = [
  {
    icon: Rocket,
    title: 'Project Delivery',
    description:
      'End-to-end development from planning through production deployment. You get a scoped outcome, not just billed hours.',
  },
  {
    icon: UserCog,
    title: 'Fractional Engineering Leadership',
    description:
      'Senior engineering expertise when your team needs strategic technical guidance — without a full-time leadership hire.',
  },
  {
    icon: RefreshCw,
    title: 'DevOps Modernization',
    description:
      'Improve infrastructure, automate deployments, and strengthen operational reliability across your existing stack.',
  },
  {
    icon: Zap,
    title: 'Engineering Acceleration',
    description:
      'We embed with your team to increase development velocity, unblock delivery, and mentor engineers along the way.',
  },
]

export function EngagementModels() {
  return (
    <section className="border-y border-border bg-surface/40 py-24 lg:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Engagement Models
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
            Work with us the way your team needs
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Every engagement is scoped to a real outcome — pick the model
            that fits where you are today.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {MODELS.map((model, i) => (
            <FadeIn key={model.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex h-full gap-5 rounded-2xl border border-border bg-surface p-7"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <model.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-text">{model.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                    {model.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
