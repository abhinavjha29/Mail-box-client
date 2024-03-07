import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import SignupPage from "./components/UI/SignupPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LoginPage from "./components/UI/LoginPage";
import HomePage from "./components/UI/HomePage";

import SendMailPage from "./components/Page/SendMailPage";
import InboxPage from "./components/Page/InboxPage";
import ReadMailPage from "./components/Page/ReadMailPage";
import SentMailPage from "./components/Page/SentMailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/sendmail" element={<SendMailPage />} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/singlemail/:id" element={<ReadMailPage />} />
        <Route path="/sentMailPage" element={<SentMailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
