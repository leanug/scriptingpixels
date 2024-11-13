import Link from 'next/link';
import { slug } from 'github-slugger';
import { posts } from "#site/content";
import { getAllTags } from '@/utils';

type TagListProps = {
  selectedTag?: string; // Optional prop for the currently selected tag
};

const TagList: React.FC<TagListProps> = ({ selectedTag }) => {
  const tagsWithCounts = getAllTags(posts) // Get tags with their counts
  
  return (
    <>
      <h3 className="text-xl text-neutral-content font-bold ml-3 p-2.5">
        Tags
      </h3>
      <ul className="
        menu lg:menu-vertical menu-horizontal
        ">
        {tagsWithCounts.map(({ tag }) => { // Destructure to get the tag
          const formattedSlug = slug(tag);
          const isSelected = formattedSlug === selectedTag; // Check if the tag is the selected one
          const tagClass = isSelected ? 'btn btn-neutral lg:btn-wide justify-between' : 'btn lg:btn-wide justify-between btn-ghost'; // Add your selected class

          return (
            <li key={formattedSlug}>
              <Link href={`/blog/tag/${formattedSlug}`} className={tagClass}>
                {tag}
                {/* <div className="badge">{count}</div> */}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default TagList
