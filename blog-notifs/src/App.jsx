import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Component from './components/Component'
import MainComponent from './components/MainComponent'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Navbar/>
        <MainComponent/>
        {/* <Component/> */}
        <Footer />

     

    </>
  )
}

export default App
