import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useMemo, useRef } from "react";

const STAR_COUNT = 1000;

const Stars = (props) => {
  const ref = useRef();

  const sphere = useMemo(
    () =>
      random.inSphere(new Float32Array(STAR_COUNT * 3), {
        radius: 1.25,
      }),
    []
  );

  useFrame((state, delta) => {
    if (!ref.current) return;

    // Smooth continuous rotation
    ref.current.rotation.x -= delta * 0.035;
    ref.current.rotation.y -= delta * 0.025;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#8FD8FF"
          size={0.0042}
          sizeAttenuation
          depthWrite={false}
          opacity={0.95}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
