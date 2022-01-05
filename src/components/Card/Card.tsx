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
    <div className="lg:h-52 w-72 lg:w-5/6 rounded overflow-hidden shadow-lg flex flex-col lg:flex-row">
      <div className="lg:h-full lg:basis-1/3 overflow-hidden h-48">
        <img src={image} alt="project overview" className="object-cover" />
      </div>

      <div className="lg:basis-2/3">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{heading}</div>
          <p className="text-slate-700 text-base">{content}</p>
        </div>

        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, key) => {
            return (
              <span
                key={key}
                className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
              >
                {tag}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Card
