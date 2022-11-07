import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function DecoWood(props) {
  const { nodes, materials } = useGLTF("/decorative_wooden.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.board_Mat}
          position={[-0.07, 1.39, -3.06]}
          scale={0.22}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/decorative_wooden.glb");
