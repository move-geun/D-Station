import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function SpaceSuit(props) {
  const { nodes, materials } = useGLTF("/glb/space_suit.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-3.09, -0.39, 0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.astronauta_v2_Material_u1_v1}
          position={[-5.15, 16.31, -13.87]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/space_suit.glb");
