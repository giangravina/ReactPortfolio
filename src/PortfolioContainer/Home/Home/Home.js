import React from "react";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import "./Home.css";
import Navigation from "../Navigation/Navigation";
import About from "../About/About";
import BottomFooter from "../BottomFooter/BottomFooter";

export default function Home() {
  return (
    <div className="page-container">
      <div className="home-container">
        <Navigation />
        <Profile />
        <Footer />
      </div>
      <div className="projects-container">
        <Projects />
      </div>
      <div className="about-container">
        <About />
      </div>
      <div className="bottom-container">
      <BottomFooter />
      </div>
    </div>
  );
}
