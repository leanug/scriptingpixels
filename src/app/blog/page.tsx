import { posts } from "#site/content";
import { Metadata } from "next";
import { getAllTags, sortPosts, sortTagsByCount } from "@/utils";
import PostList from '@/components/posts/post-list'

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

const POSTS_PER_PAGE = 5

type BlogPageProps = {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {  
  /* const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags); */

  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="mx-auto container">
      <h1 className="text-3xl">Articles</h1>
      <p>
        Insights, references, and step-by-step guides on coding, web design, and development.
      </p>
      <PostList posts={posts} />
    </div>
  )
}
