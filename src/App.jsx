import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SuccessCheckout from './pages/SuccessCheckout/SuccessCheckout'
import ViewCart from './pages/ViewCart/ViewCart'
import Checkout from './pages/Checkout/Checkout'
import Products from './pages/Products/Products'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import { Toaster } from 'react-hot-toast'
import TestPage from './pages/TestPage/TestPage'
import AuthState from './context/login/authState'
import DataState from './context/dataContext/dataState'
import AlreadyLoggedIn from './pages/AlreadyloggedIn/AlreadyLoggedIn'
import SingleProduct from './pages/SingleProduct/SingleProduct'

function App() {

  return (
    <>
      <AuthState >
        <DataState>
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
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path='/alreadyloggedin' element={<AlreadyLoggedIn />} />

            </Routes>
          </BrowserRouter>
        </DataState>
      </AuthState>

    </>
  )
}

export default App
