import { useEffect, useState } from 'react'
import { getData } from '../services'
import { Link } from 'react-router-dom'


const Ventas = () => {
  const [listProducts, setProducts] = useState([])
  const [error, setError] = useState('')

  useEffect (() => {
    const getProduct = async () => {
      try {
      const data = await getData()
      setProducts(data.data.products)
      } catch (error) {
        setError(error)
      }
    }
    getProduct()
  }, [])
  console.log("producto Encontrado",listProducts)
  return (
 <>
 <div className='container'>
<section className='row gy-4'>
      {listProducts.map((index, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`/product/${index._id}`}>
            <article className='card'>
              <img loading='lazy' className='card-img-top' src={index.image ? index.image : ('https://tupaginaweb.cl/wp-content/uploads/2021/01/photo.png')} alt={index.product_name} />
              <div className='card-body'>
                <p className='card-title'>{index.name}</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  </div>
   </>
  )
}

//array.slice(0, 6).map(n => console.log(n))

export default Ventas
