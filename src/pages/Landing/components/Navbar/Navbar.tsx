import logo from './logo.png'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-4">
      <img src={logo} alt="Rishabh Arora" className="h-11 w-11" />
      <div className="space-y-[7px] pr-2">
        <div className="w-8 h-[3px] bg-[#69CFC4]"></div>
        <div className="w-8 h-[3px] bg-[#69CFC4]"></div>
        <div className="w-8 h-[3px] bg-[#69CFC4]"></div>
      </div>
      {/* <div className="flex">
        <a href="">
          <div className="hover:underline px-2">Home</div>
        </a>
        <a href="">
          <div className="hover:underline px-2">Projects</div>
        </a>
        <a href="">
          <div className="hover:underline px-2">Resume</div>
        </a>
        <a href="">
          <div className="hover:underline px-2">Contact</div>
        </a>
      </div> */}
    </nav>
  )
}
