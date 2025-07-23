import React from 'react'
import './App.css'
import Description from './Description'
import DestinationList from './DestinationList'
import Destination from './Destination'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  return(
    <div>
      <Navbar/>
      <Description/>
      <DestinationList/>
      <Destination/>
      <Footer/>
    </div>
  )
}
  
 

export default App;
