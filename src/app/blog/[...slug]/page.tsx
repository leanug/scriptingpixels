import Image from "next/image";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components"
import { Metadata } from "next";
import { notFound } from "next/navigation";
import '@/styles/mdx.css'

import { siteConfig } from "@/config/site";

type PostPageProps = {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author.name },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <section>
      <div className="container max-w-4xl mx-auto">
        <article>
          <Image
            src={`/images/content/${post?.image}`}
            alt={'Image for ' + post?.title}
            width={72}
            height={72}
            className="mb-6 rounded-lg"
          />
          <h1 className="text-xl md:text-4xl lg:text-6xl font-bold mb-6 lg:mb-12">
            {post?.title}
          </h1>
          {post?.description ? (
            <p className="text-xl mt-0 text-muted-foreground">{post?.description}</p>
          ) : null}
          <MDXContent code={post?.body || ''} />
        </article>
      </div>
    </section>
  )
}