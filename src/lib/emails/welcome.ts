export function welcomeEmail(name: string): { subject: string; html: string } {
  const subject = 'Welcome to Facet — your first lesson is waiting'

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#0E0F14;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0E0F14;padding:40px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

        <!-- Logo -->
        <tr>
          <td style="padding-bottom:32px;">
            <span style="font-size:18px;font-weight:700;color:#EDEEF2;letter-spacing:-0.02em;">Facet</span>
            <span style="font-size:11px;color:#6B6F7C;margin-left:8px;letter-spacing:0.1em;text-transform:uppercase;">Earth Sciences</span>
          </td>
        </tr>

        <!-- Hero -->
        <tr>
          <td style="background:#16181F;border:1px solid #2A2D38;border-radius:4px;padding:36px 32px;">
            <p style="margin:0 0 6px;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#7AD7F0;">Welcome</p>
            <h1 style="margin:0 0 16px;font-size:26px;font-weight:700;color:#EDEEF2;line-height:1.2;">
              Good to have you, ${name}.
            </h1>
            <p style="margin:0 0 28px;font-size:14px;line-height:1.7;color:#9CA0AE;">
              Facet is a specialist earth-sciences platform — geology, oceanography, volcanology,
              climate, and more, built lesson by lesson from first principles.
              Your free account gives you Chapter&nbsp;1 of every learning path.
            </p>

            <!-- Start paths -->
            <p style="margin:0 0 12px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#6B6F7C;">
              Three good places to start
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding:10px 14px;background:#1E2028;border:1px solid #2A2D38;border-radius:4px;margin-bottom:8px;">
                  <a href="https://facet.academy/learn/geol-101-1-1" style="text-decoration:none;display:block;">
                    <span style="font-size:10px;color:#7FC29B;letter-spacing:0.15em;text-transform:uppercase;display:block;margin-bottom:3px;">Earth Foundations</span>
                    <span style="font-size:13px;color:#EDEEF2;font-weight:500;">Earth's Interior</span>
                  </a>
                </td>
              </tr>
              <tr><td style="height:6px;"></td></tr>
              <tr>
                <td style="padding:10px 14px;background:#1E2028;border:1px solid #2A2D38;border-radius:4px;">
                  <a href="https://facet.academy/learn/volc-101-1-1-1" style="text-decoration:none;display:block;">
                    <span style="font-size:10px;color:#F28C76;letter-spacing:0.15em;text-transform:uppercase;display:block;margin-bottom:3px;">Volcanoes</span>
                    <span style="font-size:13px;color:#EDEEF2;font-weight:500;">Magma &amp; Volcanism</span>
                  </a>
                </td>
              </tr>
              <tr><td style="height:6px;"></td></tr>
              <tr>
                <td style="padding:10px 14px;background:#1E2028;border:1px solid #2A2D38;border-radius:4px;">
                  <a href="https://facet.academy/learn/ocea-101-1-1-1" style="text-decoration:none;display:block;">
                    <span style="font-size:10px;color:#7AD7F0;letter-spacing:0.15em;text-transform:uppercase;display:block;margin-bottom:3px;">Ocean Systems</span>
                    <span style="font-size:13px;color:#EDEEF2;font-weight:500;">The Ocean Basin</span>
                  </a>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#7AD7F0;border-radius:4px;">
                  <a href="https://facet.academy/learn"
                     style="display:inline-block;padding:12px 28px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#0E0F14;text-decoration:none;">
                    Start Learning →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding-top:24px;">
            <p style="margin:0;font-size:11px;color:#6B6F7C;line-height:1.6;">
              You're receiving this because you created a Facet account.
              Questions? Reply to this email and we'll get back to you.
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`

  return { subject, html }
}
