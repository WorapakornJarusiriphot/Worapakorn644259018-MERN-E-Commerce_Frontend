import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialProduct from './SpecialProduct'
import OurServices from './OurServices'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
        <Banner />
        <Categories />
        <SpecialProduct />
        <OurServices />
        <Testimonials />
    </div>
  )
}

export default Home