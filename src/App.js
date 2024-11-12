import Navbar from "./components/Navbar";
import Filtersection from "./components/Filtersection";
import HowItWorks from "./components/HowItsWorks";
import MarketplaceSection from "./components/MarketplaceSection";
import './index.css';
function App(){
  return(
    <div>
      <Navbar />
      <Filtersection />
      <HowItWorks />
      <MarketplaceSection />
    </div>
  );
}
export default App;