import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Jupiter(props) {
  const { nodes, materials } = useGLTF("/jupiter.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Jupiter_JupiterSub_0.geometry}
            material={materials.JupiterSub}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JupiterAtmosphere_JupiterAtmosphereSub_0.geometry}
            material={materials.JupiterAtmosphereSub}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/jupiter.glb");
