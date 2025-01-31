// -------------- FXNALITY --------------
import { BrowserRouter, Routes, Route } from 'react-router'
// -------------- PAGES --------------
import HomePage from './pages/HomePage/HomePage'
import CommunityPage from './pages/CommunityPage/CommunityPage'
// -------------- COMPONENTS --------------
// -------------- STYLES --------------
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/community/:id" element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
