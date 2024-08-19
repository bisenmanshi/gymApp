import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./Context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
   <BrowserRouter>
     <AuthProvider>
        <App />
        <Toaster />
      </AuthProvider>
   </BrowserRouter>
  
);
