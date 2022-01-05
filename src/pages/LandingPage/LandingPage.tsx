import Header from '../../components/Header/Header'
import Avatar from './components/Avatar/Avatar'
import Description from './components/Description/Description'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-slate-700 bg-white flex-1 max-w-5xl">
      <Header />

      <Avatar />

      <Description />

      <Projects />

      <Footer />
    </div>
  )
}

export default LandingPage
