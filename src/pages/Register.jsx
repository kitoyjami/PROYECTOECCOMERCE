import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register () {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden')
    } else {
      const userData = {
        first_name,
        last_name,
        birth_date,
        gender,
        email,
        password
      }
      dispatch(register(userData))
    }
    if (isloading) {
      return <Spinner />
    }
  }

  const {  first_name,    last_name,    birth_date,    gender,    email,    password , confirmPassword } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isloading, isError, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [user, isloading, isError, isSuccess, message])

  return (
    <>
      <section className='heading text-center'>
        <h1>
          <FaUser /> Registrar
        </h1>
        <p> Por favor crea un nuevo usuario</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              id='first_name'
              name='first_name'
              className='form-control'
              value={first_name}
              placeholder='Ingresa tu nombre'
              onChange={onChange} required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              id='last_name'
              name='last_name'
              className='form-control'
              value={last_name}
              placeholder='Ingresa tu apellido'
              onChange={onChange} required
            />
          </div>
          <div className='form-group'>
            <input
              type='date'
              id='birth_date'
              name='birth_date'
              defaultValue='2018-07-22'
              min='1970-01-01'
              max='2004-12-31'
              onChange={onChange}
              required
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              id='gender'
              name='gender'
              className='form-control'
              value={gender}
              placeholder='Ingresa tu genero'
              onChange={onChange} required
            />
          </div>
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
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='form-control'
              value={confirmPassword}
              placeholder='Confirma tu contraseña'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Agregar
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
