import React from 'react'
import { Toolbar } from '@material-ui/core'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import LogoSection from './LogoSection'
import Footer from '../../components/Footer'
import { useStyles } from './useStyles'

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <Toolbar />
        <LogoSection />
        <Toolbar />
      </main>
      <Footer />
      <Sidebar />
    </div>
  )
}

export default Home