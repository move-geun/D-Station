import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RoundStar(props) {
  const { nodes, materials } = useGLTF("/round_star.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Star_Material_#25_0"].geometry}
              material={materials.Material_25}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/round_star.glb");
