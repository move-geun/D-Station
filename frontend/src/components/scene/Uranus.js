import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Uranus(props) {
  const { nodes, materials } = useGLTF("/glb/uranus.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.98}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Uranus_UranusSub_0.geometry}
              material={materials.UranusSub}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.UranusAtmosphere_UranusAtmosphereSub_0.geometry}
            material={materials.UranusAtmosphereSub}
          />
          <group
            position={[0.51, 14762.15, 3955.74]}
            rotation={[-1.31, 0, 0]}
            scale={12.64}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UranusRings_SaturnRingsShader_0.geometry}
              material={materials.SaturnRingsShader}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/uranus.glb");
