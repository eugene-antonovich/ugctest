import "./App.css";
import Contact from "./components/contact/contact.component";
import Features from "./components/features/features.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.components";
import Home from "./components/home/home.component";
import HowWork from "./components/how-its-work/how-work.component";
import Team from "./components/our-team/team.component";
import Pricing from "./components/pricing/pricing.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Pricing />
      <HowWork />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
