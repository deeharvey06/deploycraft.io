import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';

export function CTA() {
  return (
    <section className='relative overflow-hidden py-24 lg:py-32'>
      <div className='absolute inset-0 -z-10 bg-hero-gradient' />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]'
      />

      <div className='container-px mx-auto max-w-4xl text-center'>
        <FadeIn>
          <h2 className='text-3xl font-semibold text-text sm:text-5xl'>
            Ready to deliver software faster?
          </h2>
          <p className='mx-auto mt-5 max-w-xl text-lg text-text-secondary'>
            Let's talk about your next project — whether it's a new platform, a
            legacy modernization, or a team that needs technical leadership.
          </p>
          <div className='mt-9 flex justify-center'>
            <Link to='/contact' className={buttonVariants({ size: 'lg' })}>
              Schedule Consultation
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
