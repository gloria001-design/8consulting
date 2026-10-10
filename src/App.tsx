
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./Pages/Home";
import AboutPage from "./components/AboutPage";
import GalleryHero from "./components/Gallery/GalleryHero";
import GallerySection from "./components/Gallery/GallerySection";

// Header and Footer stay on every page
const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const GalleryPage = () => (
  <>
    <GalleryHero />
    <GallerySection />
  </>
);

const App = () => (
  <>
    <ScrollToTop />
      <ScrollToTopButton />

    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add /service and /contact here later */}
      </Route>
    </Routes>
  </>
);

export default App;
