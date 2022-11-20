import React, { Suspense, useState, useRef, useEffect } from "react";
import http from "../../api/http";
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Html, useProgress } from "@react-three/drei";
import { CubeTextureLoader } from "three";
import { FaMapMarkerAlt } from "react-icons/fa";
import { StarCatcher } from "../../components/scene/Star_catcher";
import { Compass } from "../../components/scene/Compass";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserLogin } from "../../recoil/atoms";

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
    "../assets/1.jpg",
    "../assets/1.jpg",
    "../assets/1.jpg",
    "../assets/1.jpg",
    "../assets/1.jpg",
    "../assets/4.jpg",
  ]);

  scene.background = texture;
  return null;
}

function Marker({ children, ...props }) {
  const [occluded, occlude] = useState();
  return (
    <Html
      transform
      occlude
      onOcclude={occlude}
      style={{
        transition: "all 0.2s",
        opacity: occluded ? 0 : 1,
        transform: `scale(${occluded ? 0.25 : 1})`,
      }}
      {...props}
    >
      {children}
    </Html>
  );
}
const NotFoundPage = () => {
  const [rancs, setRanCs] = useState(null);
  const isLogin = useRecoilValue(UserLogin);
  const navigate = useNavigate();
  const goMain = () => {
    // 로그인 돼있으면 main
    if (isLogin) {
      navigate("/main");
      // 아니면 intro
    } else {
      navigate("/");
    }
  };

  const cs = () => {
    http.connect_axios
      .get("/cs")
      .then((res) => {
        setRanCs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <div>{Math.ceil(progress)} % 로딩중</div>
        <br />
        {rancs ? (
          <div style={{ width: "400px" }}>
            <div>{rancs.csSubject}</div>
            <div style={{ "white-space": "normal", "word-break": "keep-all" }}>
              {rancs.csContnet}
            </div>
          </div>
        ) : null}
      </Html>
    );
  }

  useEffect(() => {
    cs();
  }, []);

  return (
    <Canvas camera={{ fov: 75, position: [0, 3, 13] }}>
      <CameraControls />
      <directionalLight position={[0, 0, 5]} />
      <Suspense fallback={<Loader />}>
        <group>
          <Marker rotation={[0, 0, 0]} position={[-3, 0, 0]}>
            <div
              style={{
                position: "absolute",
                fontSize: 40,
                letterSpacing: -0.5,
                left: 50,
              }}
            >
              길을 잃어따...
            </div>
            <FaMapMarkerAlt style={{ color: "indianred" }} fontSize={40} />
          </Marker>
          <Marker rotation={[0, 0, 0]} position={[-2.5, -4, 0]}>
            <div
              style={{
                position: "absolute",
                fontSize: 20,
                letterSpacing: -0.5,
                left: 50,
              }}
            >
              메인으로 가기
            </div>
          </Marker>
          <StarCatcher />
        </group>
        <Compass onClick={() => goMain()} />
      </Suspense>
      <SkyBox />
    </Canvas>
  );
};

export default NotFoundPage;
