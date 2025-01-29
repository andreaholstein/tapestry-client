// -------------- FXNALITY --------------
import { BrowserRouter, Routes, Route } from 'react-router'
// -------------- PAGES --------------
import HomePage from './pages/HomePage/HomePage'
// -------------- COMPONENTS --------------
import Header from './components/Header/Header'
// -------------- STYLES --------------
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
