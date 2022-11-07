import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Space(props) {
  const { nodes, materials } = useGLTF("/space.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.38, -0.25, 1.16]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.03}
      />
    </group>
  );
}

useGLTF.preload("/space.glb");
