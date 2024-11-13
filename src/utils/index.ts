import type { Post } from "@/types"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { slug } from 'github-slugger'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | number): string {
  return new Date(date).toLocaleDateString()
}

export function sortPosts(posts: Array<Post>): Array<Post> {
  return [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

type TagCount = {
  tag: string;
  count: number;
};

export function getAllTags(posts: Array<Post>): TagCount[] {
  const tags: Record<string, number> = {};

  posts.forEach(post => {
    if (post.published) {
      post.tags?.forEach(tag => {
        tags[tag] = (tags[tag] ?? 0) + 1; // Count occurrences of each tag
      });
    }
  });

  // Convert the record to an array of TagCount objects
  return Object.entries(tags).map(([tag, count]) => ({ tag, count }));
}

export function getPostsByTagSlug(posts: Array<Post>, tag: string) {  
  return posts.filter(post => {
    if (!post.tags) return false
    const slugifiedTags = post.tags.map(tag => slug(tag))
    return slugifiedTags.includes(tag)
  })
}

export function formatTag(tag: string): string {
  return tag
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}