import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
const Home = () => {
  const [category,SetCategory]=useState("All")
  return (
    <div>
   <Header/>
   <Exploremenu category={category} SetCategory={SetCategory}/>
    </div>
  )
}
export default Home
