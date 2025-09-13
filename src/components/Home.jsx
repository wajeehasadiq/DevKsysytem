import React from 'react'
import Navbar from './navbar/Navbar'
import HeroSec from './herosec/HeroSec'
import MainSec from './mainsec/MainSec'
import Rating from './rating/Rating'
import Cards from './cards/Cards'
import Strength from './strength/Strength'
import GrowBusiness from './growbusiness/GrowBusiness'
// import Team from './team/Team'
import Experience from './experience/Experience'
import Form from './form/Form'
import Footer from './footer/Footer'
import Slider from './slider/Slider'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSec/>
        <MainSec/>
        <Rating/>
        <Cards/>
        <Strength/>
        <GrowBusiness/>
        {/* <Team/> */}
        <Experience/>
        <Form/>
        <Slider/>
        <Footer/>
    </div>
  )
}
