import React from 'react'
import './App.css'
import Description from './Description'
import DestinationList from './DestinationList'
import Destination from './Destination'
import Footer from './Footer'
import Navbar from './Navbar'
import About from './pages/About'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="app">
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      <Navbar />
      <main className="content-container">
        <section id="home">
          <DestinationList />
          <Destination />
        </section>
        <section id="about">
          <Description />
          <About />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  )
}
  

  
 

export default App;
