import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import { FaMapMarkerAlt } from "react-icons/fa";
import { StarCatcher } from "../../components/scene/Star_catcher";
import { Compass } from "../../components/scene/Compass";
import { useNavigate } from "react-router-dom";
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Marker({ children, ...props }) {
  // This holds the local occluded state
  const [occluded, occlude] = useState();
  return (
    <Html
      // 3D-transform contents
      transform
      // Hide contents "behind" other meshes
      occlude
      // Tells us when contents are occluded (or not)
      onOcclude={occlude}
      // We just interpolate the visible state into css opacity and transforms
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
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
    console.log("클릭됨");
  };
  return (
    <Canvas camera={{ fov: 75, position: [0, 3, 13] }}>
      <ambientLight />
      <OrbitControls autoRotate={true} />
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
    </Canvas>
  );
};

export default NotFoundPage;
