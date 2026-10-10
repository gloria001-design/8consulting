import React from 'react';
import './style/FutureDirection.css';

const FutureDirection = () => {
  return (
    <section className="future-direction-section">
      <div className="future-direction-card">
        {/* Decorative corner shapes */}
        <span className="corner-decoration corner-top-left"></span>
        <span className="corner-decoration corner-bottom-right"></span>

        <div className="future-direction-content">
          <span className="future-eyebrow">Get started</span>

          <h2 className="future-heading">
            Your Future Starts With <br />
            the Right Direction.
          </h2>

          <p className="future-description">
            Whether you're an individual looking for career clarity, a school seeking meaningful
            programs, or an organization looking to create impact, BTH Consulting is ready to work
            with you.
          </p>

          <div className="future-actions">
            <button className="future-primary-button" type="button">
              View Program <span className="future-arrow">&rarr;</span>
            </button>

            <button className="future-secondary-button" type="button">
              Sponsor this program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureDirection;