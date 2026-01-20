import './App.css'
import Header from './components/Header.jsx'
import ObjectContainer from './components/ObjectContainer.jsx'
import FAQ from './components/Links.jsx'
import Footer from './components/Footer.jsx'
import Cards from './components/Cards.jsx'
import comics from './assets/scripts/comics.js'

function App() {

  return (
    <>
      <Header />
      <div className="d-flex h-36 justify-content-center align-items-center bg-black position-relative">
        <Cards />
      </div>
      <ObjectContainer />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
