import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useMatch,
} from "react-router-dom";
import "./Sidebar.scss";
import "./Content.scss";
import profilePic from "./profilepic.png";
import { About } from "./components/AboutMe.js";
import { Experience } from "./components/Experience.js";
import { Education } from "./components/Education.js";
import { Skills } from "./components/Skills.js";

const Sidebar = () => {
  const match1 = useMatch("/about");
  const match2 = useMatch("/education");
  const match3 = useMatch("/experience");
  const match4 = useMatch("/skills");
  return (
    <div class="sidebar">
      <img className="profilepic" src={profilePic} alt="logo" allt="profile picture" />
      
      <ul>
        <li className={match1 ? "active" : "inactive"}>
          <Link to="/about">About me</Link>
        </li>
        <li className={match2 ? "active" : "inactive"}>
          <Link to="/education">Education</Link>
        </li>
        <li className={match3 ? "active" : "inactive"}>
          <Link to="/experience">Experience </Link>
        </li>
        <li className={match4 ? "active" : "inactive"}>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </div>
  );
};


const Content = () => (
  <div className="content-wrapper">
    <Routes>
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
