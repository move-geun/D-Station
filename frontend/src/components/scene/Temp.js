import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MainTmp(props) {
  const { nodes, materials } = useGLTF("/tmp.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sphere_gltf.geometry}
        material={materials["Material.001"]}
        position={[5.86, 2.16, -0.84]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clouds_Cube000.geometry}
        material={materials.Clouds}
        position={[8.61, 7.78, -9.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_Cube002.geometry}
        material={materials.Earth}
        position={[8.61, 7.78, -9.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.visor.geometry}
        material={materials["visor.003"]}
        position={[0.09, -2.1, -6.58]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.astronaut.geometry}
        material={materials.astronaut}
        position={[0.08, -2.09, -6.59]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Atmosphere_Cube001.geometry}
        material={materials.Atmosphere}
        position={[8.61, 7.78, -9.78]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group
        position={[-11.61, 5.09, -17.98]}
        rotation={[-2.51, -0.02, 0.13]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.geonosis_1.geometry}
          material={materials.Material__8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.geonosis_2.geometry}
          material={materials.ringz}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.geonosis_3.geometry}
          material={materials.ringz2}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sphere_gltf001.geometry}
        material={materials["yellow_bricks.002"]}
        position={[8.59, 7.66, -11.8]}
      />
    </group>
  );
}

useGLTF.preload("/tmp.glb");
