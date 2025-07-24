import React from 'react'
import './App.css'
import Description from './components/Description'
import DestinationList from './components/DestinationList'
import Destination from './components/Destination'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="app">
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      <Navbar />
      <main className="content-container">
        <section id="home" style={{ marginBottom: '60px' }}>
          <DestinationList />
          <Destination />
        </section>
        <section id="about" style={{ marginBottom: '100px', paddingTop: '40px' }}>
          <About />
        </section>
        <section id="contact" style={{ marginTop: '100px', paddingTop: '60px' }}>
          <Contact />
        </section>
      </main>
    </div>
  )
}
  

  
 

export default App;
