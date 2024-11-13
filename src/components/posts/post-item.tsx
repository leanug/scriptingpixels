import Image from 'next/image'

import { formatDate } from "@/utils"
import Link from "next/link"

type PostItemProps = {
  image: string;
  slug: string;
  title: string;
  description?: string;
  date: string;
}

const PostItem: React.FC<PostItemProps> = ({
  image,
  slug,
  title,
  description,
  date,
}) => {
  const postUrl = `/${slug}`
  return (
    <li key={slug}>
      <Link href={postUrl}>
        <article className="p-6 rounded-2xl hover:bg-base-100 transition ease-in">
          <div className="flex items-center flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="relative w-full sm:w-1/4 flex items-center">
              <Image
                src={`/images/content/${image}`}
                alt={'Image for ' + title}
                width={420}
                height={350}
                sizes="(max-width: 768px) 400px, 100vw"
              />
            </div>
            <div className="text-start sm:w-3/4">
              <time 
                dateTime={date}
                className="text-sm"
              >
                {formatDate(date)}
              </time>
              <h2 className="card-title">{title}</h2>
              {description && (
                <p className="mt-3">{description}</p>
              )}
            </div>
          </div>
        </article>
      </Link>
    </li>
  )
}

export default PostItem