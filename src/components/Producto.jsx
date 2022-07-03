import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducto } from '../services'

const Producto = () => {
const { _id = '' } = useParams()
  const [producto, setProducto] = useState([])
  const [error, setError] = useState('')

  useEffect (() => {
    const getProduct = async () => {
      try {
      const data = await getProducto(_id)
      setProducto(data)
      } catch (error) {
        setError(error)
      }
    }
    getProduct()
  }, [])
console.log(producto)
  return (
     <>
  <div className="card">
    <div className="container-fliud">
      <div className="wrapper row">
        <div className="preview col-md-6">
          <div className="preview-pic tab-content">
            <div className="tab-pane active text-center" id="pic-1"><img className='producto' src={producto.image ? producto.image : ('https://tupaginaweb.cl/wp-content/uploads/2021/01/photo.png')} alt={producto.product_name} /></div>
          </div>
        </div>
        <div className="details col-md-6">
          <h3 className="product-title">{producto.product_name}</h3>
          <div className="rating">
            <div className="stars">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
            <span className="review-no">41 reviews</span>
          </div>
          <p className="product-description">
            {producto.description}
            </p>
          <h4 className="price">current price: <span>$ {producto.price}</span></h4>
          <h5 className="sizes">Category : {producto.category}</h5>
          <h5 className="colors">Marca : {producto.brand}</h5>
          <div className="action">
            <button className="add-to-cart btn btn-default" type="button">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>

     </>
  )
}

export default Producto