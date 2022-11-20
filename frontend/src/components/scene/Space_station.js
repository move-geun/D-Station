import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function SpaceStation(props) {
  const { nodes, materials } = useGLTF("/glb/space_station.glb");
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a / 6;
  });
  return (
    <group {...props} dispose={null} ref={myMesh}>
      <group
        position={[0, 0, 0]}
        // rotation={[-Math.PI / 2, 0.56, 0]}
        rotation={[0, 15, 3]}
        scale={1}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-0.19, -107.59, -1.37]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.Fire}
            />
          </group>
          <group position={[-0.27, 0, -1.34]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial001.geometry}
              material={materials.Ship}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/space_station.glb");
