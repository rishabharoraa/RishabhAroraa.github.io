const Card = ({
  image,
  heading,
  content,
  tags,
}: {
  image: any
  heading: String
  content: String
  tags: any[]
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={image}
        alt="mandelbrot set"
        className="w-full h-52 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-slate-700 text-base">{content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, key) => {
          return (
            <span
              key={key}
              className="inline-block bg-sky-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
            >
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Card
