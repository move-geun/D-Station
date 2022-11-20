import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function AstronautYellow(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/glb/astronaut_yellow.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.04}
        >
          <group
            name="c22ad44210304cd8b695023289bdefc9fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4" scale={0.33}>
                  <primitive object={nodes._rootJoint} />
                  <group name="BODY_MESH_ALL_LOW_polySurface1" />
                  <group name="Object_6" />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.blinn1}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.lambert2}
                    skeleton={nodes.Object_8.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/astronaut_yellow.glb");
