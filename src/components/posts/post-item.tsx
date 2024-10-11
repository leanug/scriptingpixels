import Image from 'next/image'

import { formatDate } from "@/utils"
import Link from "next/link"
import TagList from "../tags/tag-list"

type PostItemProps = {
  image: string;
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags: string[]
}

const PostItem: React.FC<PostItemProps> = ({ 
  image,
  slug,
  title,
  description,
  date,
  tags
}) => {
  const postUrl = `/${slug}`
  console.log('image', image);
  
  return (
    <li key={slug}>
      <article className="card">
        <div className="flex items-start flex-col sm:flex-row gap-4">
          <Image
            src={`/images/content/${image}`}
            alt={'Image for ' + title}
            width={64}
            height={64}
            className="rounded-lg"
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