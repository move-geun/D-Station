import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars, Html } from "@react-three/drei";

import EarthDayMap from "../../../assets/images/PebblesColor.jpg";
import EarthNormalMap from "../../../assets/images/PebblesBump.png";
import EarthSpecularMap from "../../../assets/images/PebblesColor.jpg";
import EarthCloudsMap from "../../../assets/images/earthCloud.png";

import SatelliteColor from "../../../assets/images/canyonRockColor.jpg";
import SatelliteBump from "../../../assets/images/canyonRockBump.png";
import SatelliteSpecular from "../../../assets/images/canyonRockSpecular.jpg";
import SatelliteNormal from "../../../assets/images/canyonRockNormal.jpg";

export function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();

  //회전을 위해
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color="#a89410" position={[2, 1, 1]} intensity={1} />
      <Stars
        radius={300}
        depth={60}
        count={7000}
        factor={7}
        saturation={0}
        fade={false}
      />

      {/* <mesh ref={cloudsRef} position={[3.5, 0.3, -2]}> */}
      {/* sphereGeometry의 인자는 순서대로 반지름, 너비, 높이 이다 */}
      {/* <sphereGeometry args={[2.55, 32, 32]} />
          <meshPhongMaterial
            map={cloudsMap}
            opacity={1}
            depthWrite={true}
            transparent={true}
            side={THREE.DoubleSide}
          />
        </mesh> */}

      <mesh ref={earthRef} position={[-2, 0, -4]}>
        <sphereGeometry args={[3.5, 32, 32]} />

        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={100} />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}

export function Sate1() {
  const [colorMap, bumpMap, specularMap, normalMap] = useLoader(TextureLoader, [
    SatelliteColor,
    SatelliteBump,
    SatelliteSpecular,
    SatelliteNormal,
  ]);
  const [hovered, setHover] = useState(false);
  const sateRef = useRef();

  //회전을 위해
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    sateRef.current.rotation.y = elapsedTime / 6;
    //   cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <mesh
        ref={sateRef}
        position={[2, 0, 0]}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        {hovered ? <Html position={[2, 0.6, 0]}>자료구조</Html> : <></>}

        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          metalness={0.4}
          bumpMap={bumpMap}
          normalMap={normalMap}
          bumpScale={0.3}
        />
      </mesh>
    </>
  );
}

const RoadPlanetThree = () => {
  return (
    <>
      <Canvas>
        <directionalLight position={[0, 5, 0]} />
        <ambientLight />
        <Earth />
      </Canvas>
    </>
  );
};

export default RoadPlanetThree;
