// -------------- FXNALITY --------------
import { BrowserRouter, Routes, Route } from 'react-router'
// -------------- PAGES --------------
import HomePage from './pages/HomePage/HomePage'
import CommunityPage from './pages/CommunityPage/CommunityPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
// -------------- COMPONENTS --------------
import Header from './components/Header/Header'
// -------------- STYLES --------------
import './App.scss'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="/community/:id" element={<CommunityPage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
