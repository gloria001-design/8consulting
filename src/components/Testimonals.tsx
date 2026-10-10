
import { FaQuoteLeft } from "react-icons/fa";
import "./style/Testimonal.css";

const testimonialsData = [
  {
    id: 1,
    quote:
      '"I came in completely unsure of my next step. By the end I had a clear plan, a stronger CV and the confidence to start applying. It changed how I see my career."',
    name: "Chidinma Eze",
    role: "Recent graduate & coaching client",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    quote:
      '"Our Year 10 students walked out of the session genuinely excited about their futures. The facilitators met them where they were and made careers feel real."',
    name: "Mrs. Funmi Adebayo",
    role: "Head of Guidance, Crownwood School",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    quote:
      '"We sponsored a cohort and received proper updates the whole way through. Seeing the impact on those young people made it our most rewarding partnership yet."',
    name: "David Mensah",
    role: "CSR Manager, Northbridge Group",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header Section */}
        <div className="testimonials-header">
          <span className="testimonials-label">Testimonials</span>
          <h2 className="testimonials-heading">
            What People Are Saying
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft size={24} />
              </div>

              <p className="testimonial-text">{item.quote}</p>

              <div className="testimonial-author">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="author-avatar"
                />

                <div className="author-info">
                  <h3 className="author-name">{item.name}</h3>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
