import React from 'react';
import './style/FeaturedPrograms.css';

const bulletPoints = [
  'Interest Spotlight & Evaluation',
  'Passion, Money & Internship',
  'Etiquette & Personal Branding',
  'Arts & Craft',
  'Skill Identification & Development',
  'Vision Board',
  'Games',
];

const FeaturedPrograms = () => {
  return (
    <section className="featured-program-section">
      <div className="featured-program-container">
        {/* Left Column: Image */}
        <div className="featured-image-wrapper">
          <img
            src="https://i.postimg.cc/L5G7nhNY/7735368f52e3d1bd800a6d5f58993b85dec9a690.jpg"
            alt="A Day Career Bootcamp For Kids"
            className="featured-image"
          />
        </div>

        {/* Right Column: Content */}
        <div className="featured-content">
          <span className="featured-tag">Featured Program</span>

          <h2 className="featured-title">
            A Day Career Bootcamp For Kids
          </h2>

          <p className="featured-description">
            What if children could begin discovering their dreams before they
            have to choose a career? An immersive career-exploration
            experience designed to help children understand their interests,
            identify their strengths and begin imagining the possibilities available
            to them.
          </p>

          <ul className="featured-list">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="featured-actions">
            <a href="#view-program" className="btn btn-primary">
              View Program &rarr;
            </a>
            <a href="#sponsor" className="btn btn-outline">
              Sponsor this program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;