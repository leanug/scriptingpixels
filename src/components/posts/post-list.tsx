import React from 'react';
import PostItem from '@/components/posts/post-item'
import { useMemo } from 'react';

// Define the type for a post
type Post = {
  image: string
  slug: string
  title: string
  description?: string
  date: string
  tags?: string[]
};

// Define the type for the component props
type PostsListProps = {
  posts: Post[];
};

// Define the PostsList component
const PostsList: React.FC<PostsListProps> = ({ posts }) => {
// Memoize the sorted posts to prevent re-sorting on every render
const sortedPosts = useMemo(() => {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}, [posts]);

  return (
    <ul className="space-y-6">
      {sortedPosts.map(({ image, slug, title, description, date }) => (
        <PostItem
          key={slug}
          image={image}
          slug={slug}
          title={title}
          description={description}
          date={date}
        />
      ))}
    </ul>
  )
}

export default PostsList;
