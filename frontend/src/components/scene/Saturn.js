import React from "react";
import { useGLTF } from "@react-three/drei";

export function Saturn(props) {
  const { nodes, materials } = useGLTF("/glb/saturn.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings1_SaturnRingsSub_0.geometry}
            material={materials.SaturnRingsSub}
          />
          <group position={[0, -0.11, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rings2_SaturnRingsSub_0.geometry}
              material={materials.SaturnRingsSub}
            />
          </group>
          <group position={[0, -0.23, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rings3_SaturnRingsSub_0.geometry}
              material={materials.SaturnRingsSub}
            />
          </group>
          <group position={[0, -0.34, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rings4_SaturnRingsSub_0.geometry}
              material={materials.SaturnRingsSub}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Saturn_SaturnSub_0.geometry}
            material={materials.SaturnSub}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.SaturnAtmosphereInner_SaturnAtmosphereInnerSub_0.geometry
            }
            material={materials.SaturnAtmosphereInnerSub}
          />
          <group scale={1.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.SaturnAtmosphereOuter_SaturnAtmosphereOuterSub_0.geometry
              }
              material={materials.SaturnAtmosphereOuterSub}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/saturn.glb");
