import { lazy, Suspense, useEffect, useState } from "react";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

import MobileTechCard from "./MobileTechCard";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width:768px)");

    setIsMobile(media.matches);

    const handler = (e) => setIsMobile(e.matches);

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      {technologies.map((technology) => (
        <div key={technology.name}>
          {isMobile ? (
            <MobileTechCard technology={technology} />
          ) : (
            <div className="h-28 w-28">
              <Suspense fallback={null}>
                <BallCanvas icon={technology.icon} />
              </Suspense>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
