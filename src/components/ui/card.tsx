import Link from 'next/link'

interface CardProps {
  title: string
  text: string
  badge: string[]
  url: string
  link: string
}

export const Card: React.FC<CardProps> = ({
  title,
  text,
  badge,
  url,
  link
}) => {
  const CardElement = link === '' ? 'a' : Link

  return (
    <CardElement href={link || url} className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end mt-2.5">
          {badge &&
            badge.map((item, index) => (
              <div key={index} className="badge badge-outline">
                {item}
              </div>
            ))}
        </div>
      </div>
    </CardElement>
  )
}
