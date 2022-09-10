import React from 'react'

const RegisterProduct = () => {

  const [formData, setFormData] = useState({
    name1: '',
    equivalent_code: '',
    abreviatura: '',
    estado: '',
    image: ''
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
      const userData = {
      name1,
      equivalent_code, 
      abreviatura,
      estado,
      image
    }
    

    if (isloading) {
      return <Spinner />
    }
  }

  return (
    <div>RegisterProduct</div>
  )
}

export default RegisterProduct