import Link from 'next/link'

import { posts } from "#site/content"
import PostsList from '@/components/posts/post-list'
import TagList from "@/components/tags/tag-list"
import BlogSidebar from "@/components/layout/blog-sidebar"

type BlogPageProps = {
  searchParams: {
    page?: string;
  };
}

export default function Home({ searchParams }: BlogPageProps) {
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>
  }

  const publishedPosts = posts.filter((post) => post.published === true)

  return (
    <section className="relative">
      <BlogSidebar>
        <TagList />
      </BlogSidebar>
      <div className="max-w-2xl mx-auto px-2.5">
        <PostsList posts={publishedPosts} />
      </div>
    </section>
  )
}
