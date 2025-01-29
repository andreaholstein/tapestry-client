// -------------- FXNALITY --------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
// -------------- PAGES --------------
import HomePage from "./pages/HomePage/HomePage";
import PostsPage from "./pages/PostsPage/PostsPage";
// -------------- COMPONENTS --------------
import Header from './components/Header/Header'
// -------------- STYLES --------------
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
