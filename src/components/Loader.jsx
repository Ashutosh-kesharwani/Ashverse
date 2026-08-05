import { Html, useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';

const CanvasLoader = () => {
  const { progress } = useProgress();
  const displayProgress = Math.min(100, Math.round(progress));

  return (
    <Html center>
      <div className="canvas-loader" aria-live="polite" aria-busy="true">
        <div className="canvas-loader__stage">
          <div className="canvas-loader__scanner" aria-hidden="true">
            <span className="canvas-loader__ring canvas-loader__ring--1" />
            <span className="canvas-loader__ring canvas-loader__ring--2" />
            <span className="canvas-loader__ring canvas-loader__ring--3" />
            <span className="canvas-loader__sweep" />
          </div>

          <div className="canvas-loader__counter">
            <motion.span
              className="canvas-loader__value"
              key={displayProgress}
              initial={{ opacity: 0.5, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {displayProgress}
            </motion.span>
            <span className="canvas-loader__symbol">%</span>
          </div>
        </div>

        <div className="canvas-loader__track" aria-hidden="true">
          <div
            className="canvas-loader__fill"
            style={{ width: `${displayProgress}%` }}
          />
          <span
            className="canvas-loader__glow"
            style={{ left: `${displayProgress}%` }}
          />
        </div>

        <svg
          className="canvas-loader__wave"
          viewBox="0 0 220 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="loader-wave-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(145, 94, 255, 0)" />
              <stop offset="35%" stopColor="#915EFF" />
              <stop offset="65%" stopColor="#804dee" />
              <stop offset="100%" stopColor="rgba(0, 206, 168, 0)" />
            </linearGradient>
          </defs>
          <path
            className="canvas-loader__wave-path"
            d="M0 12 C30 2, 50 22, 80 12 S130 2, 160 12 S200 22, 220 12"
          />
        </svg>

        <p className="canvas-loader__status">
          <span className="canvas-loader__pulse" aria-hidden="true" />
          Initializing scene
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
