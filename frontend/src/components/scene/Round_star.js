import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function RoundStar(props) {
  const { nodes, materials } = useGLTF("/glb/round_star.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 5;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = 500 * (Math.sin(a) * 0.1);
    myMesh.current.position.y = 500 * (Math.cos(a) * 0.1);
    myMesh.current.position.z = 600 * (Math.sin(a) * 0.1);
  });
  return (
    <group {...props} dispose={null} scale={0.3} ref={myMesh}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Star_Material_#25_0"].geometry}
              material={materials.Material_25}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/round_star.glb");
