import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

import { styles } from "../styles";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      {/* Hero Content */}
      <div
        className={`absolute inset-0 top-28 z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="blue-text-gradient">
              Ashutosh <br />
              Kesharwani
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build responsive, scalable <br className="sm:block hidden" />
            full-stack web applications.
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <ComputersCanvas />
        </Suspense>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 z-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
