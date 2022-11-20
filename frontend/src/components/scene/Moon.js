import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Moon(props) {
  const { nodes, materials } = useGLTF("/glb/moon.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 8;
    myMesh.current.position.x = 1500 * (Math.sin(a) * 0.05);
    myMesh.current.position.y = 2000 * (Math.sin(a) * 0.01);
    myMesh.current.position.z = 1500 * (Math.cos(a) * 0.05);
  });
  return (
    <group {...props} dispose={null} ref={myMesh}>
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

useGLTF.preload("/glb/moon.glb");
