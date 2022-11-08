import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function AstronautOne(props) {
  const { nodes, materials } = useGLTF("/glb/astronaut_1.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Astronaut_Astronaut_0.geometry}
              material={materials.Astronaut}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/astronaut_1.glb");
