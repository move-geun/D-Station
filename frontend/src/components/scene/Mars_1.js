import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MarsOne(props) {
  const { nodes, materials } = useGLTF("/mars_1.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.98}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Atmosphere_AtmosphereSub_0.geometry}
              material={materials.AtmosphereSub}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mars_MarsSub_0.geometry}
            material={materials.MarsSub}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mars_1.glb");
