import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Galaxy(props) {
  const { nodes, materials } = useGLTF("/glb/galaxy.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.85, 11.24, 0]} rotation={[-Math.PI / 2, -0.11, 0]}>
        <points
          geometry={nodes.Object_2.geometry}
          material={materials.nuages}
        />
        <points
          geometry={nodes.Object_3.geometry}
          material={materials.nuages}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/galaxy.glb");
