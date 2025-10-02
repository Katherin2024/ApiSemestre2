import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detalle from './Detalle'
import Favoritos from './Favoritos'
import Home from './Home'
import Informativa from './Informativa'
import Original from './Original'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/informativa" element={<Informativa />} />
          <Route path="/mapa" element={<Original />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/detalle/:depto/:municipio" element={<Detalle />} />
        </Routes>
      </Router>
      

    </>

  )
}

export default App
