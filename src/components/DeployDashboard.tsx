import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, GitBranch, Loader2 } from 'lucide-react'

const SERVICES = [
  { name: 'Frontend', status: 'healthy' },
  { name: 'API', status: 'healthy' },
  { name: 'CI/CD', status: 'healthy' },
  { name: 'Docker', status: 'healthy' },
  { name: 'AWS', status: 'healthy' },
  { name: 'Monitoring', status: 'healthy' },
]

const LOG_LINES = [
  '$ deploycraft deploy --env production',
  '✓ Building frontend bundle',
  '✓ Running test suite (142 passed)',
  '✓ Pushing image to registry',
  '✓ Provisioning infrastructure',
  '✓ Rolling out to production',
  '✓ Health checks passed',
]

export function DeployDashboard() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [buildTime, setBuildTime] = useState(0)

  useEffect(() => {
    if (visibleLines >= LOG_LINES.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 550)
    return () => clearTimeout(t)
  }, [visibleLines])

  useEffect(() => {
    const interval = setInterval(() => {
      setBuildTime((t) => (t >= 137 ? 0 : t + 1))
    }, 60)
    return () => clearInterval(interval)
  }, [])

  const minutes = Math.floor(buildTime / 60)
  const seconds = buildTime % 60

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative w-full max-w-lg"
    >
      {/* Ambient glow behind the card */}
      <div className="absolute -inset-8 -z-10 bg-primary/10 blur-3xl" />

      <div className="overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-card backdrop-blur-xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text-secondary">
            <GitBranch className="h-3 w-3" />
            main
          </div>
        </div>

        {/* Deploy status header */}
        <div className="flex items-center justify-between px-5 pt-4">
          <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">
            Deploy Status
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
            <CheckCircle2 className="h-3 w-3" />
            Production
          </span>
        </div>

        {/* Build logs */}
        <div className="mx-5 mt-3 h-[132px] rounded-lg border border-border bg-background/60 p-3 font-mono text-[11px] leading-relaxed">
          {LOG_LINES.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className={i === 0 ? 'text-text-secondary' : 'text-accent'}
            >
              {line}
            </div>
          ))}
          {visibleLines < LOG_LINES.length && visibleLines > 0 && (
            <div className="flex items-center gap-1.5 text-text-secondary">
              <Loader2 className="h-3 w-3 animate-spin" />
              <span className="animate-blink">running…</span>
            </div>
          )}
        </div>

        {/* Service health grid */}
        <div className="grid grid-cols-3 gap-2 px-5 py-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="flex items-center gap-1.5 rounded-md border border-border bg-background/40 px-2.5 py-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              <span className="text-[11px] font-medium text-text">{service.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Metrics footer */}
        <div className="grid grid-cols-2 divide-x divide-border border-t border-border">
          <div className="px-5 py-3.5">
            <div className="text-[10px] uppercase tracking-wider text-text-secondary">
              Build Time
            </div>
            <div className="mt-0.5 font-mono text-lg font-semibold text-text">
              {minutes}m {String(seconds).padStart(2, '0')}s
            </div>
          </div>
          <div className="px-5 py-3.5">
            <div className="text-[10px] uppercase tracking-wider text-text-secondary">
              Deployment
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key="healthy"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-0.5 flex items-center gap-1.5 text-lg font-semibold text-success"
              >
                Healthy
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
