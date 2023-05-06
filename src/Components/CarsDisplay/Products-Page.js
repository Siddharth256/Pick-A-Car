import React from 'react'
import Navbar from './Navbar'
import ProductsList from './Products-List'
import ProductPage from './Hatchbacks'
import Footer from './Components/Slider/Footer'
function ProductsPage() {
  return (
    <div className='ProdPageall'>
         <Navbar/>
         <ProductsList/>
         {/* <ProductPage/> */}
          < Footer/>
    </div>
  )
}

export default ProductsPage
