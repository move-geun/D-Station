import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

export function SolarSystem(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/glb/solarsystem.glb");
  const { actions } = useAnimations(animations, group);
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a / 6;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" ref={myMesh}>
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.1}
        >
          <group
            name="ffdbfd68ccdf454990b0c686aca1d5a7fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="mars"
                  position={[-376.54, 41.05, -729.53]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="mars_mars_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.mars_mars_0.geometry}
                    material={materials.mars}
                  />
                </group>
                <group
                  name="Mercury"
                  position={[143.87, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Mercury_mercury_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mercury_mercury_0.geometry}
                    material={materials.mercury}
                  />
                </group>
                <group
                  name="Neptun"
                  position={[-965.19, 41.05, -177.8]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Neptun_neptun_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Neptun_neptun_0.geometry}
                    material={materials.neptun}
                  />
                </group>
                <group
                  name="Pluto"
                  position={[967.58, 41.05, -1023.43]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Pluto_Pluto_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Pluto_Pluto_0.geometry}
                    material={materials.Pluto}
                  />
                </group>
                <group
                  name="saturn"
                  position={[-311.17, 41.05, -1150.75]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={1.54}
                >
                  <group name="Saturn_ring" position={[0.25, 0.8, 0]}>
                    <mesh
                      name="Saturn_ring_ring_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Saturn_ring_ring_0.geometry}
                      material={materials.ring}
                    />
                  </group>
                  <mesh
                    name="saturn_04_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["saturn_04_-_Default_0"].geometry}
                    material={materials["04_-_Default"]}
                  />
                </group>
                <group
                  name="sun"
                  position={[-0.78, 45.38, -489.13]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="sun_sun_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sun_sun_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Upiter"
                  position={[559.94, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Upiter_jupiter_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Upiter_jupiter_0.geometry}
                    material={materials.jupiter}
                  />
                </group>
                <group
                  name="uranus"
                  position={[-780.14, 41.05, -919.5]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="uranus_Uranus_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.uranus_Uranus_0.geometry}
                    material={materials.Uranus}
                  />
                </group>
                <group
                  name="venus"
                  position={[-182.21, 41.05, -359.33]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="venus_venus_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.venus_venus_0.geometry}
                    material={materials.venus}
                  />
                </group>
                <group
                  name="zemia"
                  position={[-21.51, 41.05, -162.1]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="blue" position={[0, -0.03, 0]}>
                    <mesh
                      name="blue_03_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["blue_03_-_Default_0"].geometry}
                      material={materials["03_-_Default"]}
                    />
                  </group>
                  <group name="cloud" position={[0, -0.03, 0]}>
                    <mesh
                      name="cloud_oblaci_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.cloud_oblaci_0.geometry}
                      material={materials.oblaci}
                    />
                  </group>
                  <group name="earth" position={[0, -0.03, 0]}>
                    <mesh
                      name="earth_earth_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.earth_earth_0.geometry}
                      material={materials.earth}
                    />
                  </group>
                </group>
                <group
                  name="Circle001"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="Circle002"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="Circle003"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="Circle004"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="Circle005"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="Circle006"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="Circle007"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="Circle008"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="Circle009"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/solarsystem.glb");
