// -------------- FXNALITY --------------
import { BrowserRouter, Routes, Route } from 'react-router'
// -------------- PAGES --------------
import HomePage from './pages/HomePage/HomePage'
// -------------- COMPONENTS --------------
// -------------- STYLES --------------
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
