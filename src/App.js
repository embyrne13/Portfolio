import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import FlipCard from './components/FlipCard'
function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<FlipCard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App
