import { posts } from "#site/content"
import { MDXContent } from "@/components/mdx-components"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import '@/styles/mdx.css'

import { siteConfig } from "@/config/site"
import { formatDate } from "@/utils"

type PostPageProps = {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = posts.find((post) => post.slugAsParams === slug)

  return post
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
    twitter: {
      card: "summary_large_image", // or "summary" if you want a smaller image
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
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
      <div className="container max-w-3xl mx-auto px-2.5 lg:px-0">
        <article>
          <div className="mb-3">
            Published on 
            <time 
              dateTime={post.date}
              className="text-sm"
            >
              {formatDate(post.date)}
            </time> by {post.author}
          </div>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-6 lg:mb-12">
            {post?.title}
          </h1>
          {post?.description ? (
            <p className="text-xl mt-0 mb-10 text-muted-foreground">
              {post?.description}
            </p>
          ) : null}
          <MDXContent code={post?.body || ''} />
        </article>
      </div>
    </section>
  )
}