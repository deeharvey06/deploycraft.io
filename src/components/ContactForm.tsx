import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'motion/react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface ContactFormValues {
  name: string
  email: string
  company: string
  budget: string
  message: string
}

const inputClasses =
  'w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/60 transition-colors focus:border-primary focus:outline-none'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>()

  async function onSubmit(data: ContactFormValues) {
    // No backend is wired up yet — this simulates a network call so the
    // form's states (loading / success / validation) are all in place.
    // Swap this for a real POST to your CRM, inbox, or booking tool.
    await new Promise((resolve) => setTimeout(resolve, 900))
    console.log('Contact form submission', data)
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface px-8 py-16 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-text">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-[15px] text-text-secondary">
          Thanks for reaching out. We reply to every consultation request
          within one business day.
        </p>
        <Button
          variant="secondary"
          className="mt-8"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-border bg-surface p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-text">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Cooper"
            className={cn(inputClasses, 'mt-2', errors.name && 'border-red-500')}
            {...register('name', { required: 'Enter your name' })}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-text">
            Work email
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@company.com"
            className={cn(inputClasses, 'mt-2', errors.email && 'border-red-500')}
            {...register('email', {
              required: 'Enter your email',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium text-text">
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Acme Inc."
            className={cn(inputClasses, 'mt-2')}
            {...register('company')}
          />
        </div>

        <div>
          <label htmlFor="budget" className="text-sm font-medium text-text">
            Project budget
          </label>
          <select
            id="budget"
            defaultValue=""
            className={cn(inputClasses, 'mt-2')}
            {...register('budget')}
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="<25k">Under $25k</option>
            <option value="25-75k">$25k – $75k</option>
            <option value="75-150k">$75k – $150k</option>
            <option value="150k+">$150k+</option>
            <option value="ongoing">Ongoing / fractional</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-text">
          Tell us about the project
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="What are you building, and what's the timeline?"
          className={cn(inputClasses, 'mt-2 resize-none', errors.message && 'border-red-500')}
          {...register('message', {
            required: 'Tell us a bit about the project',
            minLength: { value: 20, message: 'A few more details would help — 20 characters minimum' },
          })}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div className="mt-7 flex items-center justify-between">
        <p className="text-xs text-text-secondary">
          We reply within one business day.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
