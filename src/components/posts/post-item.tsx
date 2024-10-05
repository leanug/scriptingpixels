import Image from 'next/image'

import { formatDate } from "@/utils"
import Link from "next/link"
import TagList from "../tags/tag-list"

type PostItemProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags: string[]
}

const PostItem: React.FC<PostItemProps> = ({ 
  slug,
  title,
  description,
  date,
  tags
}) => {
  const postUrl = `/${slug}`
  return (
    <li key={slug}>
      <article className="card">
        <div className="flex items-start flex-row gap-4">
          <Image
            src={'/logo.png'}
            alt="Logo"
            width={46}
            height={46}
          />
          <div className="text-start">
            <time 
              dateTime={date}
              className="text-sm"
            >
              {formatDate(date)}
            </time>
            <Link href={postUrl}>
              <h2 className="card-title">{title}</h2>
            </Link>
            <div className="mt-2">
              <TagList tags={tags} />
            </div>
            {description && (
              <Link href={postUrl}>
                <p className="font-light mt-3">{description}</p>
              </Link>
            )}
          </div>
        </div>
      </article>
    </li>
  )
}

export default PostItem