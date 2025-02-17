import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Places from '../components/Places'
import Footer from './Footer'
import InfoChandigarh from './InfoChandigarh'
import Contact from './Contact'

const Home = () => {
  return (
    <div>

        <Header />
        <Main />
         <InfoChandigarh />
         <Places/>
         <Contact />
        <Footer /> 
    </div>
  )
}

export default Home