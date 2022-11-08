import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sun(props) {
  const { nodes, materials } = useGLTF("/glb/sun.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sun_SunSub_0.geometry}
            material={materials.SunSub}
          />
          <group scale={1.02}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sun1_SunOuter_0.geometry}
              material={materials.SunOuter}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/sun.glb");
