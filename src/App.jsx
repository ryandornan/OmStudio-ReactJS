import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Benefits from "./sections/Benefits/Benefits";
import BenefitsTwo from "./sections/BenefitsTwo/BenefitsTwo";
import Services from "./sections/Services/Services";
import ContentBlock from "./sections/ContentBlock/ContentBlock";
import Testimonials from "./sections/Testimonials/Testimonials";
import Business from "./sections/Business/Business";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Foooter/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Benefits />
      <BenefitsTwo />
      <Services />
      <ContentBlock 
        subheading={"Additional Services"}
        heading={
          <>
            FIND FREEDOM & HARMONY <br /> <br />
            THROUGH OUR PREMIUM MEMBERSHIP
          </>
        }
        CTA={"Learn More"}
        />
      <Testimonials />
      <Contact />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
