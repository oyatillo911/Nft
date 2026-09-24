import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Marketplace from './pages/Marketplace/Marketplace'
import Ranking from './pages/Rankings/Ranking'
import Connect from './pages/Connect a wallet/Connect'
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Marketplace />} />
          <Route path='/ranking' element={<Ranking/>} />
          <Route path='/connect' element={<Connect/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App