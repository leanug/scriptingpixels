import { formatDate } from "@/utils";
import Link from "next/link";

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
  return (
    <li key={slug}>
      <Link href={`/${slug}`}>
        <article className="card w-full border border-base-300 rounded-lg">
          <div className="card-body text-start">
            <time 
              dateTime={date}
              className="text-sm font-light"
            >
              {formatDate(date)}
            </time>
            <h2 className="card-title">{title}</h2>
            <div className="space-x-2.5">
              {tags && tags.map(tag => (
                <span 
                key={tag} 
                className="text-sm uppercase text-primary font-medium"
              >
                {tag}
              </span>
              ))}
            </div>
            {description && <p className="font-light mt-4">{description}</p>}
          </div>
        </article>
      </Link>
    </li>
  )
}

export default PostItem