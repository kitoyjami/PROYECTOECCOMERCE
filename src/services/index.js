import axios from 'axios'


const baseUrl = 'https://ecomerce-master.herokuapp.com/api/v1/item'
const baseUrl2 = 'https://crs-backend1.herokuapp.com/products'

/* const getData = async (name = '') => {
  const setName = name ? `/name/${name}` : '/all'
  const req = await axios.get(baseUrl + setName)
  return req
} */
const getData = async () => {

  const req = await axios.get(baseUrl2)
  const res = req.data
  console.log("Estos productos devuelvo:", res)
  return res
}
const getProducto = async (_id = '') => {
  const req = await axios.get(baseUrl + `/${_id}`)
  const res = req.data
  return res
}

export { getData, getProducto }
