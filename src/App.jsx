import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import ObjectContainer from './components/ObjectContainer.jsx'
import FAQ from './components/Links.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="d-flex h-15 justify-content-center align-items-center bg-black position-relative">
        <p className="fs-1"> Content goes here </p>
      </div>
      <ObjectContainer />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
