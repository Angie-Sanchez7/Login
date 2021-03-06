import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { showErrMsg, showSuccessMsg } from '../../../utils/notification'
import { dispatchLogin } from '../../../redux/actions/authAction'
import { useDispatch } from 'react-redux'
import { Input } from '../../../componentes/input/Input'
import logo from '../../../assets/logos/programateLogo.png'
import './Login.css'


const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

function Login () {
  const [user, setUser] = useState(initialState) //Inicializo hooks
  const dispatch = useDispatch() //Inicializo hooks
  const navigate = useNavigate() //Inicializo hooks

  const { email, password, success } = user

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value, err: '', success: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3005/api/login', {
        email,
        password
      })
      console.log(res)
      setUser({ ...user, err: '', success: res.data.msg })
      window.localStorage.setItem('firstLogin', true)
      window.localStorage.setItem(
        'loggedAgoraUser', JSON.stringify(res.data)
      )
      showSuccessMsg(success)
      dispatch(dispatchLogin())
      navigate('/landing')
    } catch (err) {
      showErrMsg(err.response.data.error)
      err.response.data.error &&
        setUser({ ...user, err: err.response.data.error, success: '' })
    }
  }

  return (
    <div className='container-login-main'>
      <div className='container-login-page'>
        <img className='logo' src={logo} alt='logo-programate' />
        <form className='form' onSubmit={handleSubmit}>
          <div className='container-login-form-content'>
            <Input
              label='Correo'
              placeholder='Luis@hotmail.com'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
            <Input
              type='Password'
              label='Contrase??a'
              placeholder='********'
              name='password'
              value={password}
              onChange={handleChangeInput}
            />
          </div>

          <button className='button-login' type='submit'>
            INGRESAR
          </button>
          <Link to='/forgot_password'>Olvidaste la contrase??a?</Link>
          <p>
            Nueva cuenta? <Link to='/register'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login


