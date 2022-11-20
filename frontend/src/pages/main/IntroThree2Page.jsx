import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import Text from "./Text";

import EarthDayMap from "../../assets/images/earthmap1k.jpg";
import EarthNormalMap from "../../assets/images/earthbump.jpg";
import EarthSpecularMap from "../../assets/images/specularmap.jpg";
import EarthCloudsMap from "../../assets/images/earthCloud.png";

// import EarthDayMap from "../../../public/assets/earthbump.jpg";
// import EarthNormalMap from "../../../public/assets/earthmap1k.jpg";
// import EarthSpecularMap from "../../../public/assets/specularmap.jpg";
// import EarthCloudsMap from "../../../public/assets/earthCloud.png";

export function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();
  //회전을 위해
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color="#131313" position={[0, 1, 1]} intensity={0.4} />
      <Stars
        radius={300}
        depth={60}
        count={7000}
        factor={7}
        saturation={0}
        fade={false}
      />

      <mesh ref={cloudsRef} position={[3.5, 0.3, -2]}>
        {/* sphereGeometry의 인자는 순서대로 반지름, 너비, 높이 이다 */}
        <sphereGeometry args={[2.55, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={1}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={earthRef} position={[3.5, 0.3, -2]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        {/* <meshPhongMaterial specularMap={specularMap} /> */}
        <meshStandardMaterial
          map={colorMap}
          bumpMap={normalMap}
          bumpScale={10}
          // normalMap={normalMap}
          // metalness={0.2}
          roughness={100}
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
    </>
  );
}

function Jumbo({ children }) {
  const ref = useRef();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      startBtnHandler();
    }
  }, [active]);

  const startBtnHandler = () => {
    console.log("click");
    navigate("/login");
  };
  return (
    <Text
      position={[-3.5, 0, 0]}
      // lineHeight={0.8}
      font="../../assets/fonts/Ki-Medium.ttf"
      onClick={() => setActive(true)}
    >
      {children}
    </Text>
  );
}

function Rig({ children }) {
  const ref = useRef();
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 4.5), 0.05);
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 20,
      0.1
    );
  });
  return <group ref={ref}>{children}</group>;
}

function Box(props) {
  const mesh = useRef();
  const navigate = useNavigate();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      startBtnHandler();
    }
  }, [active]);

  const startBtnHandler = () => {
    navigate("/login");
  };
  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={() => setActive(true)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[2, 0.7, 0.3]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const IntroThree2Page = () => {
  return (
    <>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }}>
        <directionalLight position={[0, 5, 0]} />
        <ambientLight />
        <Jumbo>{`START\n`}</Jumbo>
        <Earth />
        {/* <Box position={[-3, -1, 0]} /> */}
        <Rig />
      </Canvas>
    </>
  );
};

export default IntroThree2Page;
