import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function StarCatcher(props) {
  const { nodes, materials } = useGLTF("/glb/star_catcher.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });
  return (
    <group {...props} dispose={null} ref={myMesh}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.28}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Astronaut_geo_Astronaut_0.geometry}
            material={materials.Astronaut}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Backpack_geo_Backpack_0.geometry}
            material={materials.Backpack}
          />
          <group
            position={[-0.28, 1.34, 0.44]}
            rotation={[-0.21, 0.55, -1.52]}
            scale={5.64}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Star_geo_Star_0.geometry}
              material={materials.Star}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/star_catcher.glb");
