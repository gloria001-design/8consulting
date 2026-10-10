import React from 'react';
import { Award, Users, GraduationCap } from 'lucide-react';
import './style/WhyAndPartnership.css';

const whySteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We help people identify their interests, strengths and possibilities.',
    active: true,
  },
  {
    number: '02',
    title: 'Develop',
    description: 'We provide practical knowledge and experiences that support personal and professional growth.',
  },
  {
    number: '03',
    title: 'Connect',
    description: 'We create opportunities for participants to engage with professionals, organizations and new environments.',
  },
  {
    number: '04',
    title: 'Prepare',
    description: 'We help people develop the confidence and skills needed to navigate their next career step.',
  },
];

const partnerCards = [
  {
    icon: <Award size={22} />,
    title: 'Sponsor a Program',
    description: 'Support participants and help make career-development opportunities accessible.',
    featured: true,
  },
  {
    icon: <Users size={22} />,
    title: 'Partner With Us',
    description: 'Collaborate with BTH Consulting on programs and initiatives.',
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Bring Us to Your School',
    description: 'Give students access to career exploration, training and professional exposure.',
  },
];

const WhyAndPartnership = () => {
  return (
    <section className="why-partnership-section">
      <div className="section-container">
        
        {/* Top Section: Why BTH Consulting */}
        <div className="why-section">
          <span className="section-label">Why BTH Consulting?</span>
          <h2 className="section-heading">
            More Than Training. We <br /> Create Exposure.
          </h2>

          <div className="steps-grid">
            {whySteps.map((step) => (
              <div
                key={step.number}
                className={`step-card ${step.active ? 'step-card-active' : ''}`}
              >
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Partnership */}
        <div className="partnership-section">
          <span className="section-label">Partnership</span>
          <h2 className="section-heading">
            Let's Build the Future <br /> Together
          </h2>
          <p className="partnership-intro">
            Meaningful career development requires collaboration. We welcome
            organizations, schools, brands and individuals who share our
            commitment to developing the next generation.
          </p>

          <div className="partner-grid">
            {partnerCards.map((card, index) => (
              <div
                key={index}
                className={`partner-card ${card.featured ? 'partner-card-featured' : ''}`}
              >
                <div className="partner-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyAndPartnership;