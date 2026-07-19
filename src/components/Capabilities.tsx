import { Monitor, Server, CloudCog, Users } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

const CAPABILITIES = [
  {
    icon: Monitor,
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Accessibility', 'Performance'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Postgres', 'GraphQL'],
  },
  {
    icon: CloudCog,
    title: 'Cloud',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    icon: Users,
    title: 'Leadership',
    items: ['Architecture', 'Code Reviews', 'Mentoring', 'Fractional Staff Engineer'],
  },
]

export function Capabilities() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Capabilities
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
            Senior expertise, end to end
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 0.08} className="bg-surface p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <cap.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-text">{cap.title}</h3>
              <ul className="mt-4 space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="text-sm text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
