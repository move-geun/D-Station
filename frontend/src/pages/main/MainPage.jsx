import { Canvas, useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { SpaceSuit } from "../../components/scene/Space_suit";
import { SpaceStation } from "../../components/scene/Space_station";
import { Moon } from "../../components/scene/Moon";
import { Sun } from "../../components/scene/Sun";
import { Taeria } from "../../components/scene/Taeria";
import { PlanetTao } from "../../components/scene/Planet_tao_seti_prime";
import { Space } from "../../components/scene/Space";

const MainPage = ({ ...props }) => {
  const Nu = 100;
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
    ]);

    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null;
  }
  return (
    <Canvas camera={{ fov: 75, position: [100, 50, 250] }}>
      <OrbitControls autoRotate={true} />
      <directionalLight position={[0, 0, 5]} />
      <ambientLight />
      <Space />
      {/* <pointLight position={[10, 10, 10]} /> */}
      <SpaceStation />
      <SpaceSuit position={[-30, 20, -30]} />
      <SpaceSuit position={[70, 70, 40]} />
      <Taeria position={[20, 120, 10]} />
      <Sun position={[-70, 100, 40]} />
      <PlanetTao position={[-100, 80, 60]} />
      <Moon position={[120, 100, -20]} />
      <Taeria
        position={[
          Math.floor(Math.random() * Nu),
          Math.floor(Math.random() * Nu),
          Math.floor(Math.random() * Nu),
        ]}
      />
      <PlanetTao
        position={[
          Math.floor(Math.random() * Nu),
          Math.floor(Math.random() * Nu),
          Math.floor(Math.random() * Nu),
        ]}
      />
      <Taeria
        position={[
          Math.floor(Math.random() * Nu),
          Math.floor(Math.random() * Nu),
          Math.floor(Math.random() * Nu),
        ]}
      />
      <PlanetTao
        position={[
          Math.floor(Math.random() * Nu),
          Math.floor(Math.random() * Nu),
          Math.floor(Math.random() * Nu),
        ]}
      />
      <SkyBox />
    </Canvas>
  );
};
export default MainPage;
