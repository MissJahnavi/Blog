import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Component1 from './components/Component1'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Component1/>
      

    </>

  )
}
  export default App
