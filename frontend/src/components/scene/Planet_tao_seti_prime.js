import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function PlanetTao(props) {
  const { nodes, materials } = useGLTF("/glb/planet_tao.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = 1200 * (Math.sin(a) * 0.015);
    myMesh.current.position.y = 1200 * (Math.sin(a) * 0.015);
    myMesh.current.position.z = 1200 * (Math.cos(a) * 0.015);
  });
  return (
    <group {...props} dispose={null} ref={myMesh}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.defaultMat}
        />
      </group>
    </group>
  );
}
