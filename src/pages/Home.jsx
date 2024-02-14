import React from 'react'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import { vegitables } from '../components/Data/Products'
import Poster from '../components/Poster/Poster'
import Cards from '../components/Products/Cards'
import { cards } from '../components/Data/Cards'


const Home = () => {
  return (
    <div>
        <Hero />
        <Products  data={vegitables}/>
        <Poster />
        <Cards  data={cards}/>
    </div>
  )
}

export default Home