import linkedin from './linkedin.svg'

const Footer = () => {
  return (
    <div className="w-screen bg-sky-500 mt-8 text-white p-4 pb-6">
      <div className="text-l mb-2">Contact me</div>
      <div className="flex flex-col gap-1">
        <div className="flex text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          &nbsp; rishabharora.ns@gmail.com
        </div>
        <div className="flex text-sm">
          <img src={linkedin} alt="linkedin" className="w-5 h-5 invert" />
          &nbsp; rishabharora2000
        </div>
      </div>
    </div>
  )
}

export default Footer
