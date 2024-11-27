import React from 'react';

function Hero() {
  return (
    <div
      className="hero-section text-white text-center"
      style={{
        backgroundImage: "url('/img/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ letterSpacing: '2px', fontSize: '1rem', marginBottom: '10px' }}>
        Body & Soul Meditation Practice
      </p>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px' }}>
        OM STUDIO
      </h1>
      <button className="btn btn-primary btn-lg" style={{ backgroundColor: '#1ffc83', color: '#000' }}>
        Get Now
      </button>
    </div>
  );
}

export default Hero;
