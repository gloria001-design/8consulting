import React from 'react';
import './style/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Left Content Column */}
      <div className="hero-left">
        <div className="pill-badge">
          <span className="dot"></span>
          <span className="pill-text">
            Career Consulting · Training · Youth Development
          </span>
        </div>

        <h1 className="hero-heading">
          Shaping Careers.
            

          Building <span className="highlight">Futures</span>
        </h1>

        <p className="hero-subtext">
          BTH Consulting Limited helps individuals, organizations and young
          people discover opportunities, develop relevant skills and make
          informed career decisions for a changing world.
        </p>

        <div className="cta-container">
          <button className="btn-primary" type="button">
            Explore our program <span className="arrow">&rarr;</span>
          </button>

          <button className="btn-secondary" type="button">
            Partner with us
          </button>
        </div>

        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-number">04</span>
            <span className="stat-label">Pathway</span>
          </div>

          <div className="divider"></div>

          <div className="stat-box">
            <span className="stat-number">6+</span>
            <span className="stat-label">Service Areas</span>
          </div>

          <div className="divider"></div>

          <div className="stat-box">
            <span className="stat-title">Infinity</span>
            <span className="stat-label">Endless Possibilities</span>
          </div>
        </div>
      </div>

      {/* Right Image Column */}
      <div className="hero-right">
        <div className="image-wrapper">
          {/* Planet decoration above the person's head */}
          <img
            src="https://i.postimg.cc/Znp45PjB/551f5ce6fd14af22ed555fb9bd5ca522bab5a645.jpg"
            alt=""
            aria-hidden="true"
            className="planet-image"
          />

          {/* Main hero illustration */}
          <img
            src="https://i.postimg.cc/BQ71F4CX/Frame-94-(1 ).png"
            alt="Young pilot representing career growth and future opportunities"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
