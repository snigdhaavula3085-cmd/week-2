import React from "react";
import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Loader from "./ui/Loader";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route  path="/"  element={<Loader/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
