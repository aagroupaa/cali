import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AgeGate from './components/AgeGate'
import HomePage from './components/HomePage'
import ProductsPage from './components/ProductsPage'
import AboutPage from './components/AboutPage'
import EducationPage from './components/EducationPage'
import ContactPage from './components/ContactPage'
import './App.css'

function App() {
  const [ageVerified, setAgeVerified] = useState(false)

  if (!ageVerified) {
    return <AgeGate onVerify={() => setAgeVerified(true)} />
  }

  return (
    <Router>
      <div className="min-h-screen bg-cannabis-cream">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

