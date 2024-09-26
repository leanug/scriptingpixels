import type { Post } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

