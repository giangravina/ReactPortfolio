import React from "react";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import "./Home.css";

export default function Home() {
  return (
    <div className="page-container">
      <div className="home-container">
        <Profile />
        <Footer />
      </div>
      <div className="projects-container">
        <Projects />
      </div>
    </div>
  );
}
