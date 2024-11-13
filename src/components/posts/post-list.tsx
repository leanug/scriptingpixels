import React from 'react';
import PostItem from '@/components/posts/post-item'

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
  return (
    <ul className="space-y-6">
      {posts.map(({ image, slug, title, description, date, tags }) => (
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
