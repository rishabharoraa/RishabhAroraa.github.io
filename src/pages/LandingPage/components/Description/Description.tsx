const Description = () => {
  return (
    <div className="w-11/12 text-center flex flex-col justify-center items-center">
      <div className="text-3xl lg:text-4xl pt-10">Hi there! 👋</div>
      <hr className="border-t border-t-1 border-t-slate-200 w-7/12 mt-4" />

      <div className="pt-7 text-sm md:text-lg text-center">
        My name is Rishabh Arora. I am from Uttar Pradesh, India. <br /> I am a
        Software Developer & Full Stack Web Developer. <br /> I enjoy coding &
        problem solving. I ❤️ open source.
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="pt-10 text-l pb-2 font-semibold">
          My academic interests include:
        </div>
        <div className="w-5/6 max-w-xl">
          <ul className="p-2 text-sm md:text-base list-disc">
            <div className="ml-3 text-left">
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
      </div>
    </div>
  )
}

export default Description
