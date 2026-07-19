import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

const PHASES = [
  {
    name: 'Discovery',
    description:
      'We start by understanding your business goals, technical landscape, and constraints — not just the code you want written.',
  },
  {
    name: 'Architecture',
    description:
      'We define a scalable system design, API strategy, and data architecture built to support where the product is headed.',
  },
  {
    name: 'Development',
    description:
      'Senior engineers build maintainable, production-ready software — frontend, backend, and everything in between.',
  },
  {
    name: 'Automation',
    description:
      'CI/CD pipelines, automated testing, and infrastructure as code remove manual steps and reduce release risk.',
  },
  {
    name: 'Deployment',
    description:
      'Software ships to production with monitoring and observability in place from day one, not bolted on afterward.',
  },
  {
    name: 'Optimization',
    description:
      'We continuously improve performance, reliability, and maintainability as your systems and traffic grow.',
  },
];

export function WhyDeployCraft() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.3'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id='solutions' className='py-24 lg:py-32'>
      <div className='container-px mx-auto max-w-7xl'>
        <FadeIn className='mx-auto max-w-2xl text-center'>
          <span className='text-xs font-semibold uppercase tracking-widest text-accent'>
            Why DeployCraft
          </span>
          <h2 className='mt-4 text-3xl font-semibold text-text sm:text-4xl'>
            The software delivery lifecycle, done right
          </h2>
        </FadeIn>

        <div ref={containerRef} className='mt-16 grid gap-16 lg:grid-cols-2'>
          {/* Left: self-drawing vertical timeline */}
          <div className='relative pl-12'>
            <div className='absolute left-[15px] top-1 bottom-1 w-px bg-border' />
            <motion.div
              style={{ height: lineHeight }}
              className='absolute left-[15px] top-1 w-px bg-gradient-to-b from-primary to-accent'
            />

            {PHASES.map((phase, i) => (
              <div key={phase.name} className='relative mb-12 last:mb-0'>
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    delay: i * 0.05,
                    type: 'spring',
                    stiffness: 300,
                  }}
                  className='absolute -left-12 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-semibold text-primary'
                >
                  {i + 1}
                </motion.span>
                <h3 className='text-lg font-semibold text-text'>
                  {phase.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Right: phase explanations */}
          <div className='space-y-10'>
            {PHASES.map((phase, i) => (
              <FadeIn key={phase.name} delay={i * 0.05}>
                <div className='border-l-2 border-border pl-6'>
                  <h4 className='font-semibold text-text'>{phase.name}</h4>
                  <p className='mt-2 text-[15px] leading-relaxed text-text-secondary'>
                    {phase.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
