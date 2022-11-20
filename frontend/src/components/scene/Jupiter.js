import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Jupiter(props) {
  const { nodes, materials } = useGLTF("/glb/jupiter.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 12;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = 500 * (Math.sin(a) * 0.1);
    myMesh.current.position.y = 600 * (Math.sin(a) * 0.1);
    myMesh.current.position.z = 550 * (Math.cos(a) * 0.1);
  });
  return (
    <group {...props} dispose={null} scale={1} ref={myMesh}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Jupiter_JupiterSub_0.geometry}
            material={materials.JupiterSub}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.JupiterAtmosphere_JupiterAtmosphereSub_0.geometry}
            material={materials.JupiterAtmosphereSub}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/jupiter.glb");
