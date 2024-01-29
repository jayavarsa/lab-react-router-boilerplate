import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import AllRoutes from './Components/AllRoutes'

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  )
}

export default App
