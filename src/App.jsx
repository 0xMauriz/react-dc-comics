import { useState } from 'react'
import './App.css'
import Header from '../components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="d-flex h-20 w-100 justify-content-center align-items-center text-bg-success">
        <p className="fs-1">Heyfratm</p>
      </div>
    </>
  )
}

export default App
