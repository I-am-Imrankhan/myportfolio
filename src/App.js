import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Sidebar.scss";
import "./Content.scss";
import { About } from "./components/AboutMe.js";
import { Experience } from "./components/Experience.js";
import { Education } from "./components/Education.js";
import { Skills } from "./components/Skills.js";
import { Welcome } from "./components/Welcome.js";
import { Sidebar } from "./components/Sidebar.js";

const Content = () => (
  <div className="content-wrapper">
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/myportfolio" element={<Welcome />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  </div>
);

const MyApp = () => {
  return (
    <Router>
      <div className="app-container" style={{ display: "flex" }}>
        <Sidebar />
        <Content />
      </div>
    </Router>
  );
};

function App() {
  return MyApp();
}

export default App;
