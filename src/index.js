import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import DetailMovies from "./containers/DetailMovies";
import Pencarian from "./containers/Pencarian";

import ProtectedComponent from "./components/ProtectedComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <ProtectedComponent>
              <App />
            </ProtectedComponent>
          } />
        <Route path="detail/:id" element={
              <ProtectedComponent>
                <DetailMovies />
              </ProtectedComponent>} />
        <Route path="cari/:textcari" element={
              <ProtectedComponent>
                <Pencarian />
              </ProtectedComponent>} />      
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
