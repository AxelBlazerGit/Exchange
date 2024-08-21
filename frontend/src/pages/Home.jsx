import React from 'react'
import Header from '../components/header'
import SellSection from '../components/SellSection'
import Categories from '../components/categories'
import ContactFeedback from '../components/ContactFeedback'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Categories/>
      <SellSection/>
      <ContactFeedback/>
      <Footer/>
    </div>
  )
}

export default Home
