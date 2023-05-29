import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
};

export default App;
