import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import Ventas from './Ventas'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  return (
    <div className='container'>
      {
        user
          ? (<Ventas />)
          : (<>
            <p className='text-center'>No hay sesion activa</p>
             </>)
      }
    </div>
  )
}

export default Dashboard
