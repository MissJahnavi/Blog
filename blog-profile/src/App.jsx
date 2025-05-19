import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
// import Component1 from './components/Component1'
import MainComponent from './components/MainComponent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen bg-white"> 
     <Navbar/>
     <MainComponent/>

     </div>
     
      

    </>

  )
}
  export default App
