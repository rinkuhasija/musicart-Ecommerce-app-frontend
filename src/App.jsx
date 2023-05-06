import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/layout/Logo/Logo'
import Footer from './components/layout/Footer/Footer'
import Login from './components/pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* <Logo />

    <Footer /> */}

    <Login />

        
    </>
  )
}

export default App
