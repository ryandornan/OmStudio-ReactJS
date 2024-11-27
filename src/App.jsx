import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Benefits from "./sections/Benefits/Benefits";
import Features from "./sections/Features/Features";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Benefits />
      <Features />
    </div>
  );
}

export default App;
