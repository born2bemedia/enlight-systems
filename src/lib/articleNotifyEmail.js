const SITE_URL = "https://enlight.systems";

export function buildArticleNotifyEmail({ title, excerpt, slug }) {
  const articleUrl = `${SITE_URL}/resources/${slug}`;
  const subject = `New article on Enlight: ${title}`;

  const text = [
    "A new article is now available on Enlight Resources.",
    "",
    title,
    excerpt ? excerpt : "",
    "",
    `Read it here: ${articleUrl}`,
    "",
    "You received this email because you subscribed to new article updates on enlight.systems/resources.",
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
  <html>
    <body style="margin:0;padding:0;background:#f0f0f7;font-family:Arial,sans-serif;color:#0f0f0f;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f7;padding:32px 16px;">
        <tr>
          <td align="center">
            <table width="640" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;">
              <tr>
                <td style="padding:40px;">
                  <p style="margin:0 0 16px;font-size:14px;color:#6b6b6b;text-transform:uppercase;letter-spacing:0.04em;">
                    New article
                  </p>
                  <h1 style="margin:0 0 16px;font-size:28px;line-height:1.3;font-weight:600;">
                    ${title}
                  </h1>
                  ${
                    excerpt
                      ? `<p style="margin:0 0 24px;font-size:16px;line-height:1.5;color:#2a2a2a;">${excerpt}</p>`
                      : ""
                  }
                  <a href="${articleUrl}" style="display:inline-block;background:#97d80f;color:#0f0f0f;text-decoration:none;font-size:16px;font-weight:700;padding:14px 24px;border-radius:999px;">
                    Read article
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding:24px 40px;background:#0f0f0f;color:#f0f0f7;font-size:14px;line-height:1.5;">
                  You subscribed to Enlight Resources updates.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

  return { subject, text, html, articleUrl };
}
