import React from 'react';
import PostItem from '@/components/posts/post-item'

// Define the type for a post
type Post = {
  slug: string;
  title: string;
  description?: string;
  date: string;
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
      {posts.map(({ slug, title, description, date, tags }) => (
        <PostItem 
          key={slug}
          slug={slug}
          title={title}
          description={description}
          date={date}
          tags={tags ?? []}
        />
      ))}
    </ul>
  );
};

export default PostsList;
