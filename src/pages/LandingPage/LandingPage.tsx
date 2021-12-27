import Avatar from './components/Avatar/Avatar'
import Description from './components/Description/Description'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 text-slate-700">
      <Avatar />

      <Description />

      <Projects />

      <Resume />

      <Footer />
    </div>
  )
}

export default LandingPage
