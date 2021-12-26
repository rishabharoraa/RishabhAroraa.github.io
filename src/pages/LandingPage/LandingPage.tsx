import avatar from './avatar.png'

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 text-slate-900">
      <div className="w-52 h-52 border-8 border-gray-200 rounded-full">
        <img
          src={avatar}
          alt=""
          className="w-48 h-48 rounded-full border-4 border-gray-100"
        />
      </div>

      <div className="text-3xl pt-10">Hi there! 👋</div>

      <div className="pt-7 text-sm text-center">
        My name is Rishabh Arora. I am from Uttar Pradesh, India. <br /> I am a
        Software Developer & Full Stack Web Developer. <br /> I enjoy coding &
        problem solving. I ❤️ open source.
      </div>

      <div>
        <div className="pt-10 text-m">My academic interests include:</div>
        <ul className="p-2 text-sm list-disc">
          <div className="ml-3">
            <li>GNU/Linux</li>
            <li>Computational Mathematics & Visualization</li>
            <li>Open Source & the Free Software Movement</li>
            <li>Cloud Computing</li>
            <li>Software Development</li>
            <li>Web Development</li>
            <li>Electronics & Embedded Systems</li>
            <li>Internet of Things & Networking</li>
          </div>
        </ul>
      </div>

      <div className="h-36 w-screen bg-sky-700 mt-8"></div>
    </div>
  )
}

export default LandingPage
