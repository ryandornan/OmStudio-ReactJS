import React from "react";
import "./features.css";

function Features() {
  // Feature Data
  const features = [
    {
      icon: "https://via.placeholder.com/100", // Replace with actual icons
      title: "Mental Practice",
      description: "One of the most appealing aspects of yoga is its accessibility",
    },
    {
      icon: "https://via.placeholder.com/100", // Replace with actual icons
      title: "Stress Relief",
      description: "Yoga is a versatile and transformative body practice",
    },
    {
      icon: "https://via.placeholder.com/100", // Replace with actual icons
      title: "Balanced Nutrition",
      description: "The meditative practices in yoga help quiet the mind",
    },
    {
      icon: "https://via.placeholder.com/100", // Replace with actual icons
      title: "Meditation",
      description: "This inner tranquility can carry over into everyday life",
    },
  ];

  return (
    <section className="features-section section-light">
      <div className="container text-center">
        {/* Header */}
        <h2 className="features-header">
          Yoga is <span className="highlight">an ancient practice</span> that unites the body and spirit through exercise, breathing techniques, and meditation
        </h2>

        {/* Cards */}
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className="feature-card">
                <img src={feature.icon} alt={feature.title} className="feature-icon" />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
