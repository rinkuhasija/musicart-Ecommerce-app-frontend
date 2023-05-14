import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SuccessCheckout from './pages/SuccessCheckout/SuccessCheckout'
import NavBar from './components/layout/NavBar/NavBar'
import ViewCart from './pages/ViewCart/ViewCart'
import Checkout from './pages/Checkout/Checkout'
import Products from './pages/Products/Products'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import { Toaster } from 'react-hot-toast'
import TestPage from './pages/TestPage/TestPage'
import AuthState from './context/login/authState'
import authContext from './context/login/authContext';
import { useContext } from 'react'
import AlreadyLoggedIn from './pages/AlreadyloggedIn/AlreadyLoggedIn'

function App() {

  return (
    <>
      <AuthState >
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path='/success' element={<SuccessCheckout />} />
            <Route path='/cart' element={<ViewCart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/' element={<Products />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/test' element={<TestPage />} />

          </Routes>
        </BrowserRouter>
      </AuthState>

    </>
  )
}

export default App
