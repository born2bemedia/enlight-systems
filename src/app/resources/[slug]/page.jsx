import { getPost, getSlugs } from "@/src/utils/blogUtils";
import React from "react";
import "@/public/scss/resources.scss";
import Link from "next/link";
import Image from "next/image";
import ChatButton from "../_components/ChatButton";

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
  //console.log(post);
  return (
    <>
      <section className="single-post-top">
        <div className="_container">
          <div className="single-post-top__body">
            <h1>{post.title}</h1>
            <Image
              width={670}
              height={540}
              src={`/images/resources/${post.image}`}
            />
          </div>
        </div>
      </section>
      <section className="single-post-content">
        <div className="_container">
          <div className="single-post-content__body">
            <article dangerouslySetInnerHTML={{ __html: post.body }} />
            <ChatButton />
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleArticle;
