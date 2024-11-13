import type { Metadata } from 'next'
import { posts } from "#site/content"
import TagList from '@/components/tags/tag-list'
import PostsList from '@/components/posts/post-list'
import { getPostsByTagSlug, formatTag } from '@/utils'
import BlogSidebar from '@/components/layout/blog-sidebar'

type Props = {
  params: Promise<{ tag: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // Read route params
  const tag = (await params).tag
  const formatedTag = formatTag(tag)
  // Dynamic metadata based on tag
  return {
    title: `Posts tagged with ${formatedTag} - ScriptingPixels`,
    description: `
      Explore posts tagged with ${formatedTag} on ScriptingPixels, 
      covering topics like React, Webflow, and web design.
    `
  }
}

async function TagsPage({ params }: Props) {
  const tag = (await params).tag
  
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>
  }

   // Filter posts by the selected tag
  const filteredPosts = getPostsByTagSlug(posts, tag)
  const publishedPosts = filteredPosts.filter((post) => post.published === true)

  return (
    <section className="relative">
      <BlogSidebar>
        <TagList selectedTag={tag} />
      </BlogSidebar>
      <div className="max-w-2xl mx-auto px-2.5">
        <PostsList posts={publishedPosts} />
      </div>
    </section>
  )
}

export default TagsPage