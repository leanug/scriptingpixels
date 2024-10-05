function TagList({ tags }: { tags: string[]}) {
  return (
    <div className="space-x-2.5">
      {tags && tags.map(tag => (
        <span 
        key={tag} 
        className="text-xs uppercase text-primary font-medium"
      >
        {tag}
      </span>
      ))}
    </div>
  )
}

export default TagList