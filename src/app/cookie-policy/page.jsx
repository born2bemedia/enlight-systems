import React from "react";
import "@/public/scss/policy.scss";

export const metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy",
  openGraph: {
    title: "Cookie Policy",
    description: "Cookie Policy",
    images: "https://enlight.systems/images/meta.png",
  },
};

function PrivacyPage() {
  return (
    <>
      <section className="policy-top">
        <div className="_container">
          <div className="policy-top__body">
            <h1>Cookie Policy</h1>
          </div>
        </div>
      </section>
      <section className="policy-content">
        <div className="_container">
          <div className="policy-content__body">
            <article>
              <p>
                Enlight Systems ("we" or "us") uses cookies on our website. By
                using our website, you consent to the use of cookies by this
                Cookie Policy.
              </p>
              <h2>
                <strong>What are cookies?</strong>
              </h2>
              <p>
                Cookies are small text files placed on your computer or mobile
                device by a website when you visit certain parts of the website
                and/or use certain website features. Cookies allow a website to
                recognize your device and remember if you have visited the
                website before.
              </p>
              <h2>
                <strong>Types of cookies used</strong>
              </h2>
              <ol>
                <li>
                  <strong>Session cookies:</strong> These are temporary cookies
                  deleted from your device after you leave the website.
                </li>
                <li>
                  <strong>Persistent cookies:</strong> These cookies remain on
                  your device until you expire or delete them.
                </li>
              </ol>
              <h2>
                <strong>Information we collect automatically:</strong>
              </h2>
              <ol>
                <li>
                  <strong>
                    Information from browsers, devices, and servers:
                  </strong>{" "}
                  When you visit our websites, we collect information that web
                  browsers, mobile devices, and servers provide, such as the
                  internet protocol (IP) address, browser type, language
                  preference, time zone, referring URL, date and time of access,
                  operating system, mobile device manufacturer, and mobile
                  network information. We include this information in our log
                  files to better understand website visitors.
                </li>
                <li>
                  <strong>
                    Information from cookies and tracking technologies:
                  </strong>{" "}
                  We use temporary and permanent cookies to identify users of
                  our services and enhance user experience. We embed unique
                  identifiers in our downloadable products to track usage.
                  Additionally, we use cookies, beacons, tags, scripts, and
                  similar technologies to identify visitors, track website
                  navigation, gather demographic information, understand email
                  campaign effectiveness, and engage with visitors and users by
                  tracking activities on our websites. We primarily use
                  first-party cookies and do not use third-party cookies or
                  other third-party tracking technologies for non-essential or
                  intrusive tracking on our websites.
                </li>
              </ol>
              <h2>
                <strong>How to control cookies</strong>
              </h2>
              <p>
                You can control and/or delete cookies as you wish. You can
                delete all cookies already on your computer and set most
                browsers to prevent them from being placed. If you do this,
                however, you may have to manually adjust some preferences every
                time you visit a site, and some services and functionalities may
                not work.
              </p>
              <h2>
                <strong>Changes to this Cookie Policy</strong>
              </h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
              <h2>
                <strong>Contact Us</strong>
              </h2>
              <p>
                If you have any questions or concerns about our Cookie Policy,
                please contact us at:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a href="mailto:info@enlight.systems">info@enlight.systems</a>
                </li>
              </ul>
              <p>We are here to help.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPage;
