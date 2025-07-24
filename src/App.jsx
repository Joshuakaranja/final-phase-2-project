import React from 'react'
import './App.css'
import Description from './components/Description'
import DestinationList from './components/DestinationList'
import Destination from './components/Destination'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
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
