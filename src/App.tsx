import "./App.css";
import Contact from "./components/contact/contact.component";
import Features from "./components/features/features.component";
import Header from "./components/header/header.components";
import Home from "./components/home/home.component";
import Pricing from "./components/pricing/pricing.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
