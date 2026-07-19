import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Terminal } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';

const SECTION_LINKS = [
  { label: 'Services', hash: 'services' },
  { label: 'Solutions', hash: 'solutions' },
  { label: 'Industries', hash: 'industries' },
];

const PAGE_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className='container-px mx-auto flex h-16 max-w-7xl items-center justify-between'>
        <Link
          to='/'
          className='flex items-center gap-2 font-heading text-lg font-semibold text-text'
        >
          <span className='flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary'>
            <Terminal className='h-4 w-4' />
          </span>
          DeployCraft
        </Link>

        <div className='hidden items-center gap-8 lg:flex'>
          {SECTION_LINKS.map((link) => (
            <a
              key={link.label}
              href={onHome ? `#${link.hash}` : `/#${link.hash}`}
              className='text-sm font-medium text-text-secondary transition-colors hover:text-text'
            >
              {link.label}
            </a>
          ))}
          {PAGE_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className='text-sm font-medium text-text-secondary transition-colors hover:text-text'
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-3'>
          <Link
            to='/contact'
            className={buttonVariants({
              size: 'sm',
              className: 'hidden sm:inline-flex',
            })}
          >
            Schedule Consultation
          </Link>
          <button
            className='inline-flex h-9 w-9 items-center justify-center rounded-md text-text lg:hidden'
            onClick={() => setMenuOpen((v) => !v)}
            aria-label='Toggle menu'
          >
            {menuOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className='border-t border-border bg-background lg:hidden'
        >
          <div className='container-px mx-auto flex flex-col gap-1 py-4'>
            {SECTION_LINKS.map((link) => (
              <a
                key={link.label}
                href={onHome ? `#${link.hash}` : `/#${link.hash}`}
                onClick={() => setMenuOpen(false)}
                className='rounded-md px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface hover:text-text'
              >
                {link.label}
              </a>
            ))}
            {PAGE_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className='rounded-md px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-surface hover:text-text'
              >
                {link.label}
              </Link>
            ))}
            <Link
              to='/contact'
              onClick={() => setMenuOpen(false)}
              className={buttonVariants({
                size: 'sm',
                className: 'mt-2 w-full sm:hidden',
              })}
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
