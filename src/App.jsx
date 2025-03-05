// -------------- FXNALITY --------------
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router";
// -------------- PAGES --------------
import HomePage from "./pages/HomePage/HomePage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
// -------------- COMPONENTS --------------
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// -------------- STYLES --------------
import "./styles/global.scss";
import "./App.scss";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/community/:id" element={<CommunityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
=======
import { BrowserRouter, Router } from 'react-router'
import { Routes } from 'react-router'
// -------------- STYLES --------------
import './App.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Router>

        </Router>
>>>>>>> 4b563d4adb3af3276cc06df4eaf4132ec9eb730f
      </BrowserRouter>
    </>
  );
}

export default App;
