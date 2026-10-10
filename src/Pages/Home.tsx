import Solution from "../components/Solution";
import Hero from "../components/Hero";
import FeaturedPrograms from "../components/FeaturedPrograms";
import WhyAndPartnership from "../components/WhyAndPartnership";
import Testimonials from "../components/Testimonals";
import FutureDirection from "../components/FutureDirection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Solution />
      <FeaturedPrograms />
      <WhyAndPartnership />
      <Testimonials />
      <FutureDirection />
    </div>
  );
};

export default Home;