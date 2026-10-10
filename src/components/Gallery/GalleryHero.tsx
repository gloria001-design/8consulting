import React from "react";
import "../style/GalleryHero.css";

const GalleryHero = () => {
  const heroImage =
    "https://i.postimg.cc/15V970Wb/96592ad5354c1593de3417bb00d511466ad4bd89-%281%29.jpg";

  return (
    <section className="gallery-hero" style={{ backgroundImage: `url("${heroImage}")` }}>
      <div className="gallery-hero__overlay" />

      <div className="gallery-hero__content">
        <h1 className="gallery-hero__title">Moments That Inspire Growth</h1>

        <p className="gallery-hero__text">
          Explore moments from our programs, workshops, events, and career-development
          experiences. Every image tells a story of learning, discovery, connection, and
          possibility.
        </p>

        <div className="gallery-hero__actions">
          <button className="gallery-hero__btn gallery-hero__btn--primary">
            Partner with us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </button>

          <button className="gallery-hero__btn gallery-hero__btn--ghost">
            Sponsor this program
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
