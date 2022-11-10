import React, { Suspense, useRef } from "react";
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Html, useProgress } from "@react-three/drei";
import { Galaxy } from "../../components/scene/Galaxy";
import { NeedSomeSpace } from "../../components/scene/Need_some_space";
import { SolarSystem } from "../../components/scene/Solar_system";
extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={false}
      enableZoom={true}
    />
  );
};

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    "../assets/6.jpg",
    "../assets/6.jpg",
    "../assets/6.jpg",
    "../assets/6.jpg",
    "../assets/6.jpg",
    "../assets/6.jpg",
  ]);

  scene.background = texture;
  return null;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % 로딩중</Html>;
}

const MainPage = ({ ...props }) => {
  return (
    <Canvas camera={{ fov: 100, position: [100, 50, 700] }}>
      <CameraControls />
      <directionalLight position={[0, 0, 5]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<Loader />}>
        <Galaxy />
        <NeedSomeSpace />
        <SolarSystem />
      </Suspense>
      <SkyBox />
    </Canvas>
  );
};
export default MainPage;

// import React, { useRef } from "react";
// import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
// import {
//   CubeTextureLoader,
//   CubeCamera,
//   WebGLCubeRenderTarget,
//   RGBAFormat,
//   LinearMipmapLinearFilter,
// } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { MainWrapper, WebWrapper } from "./MainPage.style";

// extend({ OrbitControls });

// const CameraControls = () => {
//   // Get a reference to the Three.js Camera, and the canvas html element.
//   // We need these to setup the OrbitControls class.
//   // https://threejs.org/docs/#examples/en/controls/OrbitControls

//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();

//   // Ref to the controls, so that we can update them on every frame using useFrame
//   const controls = useRef();
//   useFrame(() => controls.current.update());
//   return (
//     <orbitControls
//       ref={controls}
//       args={[camera, domElement]}
//       autoRotate={false}
//       enableZoom={true}
//     />
//   );
// };

// // Loads the skybox texture and applies it to the scene.
// function SkyBox() {
//   const { scene } = useThree();
//   const loader = new CubeTextureLoader();
//   // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
//   const texture = loader.load([
//     "../assets/1.jpg",
//     "../assets/2.jpg",
//     "../assets/3.jpg",
//     "../assets/4.jpg",
//     "../assets/3.jpg",
//     "../assets/2.jpg",
//   ]);

//   // Set the scene background property to the resulting texture.
//   scene.background = texture;
//   return null;
// }

// // Geometry
// function Sphere() {
//   const { scene, gl } = useThree();
//   // The cubeRenderTarget is used to generate a texture for the reflective sphere.
//   // It must be updated on each frame in order to track camera movement and other changes.
//   const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
//     format: RGBAFormat,
//     generateMipmaps: true,
//     minFilter: LinearMipmapLinearFilter,
//   });
//   const cubeCamera = new CubeCamera(1000, 3000, cubeRenderTarget);
//   cubeCamera.position.set(0, 0, 0);
//   scene.add(cubeCamera);

//   // Update the cubeCamera with current renderer and scene.
//   useFrame(() => cubeCamera.update(gl, scene));

//   return (
//     <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
//       <directionalLight intensity={0.5} />
//       <sphereGeometry attach="geometry" args={[2, 32, 32]} />
//       <meshBasicMaterial
//         attach="material"
//         envMap={cubeCamera.renderTarget.texture}
//         color="white"
//         roughness={0.1}
//         metalness={1}
//       />
//     </mesh>
//   );
// }
// function Sphere2() {
//   const { scene, gl } = useThree();
//   // The cubeRenderTarget is used to generate a texture for the reflective sphere.
//   // It must be updated on each frame in order to track camera movement and other changes.
//   const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
//     format: RGBAFormat,
//     generateMipmaps: true,
//     minFilter: LinearMipmapLinearFilter,
//   });
//   const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
//   cubeCamera.position.set(0, 0, 0);
//   scene.add(cubeCamera);

//   // Update the cubeCamera with current renderer and scene.
//   useFrame(() => cubeCamera.update(gl, scene));

//   return (
//     <mesh visible position={[5, 0, 0]} rotation={[0, 0, 0]} castShadow>
//       <directionalLight intensity={0.5} />
//       <sphereGeometry attach="geometry" args={[2, 32, 32]} />
//       <meshBasicMaterial
//         attach="material"
//         envMap={cubeCamera.renderTarget.texture}
//         color="white"
//         roughness={0.1}
//         metalness={1}
//       />
//     </mesh>
//   );
// }
// function Sphere3() {
//   const { scene, gl } = useThree();
//   // The cubeRenderTarget is used to generate a texture for the reflective sphere.
//   // It must be updated on each frame in order to track camera movement and other changes.
//   const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
//     format: RGBAFormat,
//     generateMipmaps: true,
//     minFilter: LinearMipmapLinearFilter,
//   });
//   const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
//   cubeCamera.position.set(0, 0, 0);
//   scene.add(cubeCamera);

//   // Update the cubeCamera with current renderer and scene.
//   useFrame(() => cubeCamera.update(gl, scene));

//   return (
//     <mesh visible position={[-5, 0, 0]} rotation={[0, 0, 0]} castShadow>
//       <directionalLight intensity={0.5} />
//       <sphereGeometry attach="geometry" args={[2, 32, 32]} />
//       <meshBasicMaterial
//         attach="material"
//         envMap={cubeCamera.renderTarget.texture}
//         color="white"
//         roughness={0.1}
//         metalness={1}
//       />
//     </mesh>
//   );
// }
// function Sphere4() {
//   const { scene, gl } = useThree();
//   // The cubeRenderTarget is used to generate a texture for the reflective sphere.
//   // It must be updated on each frame in order to track camera movement and other changes.
//   const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
//     format: RGBAFormat,
//     generateMipmaps: true,
//     minFilter: LinearMipmapLinearFilter,
//   });
//   const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
//   cubeCamera.position.set(0, 0, 0);
//   scene.add(cubeCamera);

//   // Update the cubeCamera with current renderer and scene.
//   useFrame(() => cubeCamera.update(gl, scene));

//   return (
//     <mesh visible position={[0, 5, 0]} rotation={[0, 0, 0]} castShadow>
//       <directionalLight intensity={0.5} />
//       <sphereGeometry attach="geometry" args={[2, 32, 32]} />
//       <meshBasicMaterial
//         attach="material"
//         envMap={cubeCamera.renderTarget.texture}
//         color="white"
//         roughness={0.1}
//         metalness={1}
//       />
//     </mesh>
//   );
// }
// function Sphere5() {
//   const { scene, gl } = useThree();
//   // The cubeRenderTarget is used to generate a texture for the reflective sphere.
//   // It must be updated on each frame in order to track camera movement and other changes.
//   const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
//     format: RGBAFormat,
//     generateMipmaps: true,
//     minFilter: LinearMipmapLinearFilter,
//   });
//   const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
//   cubeCamera.position.set(0, 0, 0);
//   scene.add(cubeCamera);

//   // Update the cubeCamera with current renderer and scene.
//   useFrame(() => cubeCamera.update(gl, scene));

//   return (
//     <mesh visible position={[0, -5, 0]} rotation={[0, 0, 0]} castShadow>
//       <directionalLight intensity={0.5} />
//       <sphereGeometry attach="geometry" args={[2, 32, 32]} />
//       <meshBasicMaterial
//         attach="material"
//         envMap={cubeCamera.renderTarget.texture}
//         color="white"
//         roughness={0.1}
//         metalness={1}
//       />
//     </mesh>
//   );
// }

// const MainPage = () => {
//   return (
//     <MainWrapper>
//       <Canvas className="canvas">
//         <CameraControls />
//         <Sphere />
//         <Sphere2 />
//         <Sphere3 />
//         <Sphere4 />
//         <Sphere5 />
//         <SkyBox />
//       </Canvas>
//       <WebWrapper>
//         <div>들어가나</div>
//       </WebWrapper>
//     </MainWrapper>
//   );
// };
// export default MainPage;
