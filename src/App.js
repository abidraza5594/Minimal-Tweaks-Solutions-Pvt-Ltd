
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HerosectionLeft from './Components/HeroSection/HerosectionLeft';
import HeroRightSection from './Components/HeroSection/HeroRightSection';
import ContentPartner from './Components/ContentPartner/ContentPartner';
import Sectionmainimg from './Components/Section3MainImg/Sectionmainimg';
import Section4 from './Components/Section4/Section4';
import Section5 from './Components/Section5/Section5';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main_hero_sec">
        <HerosectionLeft/>
        <HeroRightSection/>
      </div>
      <ContentPartner/>
      <Sectionmainimg/>
      <Section4/>
      <Section5/>
    </div>
  );
}

export default App;
