import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="flex justify-center bg-gray-200">
      <Outlet />
    </div>
  )
}

export default App
