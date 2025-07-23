import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div style={styles.layout}>
      <Navbar />
      <main style={styles.main}>
        <div className="content-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

const styles = {
  layout: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1
  }
}

export default Layout
