import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {
  const [category,SetCategory]=useState("All")
  return (
    <div>
   <Header/>
   <Exploremenu category={category} SetCategory={SetCategory}/>
   <FoodDisplay category={category}/>
    </div>
  )
}
export default Home
