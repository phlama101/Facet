import { Resend } from 'resend'
import * as Sentry from '@sentry/nextjs'

let _resend: Resend | null = null

function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY)
  return _resend
}

export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  const resend = getResend()
  if (!resend) {
    Sentry.captureMessage('sendEmail called but RESEND_API_KEY is not set', 'warning')
    return
  }
  const from = process.env.EMAIL_FROM ?? 'Facet <hello@facet.academy>'
  const { error } = await resend.emails.send({ from, to, subject, html })
  if (error) {
    Sentry.captureException(new Error(`sendEmail failed: ${error.message ?? String(error)}`))
    console.error('[email] send failed', { to, subject, error })
  }
}
