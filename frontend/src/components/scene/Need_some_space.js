import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function NeedSomeSpace(props) {
  const { nodes, materials } = useGLTF("/glb/need_some_space.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 4;
    myMesh.current.rotation.x = a;
    myMesh.current.rotation.z = a;
    myMesh.current.rotation.y = a;
  });
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1, 1, -6.5]} scale={3} ref={myMesh}>
        <points
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/need_some_space.glb");
