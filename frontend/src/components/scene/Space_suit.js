import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function SpaceSuit(props) {
  const { nodes, materials } = useGLTF("/glb/space_suit.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 10;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = 700 * (Math.sin(a) * 0.1);
    myMesh.current.position.y = 700 * (Math.cos(a) * 0.1);
    myMesh.current.position.z = 700 * (Math.sin(a) * 0.1);
  });
  return (
    <group {...props} dispose={null} ref={myMesh}>
      <group rotation={[3.09, 0, 0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.astronauta_v2_Material_u1_v1}
          position={[-5.15, 16.31, -13.87]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/space_suit.glb");
