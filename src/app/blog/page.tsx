import { posts } from "#site/content"
import { Metadata } from "next"
import PostsList from '@/components/posts/post-list'
import TagList from "@/components/tags/tag-list"
import BlogSidebar from "@/components/layout/blog-sidebar"

export const metadata: Metadata = {
  title: "Blog - ScriptingPixels",
  description: "ScriptingPixels blog about React, Webflow and web design.",
};

const POSTS_PER_PAGE = 5

type BlogPageProps = {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
 /*  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  ); */

  /* const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags); */

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
