export type Post = {
  author: string
  image: string
  slug: string
  title: string
  date: string
  published: boolean
  featured: boolean
  body: string
  description?: string
  tags?: string[]
  slugAsParams: string
};