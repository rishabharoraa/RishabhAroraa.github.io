import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className="mb-16"></div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
