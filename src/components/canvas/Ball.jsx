import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float
      speed={0.8} // Slower floating/rotation
      rotationIntensity={0.4} // Much slower rotation
      floatIntensity={1.2} // Less up-down movement
    >
      {/* Brighter lighting */}
      <ambientLight intensity={0.55} />

      <directionalLight position={[2, 2, 2]} intensity={1.4} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#fffdf7" // Slightly brighter cream-white
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          roughness={0.18} // Smoother surface
          metalness={0.18} // Slight shine
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
