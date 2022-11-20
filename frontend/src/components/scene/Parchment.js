import React from "react";
import { useGLTF } from "@react-three/drei";

export function Parchment(props) {
  const { nodes, materials } = useGLTF("/glb/parchment.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.parchment_or_paper_scroll}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/parchment.glb");
