import React from 'react';
import { 
  UserCheck, 
  Presentation, 
  GraduationCap, 
  School, 
  Building2, 
  UserPlus 
} from 'lucide-react';
import './style/Solution.css';

const services = [
  {
    number: '01',
    icon: <UserCheck size={22} />,
    title: 'Career Consulting',
    description:
      'Helping individuals gain clarity around their career direction, opportunities and professional development.',
    featured: true,
  },
  {
    number: '02',
    icon: <Presentation size={22} />,
    title: 'Training & Workshops',
    description:
      'Practical learning experiences designed to develop relevant skills and knowledge.',
  },
  {
    number: '03',
    icon: <GraduationCap size={22} />,
    title: 'Early Career Exploration',
    description:
      'Programs that introduce children and young people to career possibilities from an early stage.',
  },
  {
    number: '04',
    icon: <School size={22} />,
    title: 'School Programs',
    description:
      'Career-development experiences designed for schools, students and educators.',
  },
  {
    number: '05',
    icon: <Building2 size={22} />,
    title: 'Corporate Consulting',
    description:
      'Supporting organizations with relevant consulting, training and people-development solutions.',
  },
  {
    number: '06',
    icon: <UserPlus size={22} />,
    title: 'Personal Branding',
    description:
      'Helping individuals understand how to position themselves professionally and communicate their value.',
  },
];

const Solution = () => {
  return (
   <section className='holder'> <section className="solutions-section">
      <div className="solutions-top">
        {/* Left Column */}
        <div className="solutions-image-column">
          <img
            src="https://i.postimg.cc/V6YY4Z9N/93edbdb5b36ef7904421650a139f2a9015099764.jpg"
            alt="BTH Consulting team event"
            className="solutions-image"
          />
          <div className="section-label">Programs & Events</div>
          <h2 className="solutions-heading">
            Solutions Designed Around <br />
            <span>Growth</span>
          </h2>
        </div>

        {/* Right Column */}
        <div className="solutions-intro">
          <div className="intro-content">
            <div className="section-label">Introduction</div>
            <h2 className="intro-heading">
              Empowering People to <br />
              Discover What's Possible.
            </h2>
            <p className="intro-text">
              At BTH Consulting Limited, we believe that the right knowledge,
              exposure and guidance can transform a person's career journey.
              Through career consulting, training, workshops and youth-focused
              development programs, we create opportunities for people to
              understand their strengths, explore possibilities and prepare for
              the future.
            </p>
          </div>
          <p className="intro-note">
            Upcoming and past experiences. This section grows as new programs
            are added.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service) => (
          <article
            className={`service-card ${
              service.featured ? 'service-card-featured' : ''
            }`}
            key={`${service.number}-${service.title}`}
          >
            <div className="service-card-top">
              <span className="service-icon">{service.icon}</span>
              <span className="service-number">{service.number}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section></section>
  );
};

export default Solution;