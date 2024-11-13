import React from 'react'
import { FaBlog } from 'react-icons/fa';

type BlogSidebarProps = {
  children: React.ReactNode
};

const BlogSidebar: React.FC<BlogSidebarProps> = ({ children }) => {
  return (
    <aside className="lg:absolute left-4 top-0">
      <div className="text-balance mb-4 ml-3 p-2.5">
        <h1 className="text-xl md:text-2xl mt-2.5 font-bold mb-1.5 flex items-center gap-3">
          <FaBlog size={20} /> Blog
        </h1>
        <span>Ideas and insights</span>
      </div>
      {children}
    </aside>
  );
};

export default BlogSidebar
