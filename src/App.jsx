import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/layout/Logo/Logo'
import Footer from './components/layout/Footer/Footer'
import Login from './components/pages/Login/Login'
import SignUp from './components/pages/SignUp/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SuccessCheckout from './components/pages/SuccessCheckout/SuccessCheckout'
import NavBar from './components/layout/NavBar/NavBar'
import ViewCart from './components/pages/ViewCart/ViewCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <Logo />

    <Footer /> */}

      {/* <Login /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/success' element={<SuccessCheckout />} />
          <Route path='/nav' element={<NavBar />} />
          <Route path='/cart' element={<ViewCart />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
