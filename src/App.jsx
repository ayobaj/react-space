import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Destination from './pages/Destination'
import Home from './pages/Home'
import Technology from './pages/Technology'
import Crew from './pages/Crew'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Destination' element={<Destination/>}/>
      <Route path='/Crew' element={<Crew/>}/>
      <Route path='/Technology' element={<Technology/>}/>
    </Routes>
    </>
  )
}

export default App
