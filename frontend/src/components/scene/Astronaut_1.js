import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function AstronautOne(props) {
  const { nodes, materials } = useGLTF("/glb/astronaut_1.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 30;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = 350 * (Math.sin(a) * 0.1);
    myMesh.current.position.y = 350 * (Math.cos(a) * 0.1);
    myMesh.current.position.z = 350 * (Math.sin(a) * 0.1);
  });
  return (
    <group {...props} dispose={null} scale={0.1} ref={myMesh}>
      <group rotation={[-Math.PI / 2, 0.8, 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Astronaut_Astronaut_0.geometry}
              material={materials.Astronaut}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/astronaut_1.glb");
