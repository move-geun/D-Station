import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import { StarCatcher } from "../../components/scene/Star_catcher";
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
const NotFoundPage = () => {
  return (
    <div>
      <img
        src="https://d-station.s3.ap-northeast-2.amazonaws.com/ham.jpg"
        alt=""
      />
      {/* <Canvas camera={{ fov: 75, position: [8, 8, 2] }}>
        <OrbitControls autoRotate={true} />
        <ambientLight />
        <directionalLight position={[0, 0, 5]} />
        <Suspense fallback={<Loader />}>
          <StarCatcher />
        </Suspense>
        <Html> 404 Not Found</Html>
      </Canvas> */}
    </div>
  );
};

export default NotFoundPage;
