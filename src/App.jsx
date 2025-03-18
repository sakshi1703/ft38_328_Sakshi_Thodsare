import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inventory from './components/inventory'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path='/'/>
        <Route path='/Home'/>
        <Route path='/cart'/>
        <Route path='/login'/>
      </Routes>
      </BrowserRouter>

      {/* <Navbar/> */}
      <Inventory/>
      <Login/>
       
    </>
  )
}

export default App;
