import axios from 'axios'

const baseUrl = 'https://ecomerce-master.herokuapp.com/api/v1/item'

/* const getData = async (name = '') => {
  const setName = name ? `/name/${name}` : '/all'

  const req = await axios.get(baseUrl + setName)
  return req
} */
const getData = async () => {

  const req = await axios.get(baseUrl)
  const res = req.data
  console.log(res)
  return res
}

export { getData }
