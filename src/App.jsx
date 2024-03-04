import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import SignupPage from "./components/UI/SignupPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LoginPage from "./components/UI/LoginPage";
import HomePage from "./components/UI/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
