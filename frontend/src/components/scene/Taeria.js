import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Taeria(props) {
  const { nodes, materials } = useGLTF("/glb/taeria.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[7.41, -11.02, 2.57]} rotation={[1.34, 0.58, 0.13]} />
        <group position={[11.65, 0.05, 3.62]} rotation={[-0.27, 0.6, 1.93]} />
        <group rotation={[0, 0, 2.89]} scale={1.7}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material"].geometry}
            material={materials["Material.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/taeria.glb");
