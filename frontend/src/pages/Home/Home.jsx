import React, {useState} from 'react'
import './Home.css'
import FoodDidplay from '../../components/FoodDisplay/FoodDisplay'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import AppDownload from '../../components/AppDownload/appDownload'
const Home = () => {
 const [category,setCategory]=useState("All");

  return (
    <div >
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDidplay  category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home



