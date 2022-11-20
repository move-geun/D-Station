import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function Galaxy(props) {
  const { nodes, materials } = useGLTF("/glb/galaxy.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 3;
    myMesh.current.rotation.x = a;
    myMesh.current.rotation.z = a;
  });

  return (
    <group {...props} dispose={null} scale={3} ref={myMesh}>
      <group position={[-0.85, 11.24, 0]} rotation={[5, -0.11, -10]}>
        <points
          geometry={nodes.Object_2.geometry}
          material={materials.nuages}
        />
        <points
          geometry={nodes.Object_3.geometry}
          material={materials.nuages}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/galaxy.glb");
