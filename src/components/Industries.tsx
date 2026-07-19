import { motion } from 'motion/react'
import {
  Landmark,
  HeartPulse,
  Shield,
  Factory,
  ShoppingCart,
  Cloud,
  ShieldCheck,
  Building2,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

const INDUSTRIES = [
  { name: 'Financial Services', icon: Landmark },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Government', icon: Shield },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Retail', icon: ShoppingCart },
  { name: 'SaaS', icon: Cloud },
  { name: 'Defense', icon: ShieldCheck },
  { name: 'Enterprise', icon: Building2 },
]

export function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Industries
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
            Where software reliability matters most
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <FadeIn key={industry.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4, borderColor: '#2563EB' }}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-4 py-8 text-center"
              >
                <industry.icon className="h-6 w-6 text-accent" />
                <span className="text-sm font-medium text-text">
                  {industry.name}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
