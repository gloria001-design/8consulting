import React from "react";
import "./style/AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <main className="about">
      {/* Hero */}
      <section
        className="about-hero"
        style={{ backgroundImage: 'url("/about/about-hero.jpg")' }}
        role="img"
        aria-label="The 8th Consulting team at A Day Career Bootcamp"
      >
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <h1 className="about-hero__title">
            Empowering People. Shaping Careers. Building Futures.
          </h1>
          <p className="about-hero__text">
            At 8TH Consulting Limited, we are committed to helping individuals,
            organizations, and young people discover possibilities, develop
            relevant skills, and make informed decisions for a successful future.
          </p>
          <div className="about-hero__actions">
            <a href="/partner" className="about-btn about-btn--primary">
              Partner with us
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="/sponsor" className="about-btn about-btn--ghost">
              Sponsor this program
            </a>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="about-row">
        <div className="about-row__text">
          <h2 className="about-heading">About us</h2>
          <p>
            8TH Consulting Limited is a career development and consulting
            organization focused on helping people navigate opportunities, build
            valuable skills, and prepare for the future of work.
          </p>
          <p>
            Through consulting, learning workshops, and career development
            programs, we create meaningful experiences that connect people with
            knowledge, practical skills, professional exposure, and
            opportunities for growth.
          </p>
          <p>
            From helping young people discover their interests and career
            possibilities to supporting organizations with professional
            development initiatives, we believe everyone deserves the
            opportunity to understand their potential and pursue it with
            confidence.
          </p>
        </div>
        <img
          className="about-row__img"
          src="/about/about-us.jpg"
          alt="Students writing on their 8th Consulting vision boards"
          loading="lazy"
          decoding="async"
        />
      </section>

      {/* Mission + Vision */}
      <section className="about-row">
        <div className="about-row__text">
          <h2 className="about-heading">Our mission</h2>
          <p>
            To empower individuals and organizations with the knowledge, skills,
            guidance, and opportunities they need to make informed career and
            professional decisions.
          </p>
          <h2 className="about-heading about-heading--spaced">Our vision</h2>
          <p>
            To become a trusted leader in career development and consulting,
            creating a future where individuals are equipped to discover their
            potential, pursue meaningful careers, and contribute positively to
            society.
          </p>
        </div>
        <img
          className="about-row__img"
          src="/about/mission.jpg"
          alt="Young participants seated and listening during a bootcamp session"
          loading="lazy"
          decoding="async"
        />
      </section>

      {/* Approach */}
      <section className="about-row">
        <div className="about-row__text">
          <h2 className="about-heading">Our Approach</h2>
          <p>
            This section can differentiate 8TH Consulting from ordinary training
            organizations.
          </p>
          <p>
            We believe career development should be practical, engaging, and
            accessible.
          </p>
          <p>
            That's why our programs combine learning, exploration, interaction,
            creativity and real-world exposure to help participants connect what
            they learn with the world around them.
          </p>
        </div>
        <img
          className="about-row__img"
          src="/about/approach.jpg"
          alt="A volunteer coaching a student one-on-one at a table"
          loading="lazy"
          decoding="async"
        />
      </section>

      {/* Founder */}
      <section className="about-row about-row--founder">
        <figure className="about-founder__figure">
          <img
            className="about-founder__img"
            src="/about/founder.jpg"
            alt="Portrait of Damilola Fakorede, Founder of 8TH Consulting"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="about-founder__caption">
            <strong>Damilola Fakorede</strong>
            <span>Founder of 8TH Consulting</span>
          </figcaption>
        </figure>
        <div className="about-row__text">
          <h2 className="about-heading">Meet the founder</h2>
          <p>
            Damilola is passionate about learning and development, a passion
            that inspired her career transition from Customer Service to Human
            Resources.
          </p>
          <p>
            Driven by a deep desire to help children and young adults identify
            their passions and reach their greatest potential, she founded 8TH
            Consulting in 2022. 8TH Consulting is a Human Resources and Youth
            Development company offering HR services, Children and Teenagers
            Coaching, Training, and Bookstore & Library Services.
          </p>
          <p>
            She is the convener of "A Day Career Bootcamp for Kids" — a yearly
            event designed to help children discover their interests early in
            preparation for a purpose-driven career.
          </p>
          <p>
            A Certified Children and Teenagers Coach, Damilola has been
            working one-on-one with teenagers for over 8 years, guiding them to
            reach their highest potential in life.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;