import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

import { styles } from "../styles";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    setIsMobile(media.matches);

    const handler = (e) => setIsMobile(e.matches);

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative w-full min-h-screen mx-auto">
      {/* Hero Text */}
      <div
        className={`absolute top-28 left-0 right-0 z-10 max-w-7xl mx-auto ${styles.paddingX}`}
      >
        {/* pointer-events-none lets mouse events pass through */}
        <div className="pointer-events-none flex flex-row items-start gap-5">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{" "}
              <span className="blue-text-gradient">
                Ashutosh <br />
                Kesharwani
              </span>
            </h1>

            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I build responsive, scalable
              <br className="sm:block hidden" />
              full-stack web applications.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      {!isMobile && (
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <ComputersCanvas />
          </Suspense>
        </div>
      )}

      {/* Mobile */}
      {isMobile && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <img
            src="/computer.png"
            alt="Computer"
            className="w-full max-w-sm object-contain animate-float"
          />
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 z-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
