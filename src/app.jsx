import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Team from "./pages/team";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Nav from "./components/nav";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Nav />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
