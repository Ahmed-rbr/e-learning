import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import MentorCard from "./components/MentorCard";
import Mentors from "./components/Mentors";
import Testimonials from "./components/Testimonials";
import Form from "./components/Form";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-15  space-y-24">
        <HeroSection />
        <Companies />
        <Courses />
        <Mentors />
        <Testimonials />
        <Form />
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
};

export default App;
