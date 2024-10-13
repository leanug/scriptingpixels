import Link from 'next/link';

import PostsList from '@/components/posts/post-list';
import { posts } from "#site/content"
import { sortPosts } from '@/utils'
import { Post } from "@/types";

export default function Home() {
  const latestPosts: Post[] = sortPosts(posts).slice(0, 5);
  
  return (
    <section>
      <div className="max-w-3xl mx-auto px-2.5">
        <div className="space-y-3 text-balance">
          <h1 className="text-xl md:text-5xl mt-2.5 font-semibold">
            {/* Code, One Step at a Time! */}
            Coming soon
          </h1>
          {/* <p className="text-2xl font-medium">
            Get actionable insights into coding, broken down by the numbers.
          </p> */}
        </div>
        <div className="mt-8">
          {/* <h2 className="text-xl mb-2.5">Latest posts</h2>
          <PostsList posts={latestPosts} />
          <div className="w-full text-end mt-6">
            <Link className="btn btn-ghost text-primary" href="/blog">
              All posts &rarr;
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  )
}
