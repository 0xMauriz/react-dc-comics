import { useState } from 'react'
import './App.css'
import Header from '../components/Header.jsx'
import ObjectContainer from '../components/ObjectContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="d-flex h-20 justify-content-center align-items-center bg-black">
        <p className="fs-1"> Content goes here </p>
      </div>
      <ObjectContainer />
    </>
  )
}

export default App
