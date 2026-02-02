import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Packages from "./components/Packages/Packages";
import Offers from "./components/Offers/Offers";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import FrequentlyAskQs from "./components/FrequentlyAskQs/FrequentlyAskQs";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Team />
      <Offers />
      <Packages />
      <FrequentlyAskQs />
      <Contact />
      <About />
    </>
  );
}

export default App;
