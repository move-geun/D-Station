import { Canvas } from "@react-three/fiber";
import { AstronautOne } from "../../components/scene/Astronaut_1";
import { OrbitControls } from "@react-three/drei";

const TmpPage = ({ ...props }) => {
  return (
    <Canvas>
      <OrbitControls autoRotate={false} />
      <directionalLight position={[0, 0, 5]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <AstronautOne />
    </Canvas>
  );
};

export default TmpPage;
