// -------------- FXNALITY --------------
import { BrowserRouter, Routes, Route } from "react-router";
// -------------- PAGES --------------
import HomePage from "./pages/HomePage/HomePage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PostsForm from "./components/PostsForm/PostsForm";
// -------------- COMPONENTS --------------
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
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
          <Route path="/signup" element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="/community/:id" element={<CommunityPage />} />
          {/* <Route path="/community/:communityId/posts" element={<PostsForm />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
