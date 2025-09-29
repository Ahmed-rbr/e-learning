import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import MentorCard from "./components/MentorCard";
import Mentors from "./components/Mentors";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-42  space-y-24">
        <HeroSection />
        <Companies />
        <Courses />
        <Mentors />
      </main>
    </div>
  );
};

export default App;
