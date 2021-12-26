import Card from 'components/Card/Card'
import avatar from './avatar.png'

import mandelbrot from './mandelbrot.png'
import colorize from './colorize.png'

import linkedin from './linkedin.svg'
import mail from './mail.svg'

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 text-slate-700 mt-16">
      <div className="w-52 h-52 border-4 bg-sky-300 border-sky-200 rounded-full flex items-center justify-center">
        <img
          src={avatar}
          alt=""
          className="w-48 h-48 rounded-full border-4 border-sky-400 shrink-0 bg-white"
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

      <div className="pt-7 flex flex-col items-center justify-center">
        <div className="mb-10">
          <div className="text-2xl mb-2">My projects</div>
          <hr className="border-t border-t-1 border-t-sky-900" />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-8">
          <Card
            image={mandelbrot}
            heading="Juliagen"
            content="Fast & Minimal mandelbrot & julia set generator"
            tags={['C', 'Mathematical Visualization']}
          />
          <Card
            image={colorize}
            heading="Colorize"
            content="A web application that generates color palettes from images for UI Design"
            tags={['React', 'REST', 'Image Manipulation']}
          />
        </div>
      </div>

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
    </div>
  )
}

export default LandingPage
