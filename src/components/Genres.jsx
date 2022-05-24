import React from "react";
import Action from "./Genres/Action";
import Adventure from "./Genres/Adventure";
import Horror from "./Genres/Horror";
import Comedy from "./Genres/Comedy";
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
          <Route path="/horror" element={<Horror />} />
          <Route path="/comedy" element={<Comedy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Genres;
