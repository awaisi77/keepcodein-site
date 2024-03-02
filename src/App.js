import Header from "./components/Header";
import MarqueeSection from "./components/MarqueeSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import CustomTech from "./components/CustomTech";
import FAQs from "./components/FAQs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import LayeredSLider from "./components/LayeredSLider";
import HeroSec from "./components/HeroSec";

function App() {
  
  return (
    <>
      <Header />

      <HeroSec />
      <MarqueeSection id="technologies"/>
      <Services />
      <Explore id="explore"/>
      <AboutUs id="header"/>
      <CustomTech id="header"/>
      <FAQs id="header"/>
      <ContactUs id="header"/>
    

    <Footer />

    </>
  );
}

export default App;
