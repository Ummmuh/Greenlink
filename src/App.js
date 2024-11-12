import Navbar from "./components/Navbar";
import Filtersection from "./components/Filtersection";
import HowItWorks from "./components/HowItsWorks";
import MarketplaceSection from "./components/MarketplaceSection";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import './index.css';
function App(){
  return(
    <div>
      <Navbar />
      <Filtersection />
      <HowItWorks />
      <MarketplaceSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default App;