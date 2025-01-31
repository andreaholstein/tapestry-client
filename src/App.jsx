// -------------- FXNALITY --------------
import { BrowserRouter, Routes, Route } from "react-router";
// -------------- PAGES --------------
import HomePage from "./pages/HomePage/HomePage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
// -------------- COMPONENTS --------------
import Header from "./components/Header/Header";
// -------------- STYLES --------------
import "./App.scss";
import PostsPage from "./pages/PostsPage/PostsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/community/:id" element={<CommunityPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
