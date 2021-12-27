import avatar from './avatar.png'

const Avatar = () => {
  return (
    <div className="w-52 h-52 border-4 bg-sky-300 border-sky-200 rounded-full flex items-center justify-center">
      <img
        src={avatar}
        alt=""
        className="w-48 h-48 rounded-full border-4 border-sky-400 shrink-0 bg-white"
      />
    </div>
  )
}

export default Avatar
