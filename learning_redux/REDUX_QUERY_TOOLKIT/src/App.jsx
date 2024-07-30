import React from 'react'
import Products from './components/Products'
import Specific from './components/Specific'
import AddNewProducts from './components/AddNewProducts'
import UpdateProducts from './components/UpdateProducts'
import { DeleteProduct } from './components/DeleteProduct'

function App() {
  return (
    <>
      {/* <Products /> */}
      {/* <Specific /> */}
      {/* <AddNewProducts /> */}
      {/* <UpdateProducts productId={4} /> */}
      <DeleteProduct productId={4} />
    </>
  )
}

export default App