import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      className="flex select-none flex-col items-center justify-center"
    >
      <span className="canvas-loader" />

      <p className="blue-text-gradient mt-8 text-sm font-semibold tracking-wider">
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
