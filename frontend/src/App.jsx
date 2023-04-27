import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Overview />
      <About />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
