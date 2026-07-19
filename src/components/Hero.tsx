import { useRef, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Layers } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import { DeployDashboard } from '@/components/DeployDashboard';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className='relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32'
    >
      {/* Animated gradient background */}
      <div className='absolute inset-0 -z-10 bg-hero-gradient' />
      <div className='absolute inset-0 -z-10 bg-noise opacity-40' />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]'
      />

      <div className='container-px mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]'>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-text-secondary'
          >
            <Layers className='h-3.5 w-3.5 text-accent' />
            Software Delivery Consulting
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className='text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl'
          >
            Build better software.
            <br />
            Ship faster.{' '}
            <span className='text-gradient'>Scale confidently.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='mt-6 max-w-xl text-lg leading-relaxed text-text-secondary'
          >
            DeployCraft helps startups and enterprise engineering teams
            accelerate software delivery through architecture, product
            engineering, cloud, DevOps, and fractional technical leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className='mt-9 flex flex-wrap items-center gap-4'
          >
            <Link to='/contact' className={buttonVariants({ size: 'lg' })}>
              Schedule Consultation
              <ArrowRight className='h-4 w-4' />
            </Link>
            <a
              href='#services'
              className={buttonVariants({ size: 'lg', variant: 'secondary' })}
            >
              View Services
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className='flex justify-center lg:justify-end'
        >
          <DeployDashboard />
        </motion.div>
      </div>
    </section>
  );
}
