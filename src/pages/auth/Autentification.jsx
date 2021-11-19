import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import ActivationEmail from '../auth/activationEmail/ActivationEmail'
import Login from '../auth/login/Login'
import ForgotPassword from '../auth/forgotPassword/ForgotPassword'
import ResetPassword from '../auth/resetPassword/ResetPassword'
import NotFound from '../../componentes/notFound/NotFound'


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
        <Route
          path='/user/activate/:activation_token'
          element={<ActivationEmail />}
          exact
        />
        <Route path= '/landing' element={<Landing/>} exact/>
      </Routes>
    </Router>
  )
}
export default Autentification
