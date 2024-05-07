"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";
import { useState } from "react";

function ContactBlock() {
  return (
    <>
      <section className="contact-page-block">
        <div className="_container">
          <RevealWrapper origin="bottom" delay={0}>
            <h1>
              We are here <br />
              to help you
            </h1>
          </RevealWrapper>
          <div className="contact-page-block__body">
            <div>
              <h3>Email us:</h3>
              <a className="contactLink" href="mailto:info@enlight.systems">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_293_6088)">
                    <path
                      d="M20.2742 7.00931L12.5023 13.8579L4.72862 7.00921C4.41909 6.73652 3.94728 6.76648 3.67468 7.07582C3.40219 7.38525 3.43186 7.85706 3.74139 8.12976L12.0087 15.4135C12.1498 15.5377 12.3261 15.5998 12.5024 15.5998C12.6786 15.5998 12.855 15.5377 12.9961 15.4134L21.2617 8.12966C21.5711 7.85706 21.6008 7.38515 21.3282 7.07572C21.0554 6.76658 20.5837 6.73672 20.2742 7.00931Z"
                      fill="#97D80F"
                    />
                    <path
                      d="M22.2599 3.83594H2.7401C1.50496 3.83594 0.5 4.8408 0.5 6.07603V17.9239C0.5 19.1591 1.50496 20.164 2.7401 20.164H22.2599C23.495 20.164 24.5 19.1591 24.5 17.9239V6.07603C24.5 4.84089 23.495 3.83594 22.2599 3.83594ZM23.0066 17.9239C23.0066 18.3355 22.6717 18.6706 22.2599 18.6706H2.7401C2.32832 18.6706 1.9934 18.3355 1.9934 17.9239V6.07603C1.9934 5.66435 2.32832 5.32934 2.7401 5.32934H22.2599C22.6717 5.32934 23.0066 5.66435 23.0066 6.07603V17.9239Z"
                      fill="#97D80F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_293_6088">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>info@enlight.systems</span>
              </a>
            </div>
            <div>
              <h3>Call us:</h3>
              <a className="contactLink" href="tel:+44 745 814 94 08">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.5233 3.14396C18.4957 1.11641 15.7998 -0.000113402 12.9326 8.63884e-09C12.4627 8.63884e-09 12.082 0.380832 12.082 0.850577C12.082 1.32032 12.4629 1.70115 12.9326 1.70115C15.3455 1.70104 17.6141 2.64065 19.3203 4.3469C21.0267 6.05316 21.9663 8.32182 21.9662 10.7349C21.9662 11.2046 22.3469 11.5854 22.8168 11.5854C23.2865 11.5854 23.6673 11.2046 23.6673 10.735C23.6675 7.86739 22.5509 5.17151 20.5233 3.14396Z"
                    fill="#97D80F"
                  />
                  <path
                    d="M17.0243 10.7352C17.0243 11.2049 17.4052 11.5857 17.875 11.5856C18.3448 11.5856 18.7255 11.2048 18.7255 10.735C18.7253 7.54141 16.1266 4.94284 12.9327 4.94238C12.9326 4.94238 12.9328 4.94238 12.9327 4.94238C12.463 4.94238 12.0821 5.3231 12.082 5.79285C12.082 6.26259 12.4627 6.64342 12.9325 6.64354C15.1886 6.64388 17.0241 8.47931 17.0243 10.7352Z"
                    fill="#97D80F"
                  />
                  <path
                    d="M15.1418 15.0716C13.8453 15.0045 13.1848 15.9687 12.868 16.4319C12.6027 16.8196 12.7021 17.3489 13.0898 17.6142C13.4776 17.8794 14.0069 17.7801 14.2721 17.3923C14.6464 16.8451 14.8159 16.759 15.0459 16.7699C15.7821 16.8565 18.6814 18.9811 18.9717 19.6454C19.0446 19.8411 19.0418 20.0329 18.9637 20.2661C18.6593 21.1696 18.1554 21.8044 17.5063 22.102C16.8895 22.3848 16.1334 22.3591 15.3202 22.0282C12.2834 20.7904 9.63025 19.0631 7.43463 16.894C7.43372 16.8931 7.43281 16.8923 7.43202 16.8914C5.26747 14.6979 3.54329 12.0482 2.30758 9.01607C1.97653 8.20212 1.9509 7.4459 2.23363 6.82929C2.53122 6.18013 3.16609 5.67625 4.06872 5.3722C4.3028 5.29372 4.49424 5.29122 4.68806 5.36335C5.3548 5.6547 7.47931 8.55392 7.56505 9.28179C7.5773 9.5204 7.49054 9.68984 6.94379 10.0634C6.55592 10.3283 6.45624 10.8576 6.72128 11.2455C6.9862 11.6334 7.51538 11.7329 7.90335 11.468C8.36675 11.1516 9.33074 10.4929 9.26382 9.19197C9.19011 7.83309 6.54674 4.23446 5.28369 3.77005C4.72197 3.56069 4.1311 3.55706 3.52685 3.75984C2.16729 4.21768 1.18538 5.03401 0.687283 6.12048C0.204155 7.17451 0.219465 8.39742 0.73208 9.65763C2.05456 12.9025 3.90485 15.7418 6.23146 18.0967C6.23713 18.1025 6.24291 18.1082 6.24881 18.1137C8.60207 20.436 11.438 22.2829 14.6786 23.6038C15.3275 23.8677 15.9666 23.9998 16.5778 23.9998C17.1532 23.9998 17.7042 23.8828 18.2152 23.6485C19.3018 23.1505 20.118 22.1687 20.5762 20.8082C20.7785 20.2051 20.7752 19.6145 20.5674 19.0554C20.1014 17.7889 16.5028 15.1456 15.1418 15.0716Z"
                    fill="#97D80F"
                  />
                </svg>
                <span>+44 745 814 94 08</span>
              </a>
            </div>
            <div>
              <h3>Submit quick request:</h3>
              <Link href="/quick-contact" className="button">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.636 15.6699L20.352 10.5199C21.852 6.02194 22.602 3.77294 21.414 2.58594C20.227 1.39894 17.978 2.14794 13.479 3.64794L8.32997 5.36394C4.69997 6.57394 2.88497 7.17994 2.36997 8.06694C2.12908 8.48152 2.0022 8.95246 2.0022 9.43194C2.0022 9.91142 2.12908 10.3824 2.36997 10.7969C2.88497 11.6849 4.69997 12.2899 8.32997 13.5009C8.77997 13.6509 9.28697 13.5429 9.62397 13.2099L15.13 7.75494C15.2023 7.67634 15.2899 7.61324 15.3874 7.56945C15.4848 7.52566 15.5901 7.5021 15.697 7.50019C15.8038 7.49827 15.9099 7.51805 16.0089 7.55831C16.1078 7.59858 16.1976 7.6585 16.2727 7.73446C16.3479 7.81041 16.4068 7.90082 16.446 8.00021C16.4852 8.0996 16.5039 8.20591 16.5008 8.31271C16.4977 8.41951 16.473 8.52457 16.4282 8.62156C16.3834 8.71854 16.3193 8.80542 16.24 8.87694L10.824 14.2429C10.6433 14.4276 10.5174 14.6587 10.4602 14.9106C10.403 15.1625 10.4168 15.4254 10.5 15.6699C11.71 19.2999 12.316 21.1159 13.203 21.6319C13.6178 21.8727 14.0889 21.9995 14.5685 21.9995C15.0481 21.9995 15.5192 21.8727 15.934 21.6319C16.821 21.1159 17.425 19.3009 18.636 15.6699Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                  Quick Contact
                </span>
              </Link>
            </div>
            <div className="half">
              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.9983 0C6.8987 0 2.75 4.14925 2.75 9.2494C2.75 12.8937 4.27572 16.58 7.16224 19.9099C9.31817 22.397 11.4548 23.8061 11.5447 23.8649C11.6825 23.955 11.8404 24 11.9984 24C12.1563 24 12.3142 23.955 12.4521 23.8649C12.5419 23.8061 14.6789 22.397 16.8348 19.91C19.7215 16.58 21.2474 12.8937 21.2474 9.2494C21.2473 4.14925 17.0981 0 11.9983 0ZM11.9983 22.1529C10.2974 20.8854 4.40815 16.0074 4.40815 9.2494C4.40815 5.06356 7.81301 1.65815 11.9983 1.65815C16.1839 1.65815 19.5891 5.06356 19.5891 9.2494C19.5891 16.0074 13.6993 20.8854 11.9983 22.1529Z"
                      fill="#97D80F"
                    />
                    <path
                      d="M11.9988 5.57666C9.97478 5.57666 8.32812 7.22343 8.32812 9.2477C8.32812 11.2714 9.97478 12.9179 11.9988 12.9179C14.0229 12.9179 15.6694 11.2714 15.6694 9.2477C15.6694 7.22354 14.0228 5.57666 11.9988 5.57666ZM11.9988 11.2597C10.8891 11.2597 9.98628 10.3571 9.98628 9.2477C9.98628 8.13773 10.8891 7.23481 11.9988 7.23481C13.1085 7.23481 14.0113 8.13773 14.0113 9.2477C14.0113 10.3571 13.1085 11.2597 11.9988 11.2597Z"
                      fill="#97D80F"
                    />
                  </svg>
                  <span>Registered address:</span>
                </h4>
                <p>
                  Rooms 1703-1704, 17/F, Tung Chiu Commercial Centre, 193
                  Lockhart Road, Wanchai, Hong Kong
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5769611875894!2d114.17279724770418!3d22.27855761073727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005b91e96cbb%3A0x2f4771b67527c85e!2sTung%20Chiu%20Commercial%20Centre!5e0!3m2!1sen!2sua!4v1715075061688!5m2!1sen!2sua"
                width="600"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="half">
              <div>
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.9983 0C6.8987 0 2.75 4.14925 2.75 9.2494C2.75 12.8937 4.27572 16.58 7.16224 19.9099C9.31817 22.397 11.4548 23.8061 11.5447 23.8649C11.6825 23.955 11.8404 24 11.9984 24C12.1563 24 12.3142 23.955 12.4521 23.8649C12.5419 23.8061 14.6789 22.397 16.8348 19.91C19.7215 16.58 21.2474 12.8937 21.2474 9.2494C21.2473 4.14925 17.0981 0 11.9983 0ZM11.9983 22.1529C10.2974 20.8854 4.40815 16.0074 4.40815 9.2494C4.40815 5.06356 7.81301 1.65815 11.9983 1.65815C16.1839 1.65815 19.5891 5.06356 19.5891 9.2494C19.5891 16.0074 13.6993 20.8854 11.9983 22.1529Z"
                      fill="#97D80F"
                    />
                    <path
                      d="M11.9988 5.57666C9.97478 5.57666 8.32812 7.22343 8.32812 9.2477C8.32812 11.2714 9.97478 12.9179 11.9988 12.9179C14.0229 12.9179 15.6694 11.2714 15.6694 9.2477C15.6694 7.22354 14.0228 5.57666 11.9988 5.57666ZM11.9988 11.2597C10.8891 11.2597 9.98628 10.3571 9.98628 9.2477C9.98628 8.13773 10.8891 7.23481 11.9988 7.23481C13.1085 7.23481 14.0113 8.13773 14.0113 9.2477C14.0113 10.3571 13.1085 11.2597 11.9988 11.2597Z"
                      fill="#97D80F"
                    />
                  </svg>
                  <span>Operational address:</span>
                </h4>
                <p>
                  138 Gloucester Rd, Wan Chai, Hong Kong
                  <br />
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5595350530243!2d114.17433738419213!3d22.27934258552446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005bcddccfe3%3A0x1e4dc41e1016e82e!2sAllied%20Kajima%20Building%2C%20138%20Gloucester%20Rd%2C%20Wan%20Chai%2C%20Hong%20Kong!5e0!3m2!1sen!2sua!4v1715075163793!5m2!1sen!2sua"
                width="600"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactBlock;