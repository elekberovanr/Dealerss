import React from 'react'
import Header from '../components/layout/header/Header'
import MadeWell from './home/components/madewell/MadeWell'
import Products from '../components/layout/productsection/Products'
import Jacket from './home/components/jacket/Jacket'
import Collection from './home/components/collection/Collection'
import NewDenim from './home/components/newdenim/NewDenim'
import { Footer } from '../components/layout/footer/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <MadeWell/>
        <Products/>
        <Jacket/>
        <Collection/>
        <NewDenim/>
        <Footer/>

    </div>
  )
}

export default Home