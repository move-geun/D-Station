import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Wormhole(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/glb/wormhole.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="wormhole2fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Plane" rotation={[-Math.PI / 2, 0, 0]} scale={600}>
                  <mesh
                    name="Plane_wormhole_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_wormhole_0.geometry}
                    material={materials.wormhole}
                  />
                </group>
                <group
                  name="Camera"
                  position={[793.03, 487.45, 752.8]}
                  rotation={[Math.PI, 0.76, 2.68]}
                  scale={100}
                >
                  <group name="Object_8" />
                </group>
                <group
                  name="Light"
                  position={[-0.81, 300.01, 3.78]}
                  rotation={[1.89, 0.88, -2.05]}
                  scale={100}
                >
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                <group
                  name="Light002"
                  position={[-0.81, -311.27, 3.78]}
                  rotation={[1.89, 0.88, -2.05]}
                  scale={100}
                >
                  <group name="Object_12" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_13" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/wormhole.glb");
