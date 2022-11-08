import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function NeedSomeSpace(props) {
  const { nodes, materials } = useGLTF("/glb/need_some_space.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <points
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/need_some_space.glb");
