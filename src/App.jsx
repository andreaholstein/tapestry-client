// -------------- FXNALITY --------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
// -------------- PAGES --------------
import HomePage from "./pages/HomePage/HomePage";
import PostsPage from "./pages/PostsPage/PostsPage";
// -------------- COMPONENTS --------------
// -------------- STYLES --------------
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
