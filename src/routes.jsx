import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Producto from './components/Producto'
import Ventas from './components/Ventas'

// pages
import Login from './pages/Login'
import Register from './pages/Register'

// components

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/user',
      element: <Ventas />,
    },
    {
      path: '/product/:_id',
      element: <Producto />,
     },
     {
       path: '/404',
       element: <p className='text-center'>Page not found</p>
     },
     {
       path: '*',
       element: <Navigate to='/404' replace />
       }
  ])

  return element
}

export default Paths
