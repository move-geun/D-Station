// import { Canvas, useThree } from "@react-three/fiber";
// import { CubeTextureLoader } from "three";
// import React, { Suspense } from "react";
// import { OrbitControls } from "@react-three/drei";
// import { SpaceSuit } from "../../components/scene/Space_suit";
// import { SpaceStation } from "../../components/scene/Space_station";
// import { Moon } from "../../components/scene/Moon";
// import { Sun } from "../../components/scene/Sun";
// import { Taeria } from "../../components/scene/Taeria";
// import { PlanetTao } from "../../components/scene/Planet_tao_seti_prime";

// const MainPage = ({ ...props }) => {
//   const Nu = 100;
//   function SkyBox() {
//     const { scene } = useThree();
//     const loader = new CubeTextureLoader();
//     // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
//     const texture = loader.load([
//       "../assets/1.jpg",
//       "../assets/2.jpg",
//       "../assets/3.jpg",
//       "../assets/4.jpg",
//       "../assets/5.jpg",
//     ]);

//     // Set the scene background property to the resulting texture.
//     scene.background = texture;
//     return null;
//   }
//   return (
//     <Canvas camera={{ fov: 75, position: [100, 50, 250] }}>
//       <OrbitControls autoRotate={true} />
//       <directionalLight position={[0, 0, 5]} />
//       <ambientLight />
//       <Suspense>
//         <pointLight position={[10, 10, 10]} />
//         <SpaceStation />
//         <SpaceSuit position={[-30, 20, -30]} />
//         <SpaceSuit position={[70, 70, 40]} />
//         <Taeria position={[20, 120, 10]} />
//         <Sun position={[-70, 100, 40]} />
//         <PlanetTao position={[-100, 80, 60]} />
//         <Moon position={[120, 100, -20]} />
//         <Taeria
//           position={[
//             Math.floor(Math.random() * Nu),
//             Math.floor(Math.random() * Nu),
//             Math.floor(Math.random() * Nu),
//           ]}
//         />
//         <PlanetTao
//           position={[
//             Math.floor(Math.random() * Nu),
//             Math.floor(Math.random() * Nu),
//             Math.floor(Math.random() * Nu),
//           ]}
//         />
//         <Taeria
//           position={[
//             Math.floor(Math.random() * Nu),
//             Math.floor(Math.random() * Nu),
//             Math.floor(Math.random() * Nu),
//           ]}
//         />
//         <PlanetTao
//           position={[
//             Math.floor(Math.random() * Nu),
//             Math.floor(Math.random() * Nu),
//             Math.floor(Math.random() * Nu),
//           ]}
//         />
//       </Suspense>
//       <SkyBox />
//     </Canvas>
//   );
// };
// export default MainPage;

import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });
const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
    />
  );
};

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "../assets/1.jpg",
    "../assets/2.jpg",
    "../assets/3.jpg",
    "../assets/4.jpg",
    "../assets/5.jpg",
    "../assets/3.jpg",
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

// Geometry
function Sphere() {
  const { scene, gl } = useThree();
  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);

  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene));

  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <directionalLight intensity={0.5} />
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        color="white"
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  );
}
const MainPage = () => {
  return (
    <Canvas className="canvas">
      <CameraControls />
      <Sphere />
      <SkyBox />
    </Canvas>
  );
};
export default MainPage;
