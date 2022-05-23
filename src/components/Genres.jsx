import React from "react";
import Action from "./Genres/Action";
import Adventure from "./Genres/Adventure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./MainSection";

function Genres() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/action" element={<Action />} />
          <Route path="/adventure" element={<Adventure />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Genres;
