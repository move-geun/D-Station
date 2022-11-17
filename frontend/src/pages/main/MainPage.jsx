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
import { TestBack } from "../../components/scene/TestBack";
import { TestFront } from "../../components/scene/TestFront";
import SearchMap from "../../components/main/SearchMap";
import MapNav from "../../components/main/MapNav";
import DailyContent from "../../components/main/DailyContent";
import { CameraSight } from "../../recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoSelector } from "../../recoil/selector";
import { useState, useEffect } from "react";

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
  const user = useRecoilValue(userInfoSelector);
  const imgsrc = "../assets/" + user.imageUrl;

  const openmap = () => {
    setMapOpen(!mapOpen);
  };

  const closemap = () => {
    setMapOpen(false);
    setNewsOpen(false);
  };
  const opennews = () => {
    setNewsOpen(!newsOpen);
  };

  const [getCamera, setGetCamera] = useRecoilState(CameraSight);

  const change = () => {
    setGetCamera({ fov: 110, zoom: [700, 200, 0], near: -1 });
    console.log("클릭");
  };

  // const check = useRecoilValue(userInfoSelector);

  return (
    <MainWrapper>
      <CanvasWrapper onClick={closemap}>
        <Canvas className="tmp" camera={getCamera}>
          <CameraControls />
          <directionalLight position={[0, 0, 5]} />
          <Suspense fallback={<Loader />}>
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
            <TestBack />
            <TestFront />
          </Suspense>
        </Canvas>
      </CanvasWrapper>
      <FootNav>
        <div className="flexWrapInfo">
          <img className="profile" src={imgsrc} alt="유저 등급사진" />
          <div>
            <div>안녕하세요, {user.userNickname}님</div>
            <div>🕹{user.rankName}</div>
          </div>
          <div className="expBar">
            {user.exp >= 300 ? null : <div className="per">{user.expPer}%</div>}
            <div className="perbox">
              {user.exp >= 300 ? (
                <div className="nowper" style={{ width: "100%" }}></div>
              ) : (
                <div
                  className="nowper"
                  style={{ width: `${user.expPer}%` }}
                ></div>
              )}
            </div>
          </div>
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
