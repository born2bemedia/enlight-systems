import Image from "next/image";
import Link from "next/link";

function SingleArticleFooter({ slug }) {
  const shareUrl = encodeURIComponent(
    `https://enlight.systems/resources/${slug}`
  );

  return (
    <div className="single-post-footer">
      <div className="single-post-footer__share">
        <p>Found this useful? Share it.</p>
        <div className="single-post-footer__social">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            <Image
              src="/images/resources/footer-social-fb.svg"
              width={56}
              height={56}
              alt=""
            />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
          >
            <Image
              src="/images/resources/footer-social-in.svg"
              width={56}
              height={56}
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="single-post-footer__cta-grid">
        <div className="single-post-footer__cta">
          <div className="single-post-footer__cta-top">
            <Image
              src="/images/resources/footer-icon-marketing.svg"
              width={64}
              height={64}
              alt=""
              className="single-post-footer__cta-icon"
            />
            <p>Ready to boost your marketing?</p>
          </div>
          <Link href="/get-started" className="single-post-footer__btn">
            Get started with Enlight
            <Image
              src="/images/resources/footer-icon-plane.svg"
              width={24}
              height={24}
              alt=""
              aria-hidden
            />
          </Link>
        </div>

        <div className="single-post-footer__cta">
          <div className="single-post-footer__cta-top">
            <Image
              src="/images/resources/footer-icon-lifebuoy.svg"
              width={64}
              height={64}
              alt=""
              className="single-post-footer__cta-icon"
            />
            <p>Need assistance?</p>
          </div>
          <Link href="/contact-us" className="single-post-footer__btn">
            Request expert consultation
            <Image
              src="/images/resources/footer-icon-plane.svg"
              width={24}
              height={24}
              alt=""
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleArticleFooter;
