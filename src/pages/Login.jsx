import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isloading, isError, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/user')
    } else {
      navigate('/login')
    }
    dispatch(reset())
  }, [user, isloading, isError, isSuccess, message])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }
    dispatch(login(userData))

    if (isloading) {
      return <Spinner />
    }
  }
  return (
    <>
      <section className='heading text-center'>
        <h1>
          <FaSignInAlt /> Entrar a la App
        </h1>
        <p> Por favor teclea tus credenciales</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              id='email'
              name='email'
              className='form-control'
              value={email}
              placeholder='Teclea tu email'
              onChange={onChange} required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              name='password'
              className='form-control'
              value={password}
              placeholder='Teclea tu contraseña'
              onChange={onChange} required
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Ingresar
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
