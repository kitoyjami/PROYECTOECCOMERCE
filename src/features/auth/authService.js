import axios from 'axios'

const API_URL = 'https://ecomerce-master.herokuapp.com/api/v1/signup'

// Registrar usuario
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login
const login = async (userData) => {
  const response = await axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout
const logout = async () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login
}

export default authService
