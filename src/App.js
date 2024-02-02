import './App.css';
import Countdown from './Components/Countdown';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Header2 from './Components/Header2';
import Hero1 from './Components/Hero1';
import Hero2 from './Components/Hero2';
import Hero3 from './Components/Hero3';
import Hero4 from './Components/Hero4';
import Hero5 from './Components/Hero5';
import Hero6 from './Components/Hero6';
import Hero7 from './Components/Hero7';
import Hero8 from './Components/Hero8';
import Hero9 from './Components/Hero9';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Hero1/>
      <Countdown/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
      <Hero6/>
      <Header2/>
      <Hero7/>
      <Hero8/>
      <Hero9/>
      <Footer/>
    </div>
  );
}

export default App;
