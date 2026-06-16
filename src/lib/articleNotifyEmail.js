const SITE_URL = "https://enlight.systems";
const BRAND_BLUE = "#333CEF";
const BRAND_DARK = "#0F0F0F";
const BRAND_LIGHT = "#F0F0F7";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildArticleNotifyEmail({ title, slug }) {
  const safeTitle = escapeHtml(title);
  const articleUrl = `${SITE_URL}/resources/${slug}`;
  const subject = "Enlight.Systems: The Article You Subscribed For Is Now Live";

  const text = [
    "Hello!",
    "",
    "Thank you for subscribing to get notified when our article goes live!",
    "",
    "We're happy to inform you that the article is now available:",
    "",
    title,
    articleUrl,
    "",
    "If you need help with marketing optimization platform, reach out at info@enlight.business.",
    "",
    "Thank you for being part of our community—we look forward to your feedback!",
    "",
    "Best regards,",
    "Enlight Team",
    "",
    "info@enlight.business",
    "+44 745 814 94 08",
    "https://www.facebook.com/enlight.facebook",
    "https://www.linkedin.com/company/enlight-linkedin/",
  ].join("\n");

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${safeTitle}</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND_LIGHT};font-family:'Epilogue',Arial,Helvetica,sans-serif;color:${BRAND_DARK};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND_LIGHT};padding:0;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;background:#ffffff;">
            <tr>
              <td style="padding:0;line-height:0;font-size:0;">
                <img
                  src="${SITE_URL}/images/email-head.png"
                  width="640"
                  alt="Enlight"
                  style="display:block;width:100%;max-width:640px;height:auto;border:0;"
                />
              </td>
            </tr>
            <tr>
              <td style="padding:40px;background:#ffffff;">
                <p style="margin:0 0 16px;font-size:16px;line-height:1.4;font-weight:700;color:${BRAND_DARK};">
                  Hello!
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.4;font-weight:400;color:${BRAND_DARK};">
                  Thank you for subscribing to get notified when our article goes live!
                </p>
                <p style="margin:0 0 8px;font-size:16px;line-height:1.4;font-weight:400;color:${BRAND_DARK};">
                  We&apos;re happy to inform you that the article is now available:
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.4;">
                  <a
                    href="${articleUrl}"
                    style="color:${BRAND_BLUE};font-weight:700;text-decoration:none;"
                  >${safeTitle}</a>
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.4;font-weight:400;color:${BRAND_DARK};">
                  If you need help with marketing optimization platform, reach out at
                  <a href="mailto:info@enlight.business" style="color:${BRAND_BLUE};font-weight:400;text-decoration:underline;">info@enlight.business</a>.
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.4;font-weight:400;color:${BRAND_DARK};">
                  Thank you for being part of our community&mdash;we look forward to your feedback!
                </p>
                <p style="margin:0;font-size:16px;line-height:1.4;font-weight:400;color:${BRAND_DARK};">
                  Best regards,<br />
                  <strong style="font-weight:700;">Enlight Team</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 40px;background:${BRAND_DARK};">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td valign="top" style="width:55%;padding-right:16px;">
                      <img
                        src="${SITE_URL}/logo.svg"
                        width="120"
                        height="32"
                        alt="Enlight"
                        style="display:block;width:120px;height:auto;border:0;margin-bottom:12px;"
                      />
                      <p style="margin:0;font-size:14px;line-height:1.4;font-weight:400;color:#ffffff;">
                        360&deg; visibility for crypto<br />and fintech marketing
                      </p>
                    </td>
                    <td valign="top" align="right" style="width:45%;">
                      <table role="presentation" cellpadding="0" cellspacing="0" align="right">
                        <tr>
                          <td style="padding:0 8px 8px 0;vertical-align:middle;font-size:16px;line-height:1;color:#97d80f;">
                            &#9993;
                          </td>
                          <td style="padding:0 0 8px 0;vertical-align:middle;">
                            <a href="mailto:info@enlight.business" style="color:#ffffff;font-size:14px;line-height:1.4;text-decoration:none;white-space:nowrap;">
                              info@enlight.business
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 8px 12px 0;vertical-align:middle;font-size:16px;line-height:1;color:#97d80f;">
                            &#9742;
                          </td>
                          <td style="padding:0 0 12px 0;vertical-align:middle;">
                            <a href="tel:+447458149408" style="color:#ffffff;font-size:14px;line-height:1.4;text-decoration:none;white-space:nowrap;">
                              +44 745 814 94 08
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" align="right" style="padding:0;">
                            <a href="https://www.facebook.com/enlight.facebook" style="display:inline-block;margin-right:8px;text-decoration:none;">
                              <img src="${SITE_URL}/images/resources/footer-social-fb.svg" width="40" height="40" alt="Facebook" style="display:block;border:0;" />
                            </a>
                            <a href="https://www.linkedin.com/company/enlight-linkedin/" style="display:inline-block;text-decoration:none;">
                              <img src="${SITE_URL}/images/resources/footer-social-in.svg" width="40" height="40" alt="LinkedIn" style="display:block;border:0;" />
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();

  return { subject, text, html, articleUrl };
}
