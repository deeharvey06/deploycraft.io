import {
  Boxes,
  Code2,
  Container,
  Cloud,
  GitBranch,
  Database,
  Braces,
  Network,
  Server,
  Layers3,
  Hexagon,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

const TECHS = [
  { name: 'React', icon: Code2 },
  { name: 'TypeScript', icon: Braces },
  { name: 'Node.js', icon: Hexagon },
  { name: 'AWS', icon: Cloud },
  { name: 'Azure', icon: Cloud },
  { name: 'Docker', icon: Container },
  { name: 'Kubernetes', icon: Boxes },
  { name: 'Terraform', icon: Layers3 },
  { name: 'GitHub', icon: GitBranch },
  { name: 'MongoDB', icon: Database },
  { name: 'Postgres', icon: Server },
  { name: 'GraphQL', icon: Network },
]

export function TrustedTech() {
  return (
    <section className="border-y border-border py-10">
      <div className="container-px mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-text-secondary">
            Built on technology engineering teams already trust
          </p>
        </FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {TECHS.map((tech, i) => (
            <FadeIn key={tech.name} delay={i * 0.03} y={8}>
              <div className="flex items-center gap-2 text-text-secondary opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0">
                <tech.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
