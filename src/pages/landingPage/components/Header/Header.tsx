import headerImage from './HeaderImage.png'

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-5">
      <img src={headerImage} alt="Rishabh Arora" className="w-full" />
      <div className="w-full flex justify-evenly py-10 font-['Cutive_Mono'] text-lg">
        <a href="">
          <div className="hover:decoration-solid hover:underline">Home</div>
        </a>
        <a href="">
          <div className="hover:decoration-solid hover:underline">Projects</div>
        </a>
        <a href="">
          <div className="hover:decoration-solid hover:underline">Resume</div>
        </a>
        <a href="">
          <div className="hover:decoration-solid hover:underline">Contact</div>
        </a>
      </div>
    </div>
  )
}

export default Header
