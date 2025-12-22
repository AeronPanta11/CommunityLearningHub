import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import LandingPage from './Pages/LandingPage'
import AuthPage from './Components/Auth'
import { Routes, Route } from "react-router-dom"
import AppRoutes from './Routes'
function App() {
 

  return (
    <>
      {/* <LearnHubNavbar />
      <Hero />
      <Participants /> */}  
      {/* <LandingPage /> */}
      {/* <Footer /> */}
      <AppRoutes />
    

    </>
  )
}

export default App
