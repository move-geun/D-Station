import React, { useRef } from "react";

import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

import EarthDayMap from "../../../../assets/images/PLogo.png";
import EarthBumpMap from "../../../../assets/images/PebblesBump.png";
import EarthSpecularMap from "../../../../assets/images/PebblesColor.jpg";
import PebbleNormal from "../../../../assets/images/PebblesNormal.jpg";

import { Sll1 } from "../Satellite/PythonPlanet/Sll1";
import { Sll2 } from "../Satellite/PythonPlanet/Sll2";
import { Sll3 } from "../Satellite/PythonPlanet/Sll3";
import { Sll4 } from "../Satellite/PythonPlanet/Sll4";
import { Sll5 } from "../Satellite/PythonPlanet/Sll5";
import { Sll6 } from "../Satellite/PythonPlanet/Sll6";

export function PlanetPython() {
  const [colorMap, bumpMap, specularMap, normalMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthBumpMap,
    EarthSpecularMap,
    PebbleNormal,
  ]);

  const object3D = new THREE.Object3D();
  const objRef = useRef();
  const earthRef = useRef();
  const moonRef = useRef();

  //회전을 위해
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    objRef.current.rotation.y += 0.0015;
    earthRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color="#2a2503" position={[2, 1, 1]} intensity={1} />
      <object3D ref={objRef}>
        <mesh ref={earthRef}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial
            map={colorMap}
            metalness={0.4}
            normalMap={normalMap}
            displacementMap={bumpMap}
            displacementScale={0.5}
            roughness={0.8}
          />

          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </mesh>
        <Sll1 ref={moonRef} />
        <Sll2 />
        <Sll3 />
        <Sll4 />
        <Sll5 />
        <Sll6 />
      </object3D>
    </>
  );
}
