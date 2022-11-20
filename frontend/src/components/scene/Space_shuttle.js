import React from "react";
import { useGLTF } from "@react-three/drei";

export function SpaceShuttle(props) {
  const { nodes, materials } = useGLTF("/glb/space_shuttle.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Shuttle_LOWPOLY_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
              scale={0.1}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/space_shuttle.glb");
