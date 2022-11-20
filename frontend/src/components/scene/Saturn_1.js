import React from "react";
import { useGLTF } from "@react-three/drei";

export function SaturnOne(props) {
  const { nodes, materials } = useGLTF("/glb/saturn_1.glb");

  return (
    <group {...props} dispose={null} scale={1}>
      <group rotation={[-Math.PI / 2, -0.3, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Saturn_SaturnSub_0.geometry}
            material={materials.SaturnSub}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SaturnAtmosphere_SaturnAtmosphereSub_0.geometry}
            material={materials.SaturnAtmosphereSub}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SaturnRings_SaturnRingsSub_0.geometry}
            material={materials.SaturnRingsSub}
          />
        </group>
      </group>
    </group>
  );
}
