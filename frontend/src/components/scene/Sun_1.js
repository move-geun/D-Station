import React from "react";
import { useGLTF } from "@react-three/drei";

export function SunOne(props) {
  const { nodes, materials } = useGLTF("/glb/sun_1.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[11.65, 0.05, 3.62]} rotation={[-0.27, 0.6, 1.93]} />
      <group position={[7.41, -11.02, 2.57]} rotation={[1.34, 0.58, 0.13]} />
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sun_SunOuter_0.geometry}
              material={materials.SunOuter}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sun_SunOuter_0001.geometry}
              material={materials.SunOuter}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sun_SunOuter_0002.geometry}
              material={materials.SunOuter}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SunBase_SunBase_Sub_0.geometry}
              material={materials.SunBase_Sub}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/sun_1.glb");
