import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Courses from "./components/Courses";

const App = () => {
  return (
    <div className="space-y-16">
      <Navbar />
      <HeroSection />
      <Companies />
      <Courses />
    </div>
  );
};

export default App;
