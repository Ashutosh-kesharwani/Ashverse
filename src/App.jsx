import { BrowserRouter } from "react-router-dom";

import {
  About,
  AppToaster,
  Contact,
  Experience,
  Footer,
  Hero,
  Highlights,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components/index.js";

const App = () => {
  return (
    <BrowserRouter>
      <AppToaster />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Highlights />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
