import { Mail, Clock, MapPin } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ContactForm } from '@/components/ContactForm'

export function Contact() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />

      <div className="container-px mx-auto max-w-6xl">
        <FadeIn className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Contact
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-text sm:text-5xl">
            Let's talk about your next project
          </h1>
          <p className="mt-5 text-lg text-text-secondary">
            Tell us where you're headed and where you're stuck. We'll follow
            up with next steps — no sales deck, just a real conversation
            about your software delivery.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <FadeIn delay={0.1} className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-[18px] w-[18px]" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-text">Email</h3>
              <a
                href="mailto:hello@deploycraft.io"
                className="mt-1 block text-sm text-text-secondary hover:text-text"
              >
                hello@deploycraft.io
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-[18px] w-[18px]" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-text">
                Response time
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Within one business day
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-[18px] w-[18px]" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-text">
                Engagements
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Remote-first, working across US and EU time zones
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
