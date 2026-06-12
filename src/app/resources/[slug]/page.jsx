import { getPost, getSlugs } from "@/src/utils/blogUtils";
import articleViewSeeds from "@/data/article-views.json";
import React from "react";
import "@/public/scss/resources.scss";
import Link from "next/link";
import Image from "next/image";
import ArticleViews from "../_components/ArticleViews";
import ChatButton from "../_components/ChatButton";
import SingleArticleAside from "../_components/SingleArticleAside";
import SingleArticleFooter from "../_components/SingleArticleFooter";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      images: "https://enlight.systems/images/meta.png",
    },
  };
}

async function SingleArticle({ params: { slug } }) {
  const post = await getPost(slug);
  const hasToc = post.toc?.length > 0;

  return (
    <>
      <section className="single-post-top">
        <div className="_container">
          <div className="single-post-top__body">
            <div className="single-post-top__gradient" aria-hidden="true" />
            <div className="single-post-top__overlay" aria-hidden="true" />

            <div className="single-post-top__inner">
              <div className="single-post-top__text">
                <h1>{post.title}</h1>
                <div className="single-post-top__meta">
                  {post.date && (
                    <div className="single-post-top__meta-row">
                      <Image
                        src="/images/resources/icon-calendar-dots.svg"
                        width={24}
                        height={24}
                        alt=""
                        aria-hidden
                      />
                      <span>{post.date}</span>
                    </div>
                  )}
                  <ArticleViews
                    slug={slug}
                    initialViews={articleViewSeeds[slug] ?? 0}
                  />
                </div>
              </div>
            </div>

            <div className="single-post-top__art" aria-hidden="true">
              <Image
                width={post.heroWidth}
                height={post.heroHeight}
                src={`/images/resources/${post.image}`}
                alt=""
                priority
                className="single-post-top__art-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="single-post-content">
        <div className="_container">
          <div className="single-post-content__panel">
            <nav className="single-post-breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">&gt;</span>
              <Link href="/resources">Resources</Link>
              <span aria-hidden="true">&gt;</span>
              <span>{post.title}</span>
            </nav>

            <div
              className={`single-post-content__body${
                hasToc ? " single-post-content__body--with-toc" : ""
              }`}
            >
              {hasToc && (
                <div className="single-post-aside-wrap">
                  <SingleArticleAside toc={post.toc} />
                </div>
              )}
              <div className="single-post-content__main">
                <article dangerouslySetInnerHTML={{ __html: post.body }} />
                {!post.body.includes("post-checklist") && <ChatButton />}
              </div>
            </div>

            <SingleArticleFooter slug={slug} />
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleArticle;
