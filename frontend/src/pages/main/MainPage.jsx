import React, { Suspense, useRef } from "react";
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Html, useProgress, Stars } from "@react-three/drei";
import {
  MainWrapper,
  CanvasWrapper,
  FootNav,
  RocketMap,
  Newsmap,
} from "./MainPage.style";
import SearchMap from "../../components/main/SearchMap";
import { SolarSystem } from "../../components/scene/Solar_system";
import { FeGalaxy } from "../../components/scene/FeGalaxy";
import { SpaceStation } from "../../components/scene/Space_station";
import MapNav from "../../components/main/MapNav";
import DailyContent from "../../components/main/DailyContent";
import { CameraSight } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { useEffect } from "react";

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

function Loader() {
  const { progress } = useProgress();
  return <Html center>{Math.ceil(progress)} % 로딩중</Html>;
}

const MainPage = ({ ...props }) => {
  const [mapOpen, setMapOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  const openmap = () => {
    setMapOpen(!mapOpen);
  };

  const opennews = () => {
    setNewsOpen(!newsOpen);
  };

  const [getCamera, setGetCamera] = useRecoilState(CameraSight);

  const change = () => {
    setGetCamera({ fov: 110, zoom: [700, 200, 0], near: -1 });
    console.log("클릭");
  };

  const a = () => {
    console.log(getCamera);
  };

  useEffect(() => {
    console.log(getCamera);
    setGetCamera({ fov: 110, position: [0, 0, 300] });
  }, []);
  return (
    <MainWrapper>
      <CanvasWrapper>
        <Canvas className="tmp" camera={getCamera}>
          <CameraControls />
          <directionalLight position={[0, 0, 5]} />
          <Stars
            radius={300}
            depth={60}
            count={8000}
            factor={5}
            saturation={7}
            fade={false}
          />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={<Loader />}>
            <SolarSystem />
            <FeGalaxy onClick={() => a()} />
            <SolarSystem position={[-380, 0, -40]} />
            <FeGalaxy position={[-380, 0, -40]} />
            <SolarSystem position={[380, 0, -40]} />
            <FeGalaxy position={[380, 0, -40]} />
            <SpaceStation position={[600, 150, 0]} onClick={() => change()} />
          </Suspense>
        </Canvas>
      </CanvasWrapper>
      <FootNav>
        <div className="flexWrapInfo">
          <img src="" alt="유저 등급사진" />
          <div>유저 네임</div>
          <div>유저 경험치</div>
        </div>
        <div className="flexWrap">
          <div onClick={openmap}>
            <MapNav></MapNav>
          </div>
          <div onClick={opennews} className="news">
            <DailyContent></DailyContent>
            {newsOpen ? <Newsmap></Newsmap> : null}
          </div>
        </div>
      </FootNav>
      {mapOpen ? (
        <RocketMap>
          <SearchMap></SearchMap>
        </RocketMap>
      ) : null}
    </MainWrapper>
  );
};
export default MainPage;
