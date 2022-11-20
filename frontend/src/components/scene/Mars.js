import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Mars(props) {
  const { nodes, materials } = useGLTF("/glb/mars.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 5;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = 600 * (Math.sin(a) * 0.05);
    myMesh.current.position.y = 580 * (Math.sin(a) * 0.05);
    myMesh.current.position.z = 570 * (Math.cos(a) * 0.05);
  });
  return (
    <group {...props} dispose={null} ref={myMesh}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group scale={5}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Atmosphere_AtmosphereSub_0.geometry}
              material={materials.AtmosphereSub}
            />
          </group>
          <group scale={4.86}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Atmosphere1_AtmosphereSub2_0.geometry}
              material={materials.AtmosphereSub2}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
