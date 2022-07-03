import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import Ventas from './Ventas'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
      { user ? (<Link to='/user'>Inicio</Link>):(<Link to='/'>Inicio</Link>)}
        
      </div>
      <ul>
        {user
          ? (
            <>
              <li>
                <form className='d-flex' role='search'>
                  <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                  <button className='btn btn-outline-success' type='submit'>Search</button>
                </form>
              </li>
              <li>
                <button className='btn' onClick={onLogout}>
                  <FaSignOutAlt />Logout
                </button>
              </li>
            </>
            )
          : (
            <>
              <li>
                <Link to='/login'>
                  <FaSignInAlt />Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  <FaUser /> Registrar
                </Link>
              </li>
            </>
            )}
      </ul>
    </header>

  )
}

export default Header
