import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Expertise from "./components/Expertise";
import Testimonial from "./components/Testimonial";
import Sharing from "./components/Sharing";
import Marquee from "./components/Marquee";
import AiSection from "./components/AiSection";
import Footer from "./components/Footer";
import FloatingBadge from "./components/FloatingBadge";
import "./index.css";
import AutoLogoSlider from "./components/slider";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Expertise />
        <Testimonial />
        <Sharing />
        {/* <Marquee /> */}
        {/* <AutoLogoSlider /> */}
        <AiSection />
      </main>
      <Footer />
      <FloatingBadge />
    </div>
  );
}
