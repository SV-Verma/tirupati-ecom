import React from 'react'
import Products from './Products'
import Items from './Items'
import Addbaner from './Addbaner'
// import NameSlide from './NameSlide'
import ImageSlide from './ImageSlide'
import RecomendP from './RecomendP'
import NewArrivam from './NewArrivam'
import Category from './Category'
import Owner from './Owner'
// import CategoryList from './CategoryList'

const Home = () => {
  return (
    <div className='home'>

      <ImageSlide />
      <RecomendP />
      <Products />
      <Category />
      <Addbaner />
      <Items />
      <NewArrivam />
      <Owner />
    </div>
  )
}

export default Home
