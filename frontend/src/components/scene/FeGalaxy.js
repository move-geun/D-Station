import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

export function FeGalaxy(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/glb/fegalaxy.glb");
  const { actions } = useAnimations(animations, group);
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    group.current.rotation.y = a;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Object_2" scale={0.3}>
        <group name="RootNode">
          {/* <group name="Galaxy" rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="Galaxy_Material_#65_0"
              castShadow
              receiveShadow
              geometry={nodes["Galaxy_Material_#65_0"].geometry}
              material={materials.Material_65}
            />
          </group> */}
          <group name="Sphere001" rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="Sphere001_02_-_Default_0"
              castShadow
              receiveShadow
              geometry={nodes["Sphere001_02_-_Default_0"].geometry}
              material={materials["02_-_Default"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/fegalaxy.glb");
