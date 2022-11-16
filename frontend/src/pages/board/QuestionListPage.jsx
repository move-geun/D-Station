import React from "react";
import { Function, Container, Page } from "./QuestionListPage.style";
import Question from "../../components/board/Question";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import { getUserId } from "../../api/JWT";
import { Suspense, useRef } from "react";
import { Stars, useProgress, Html } from "@react-three/drei";
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { SpaceStation } from "../../components/scene/Space_station";

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

const QuestionListPage = () => {
  const userId = getUserId();

  return (
    <>
      <Canvas camera={{ fov: 110, position: [0, 0, 0] }}>
        <CameraControls />
        <directionalLight position={[0, 0, 5]} />
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        <Suspense fallback={<Loader />}>
          <Stars
            radius={300}
            depth={60}
            count={8000}
            factor={5}
            saturation={7}
            fade={false}
          />
          <SpaceStation position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
      <Function>
        {userId ? (
          <div className="write">
            <a className="writeBtn" href="./writequestion">
              <CreateIcon />
            </a>
          </div>
        ) : null}
        <div className="search">
          <input className="searchInput" type="text" placeholder="search" />
          <a className="searchBtn" href="#">
            <SearchIcon />
          </a>
        </div>
      </Function>
      <Container>
        <Question />
      </Container>
    </>
  );
};

export default QuestionListPage;
