import { Link, useLocation } from 'react-router-dom'
import { Terminal, Linkedin, Github, Mail } from 'lucide-react'

const SECTION_LINKS = [
  { label: 'Services', hash: 'services' },
  { label: 'Solutions', hash: 'solutions' },
  { label: 'Industries', hash: 'industries' },
]

const PAGE_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  const location = useLocation()
  const onHome = location.pathname === '/'

  return (
    <footer className="border-t border-border py-16">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 font-heading text-lg font-semibold text-text">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Terminal className="h-4 w-4" />
              </span>
              DeployCraft
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Software Delivery Consulting. Engineering better software
              delivery for startups and enterprise teams.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-text-secondary hover:text-text">
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a href="#" aria-label="GitHub" className="text-text-secondary hover:text-text">
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a href="mailto:hello@deploycraft.io" aria-label="Email" className="text-text-secondary hover:text-text">
                <Mail className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
                Navigation
              </h4>
              <ul className="mt-4 space-y-3">
                {SECTION_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={onHome ? `#${link.hash}` : `/#${link.hash}`}
                      className="text-sm text-text-secondary hover:text-text"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {PAGE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-text-secondary hover:text-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
                Legal
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-text-secondary hover:text-text">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-text-secondary hover:text-text">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
                Contact
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:hello@deploycraft.io"
                    className="text-sm text-text-secondary hover:text-text"
                  >
                    hello@deploycraft.io
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 text-center text-xs text-text-secondary">
          © {new Date().getFullYear()} DeployCraft. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
