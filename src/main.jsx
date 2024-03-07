import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MailProvider from "./components/store/MailContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MailProvider>
      <App />
    </MailProvider>
  </React.StrictMode>
);
