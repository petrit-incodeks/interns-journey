import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/style/style.css"
import Home from "./screens/home/Home";
import Assignment from "./screens/assignment/Assignment";
import NotFound from "./screens/notfound";
import Instructions from "./screens/instructions/Instructions";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/assignment/:id" element={<Assignment/>} />
          <Route path="/instructions" element={<Instructions/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
};

export default App;
