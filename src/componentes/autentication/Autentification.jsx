import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../../pages/auth/login/Login'
import ForgotPassword from '../../pages/auth/forgotPassword/ForgotPassword'
import ResetPassword from '../../pages/auth/resetPassword/ResetPassword'
import NotFound from '../notFound/NotFound'
import Landing from '../../componentes/landing/Landing'


function Autentification () {
  const auth = useSelector(state => state.auth)
  const { isLogged } = auth
  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={isLogged ? <NotFound /> : <Login />}
          exact
        />
        <Route path='/forgot_password' element={<ForgotPassword />} exact />
        <Route
          path='/user/reset/:token'
          element={isLogged ? <NotFound /> : <ResetPassword />}
          exact
        />
        <Route path= '/landing' element={<Landing/>} exact/>
      </Routes>
    </Router>
  )
}
export default Autentification
