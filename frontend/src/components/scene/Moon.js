import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Moon(props) {
  const { nodes, materials } = useGLTF("/moon.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Moon_MoonSub_0.geometry}
            material={materials.MoonSub}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/moon.glb");
