// -------------- FXNALITY --------------
import { BrowserRouter, Routes, Route } from "react-router";
// -------------- PAGES --------------
import HomePage from "./pages/HomePage/HomePage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PostsForm from "./components/PostsForm/PostsForm";
// -------------- COMPONENTS --------------
import Header from "./components/Header/Header";
// -------------- STYLES --------------
import "./App.scss";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/community/:id" element={<CommunityPage />} />
          {/* <Route path="/community/:communityId/posts" element={<PostsForm />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
