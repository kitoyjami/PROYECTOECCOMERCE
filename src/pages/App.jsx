import React from 'react'
import Header from '../components/Header'
import Paths from '../routes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Paths />
      </BrowserRouter>
    </>
  )
}

export default App
