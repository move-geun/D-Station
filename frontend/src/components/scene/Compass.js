import React from "react";
import { useGLTF } from "@react-three/drei";

export function Compass(props) {
  const { nodes, materials } = useGLTF("/glb/compass.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 4, 0, 0]} position={[0, -3, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.korpus}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.kreplenye1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.kreplenye2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.steklo_001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.strelka}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.celindr}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/compass.glb");
