import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader.jsx';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={2} />
      {/* Main light to make our model little bit brighter */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Primitive is used for for changing size , pos , rotation of model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.65}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  /*
  Below UseEffect is used for checking if we currently on mobile , if yes , then we just update isMobile so that later on when it becomes we can style our 3D model
  */

  // So here what we do is that intead of calling set func directly in useEffect , to avoid one extra render we initialie the value of variable by def at time of declare state var

  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia('(max-width: 500px)').matches
  );

  useEffect(() => {
    // Add a listener for changes to screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // define callback func to handle changes in media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add callback func as a listener to listen for change to media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // In react good practice
    // Always , Remove listener when component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }} /* Here Camera is property which most imp for every 3D model , which basically tell us from where we are looking it from , from frotn back like that and here we pass some props into pos : x,y,z and fov -> 25 : feild of view , how wide*/
      gl={{
        preserveDrawingBuffer: true,
      }} /* This is needed for properly render our model */
    >
      {/* This we get from react which allow us to use a loader which is going to be shown while our model is loading  */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />{' '}
        {/* These controlls are use for moving our model left or right like that within a orbit center
        Props
        > enableZoom : false : we dont want to zoomIn in model
        > maxPolarAngle and minPolarAngle : use for as we dont want to rotate it up dowm , we want to only in specific angle with is PI/2 -> 180 deg
        > xaxis rotate
        */}
        <Computers isMobile={isMobile} /> {/* Use above computer component */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
