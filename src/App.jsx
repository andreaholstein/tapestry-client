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

function App() {
  const url = import.meta.env.VITE_API_URL;
  const authToken = localStorage.getItem("authToken");

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage url={url} authToken={authToken} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/community/:id" element={<CommunityPage />} />
          <Route path="/profile" element={<ProfilePage url={url} authToken={authToken} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
