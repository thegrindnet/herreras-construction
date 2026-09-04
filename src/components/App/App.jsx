import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import TrustBar from "../TrustBar/TrustBar.jsx";
import Services from "../Services/Services.jsx";
import About from "../About/About.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import ServiceArea from "../ServiceArea/ServiceArea.jsx";
import Faq from "../Faq/Faq.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
// import CommercialExperience from "../CommercialExperience/CommercialExperience.jsx";

function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        {/* <CommercialExperience /> */}
        <About />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
