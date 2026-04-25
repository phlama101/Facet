import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(email: string, name: string) {
  return resend.emails.send({
    from: process.env.EMAIL_FROM || 'Facet <hello@facet.earth>',
    to: email,
    subject: 'Welcome to Facet — your Earth science journey begins 🌍',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0d1117;color:#e6edf3;padding:40px;border-radius:12px;">
        <h1 style="color:#06b6d4;margin-bottom:8px;">Welcome to Facet, ${name}!</h1>
        <p style="color:#8b949e;margin-top:0;">Your journey through Earth's deepest secrets starts now.</p>
        <p>You've just joined thousands of learners exploring geology, oceanography, volcanology, and more — all at your own pace.</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" style="display:inline-block;margin-top:24px;padding:12px 28px;background:#06b6d4;color:#0d1117;border-radius:8px;font-weight:600;text-decoration:none;">
          Start Learning →
        </a>
      </div>
    `,
  })
}
