import React from "react";
import "./benefits.css";

function Benefits() {
  const stats = [
    { value: "165+", label: "Happy Customers" },
    { value: "98%", label: "Efficiency" },
    { value: "12", label: "Years of Experience" },
  ];

  return (
    <section className="benefits-section section-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-12 col-lg-6 text-center">
            <img
              src="https://via.placeholder.com/500" // Replace with actual image
              alt="Yoga Pose"
              className="benefits-image"
            />
          </div>

          {/* Right Column: Text + Stats */}
          <div className="col-12 col-lg-6">
            <p className="benefits-subtitle text-uppercase">Our Benefits</p>
            <h2 className="benefits-title">
              The best way to increased flexibility and improve posture
            </h2>
            <p className="benefits-description">
              We will develop for you a unique nutrition program for weight
              loss and positive tone of the whole body.
            </p>

            {/* Stats */}
            <div className="row benefits-stats text-center text-lg-start">
              {stats.map((stat, index) => (
                <div key={index} className="col-4">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-4">
              <button className="btn btn-primary benefits-button">
                Get Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
