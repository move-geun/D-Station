import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Astronaut(props) {
  const { nodes, materials } = useGLTF("/glb/astronaut.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[2.45, 4.33, -0.55]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Astronaut_AstronautSub_0.geometry}
            material={materials.AstronautSub}
            position={[15.68, -1.46, -56.12]}
            rotation={[-0.39, -1.04, -0.35]}
            scale={0.14}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/astronaut.glb");
