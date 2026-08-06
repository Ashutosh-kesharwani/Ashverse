import { lazy, Suspense } from "react";
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
  Tech,
  Works,
} from "./components";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <AppToaster />

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
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

          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
