import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

export function SolarSystem(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/glb/solarsystem.glb");
  const { actions } = useAnimations(animations, group);
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 2;
    myMesh.current.rotation.y = a;
  });
  return (
    <group ref={group} {...props} dispose={null} position={[0, 0, 0]}>
      <group name="Scene" ref={myMesh}>
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 1, 0]}
          scale={3}
          position={[0, 0, 400]}
          ref={myMesh}
        >
          <group
            name="ffdbfd68ccdf454990b0c686aca1d5a7fbx"
            rotation={[Math.PI / 2, 0, 0]}
            ref={myMesh}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="mars"
                  position={[-376.54, 41.05, -729.53]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                >
                  <mesh
                    name="mars_mars_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.mars_mars_0.geometry}
                    material={materials.mars}
                    ref={myMesh}
                  />
                </group>
                <group
                  name="Mercury"
                  position={[143.87, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                >
                  <mesh
                    name="Mercury_mercury_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mercury_mercury_0.geometry}
                    material={materials.mercury}
                    ref={myMesh}
                  />
                </group>
                <group
                  name="Neptun"
                  position={[-965.19, 41.05, -177.8]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                >
                  <mesh
                    name="Neptun_neptun_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Neptun_neptun_0.geometry}
                    material={materials.neptun}
                    ref={myMesh}
                  />
                </group>
                <group
                  name="Pluto"
                  position={[967.58, 41.05, -1023.43]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                >
                  <mesh
                    name="Pluto_Pluto_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Pluto_Pluto_0.geometry}
                    material={materials.Pluto}
                    ref={myMesh}
                  />
                </group>
                <group
                  name="saturn"
                  position={[-311.17, 41.05, -1150.75]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={1.54}
                  ref={myMesh}
                >
                  <group name="Saturn_ring" position={[0.25, 0.8, 0]}>
                    <mesh
                      name="Saturn_ring_ring_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Saturn_ring_ring_0.geometry}
                      material={materials.ring}
                      ref={myMesh}
                    />
                  </group>
                  <mesh
                    name="saturn_04_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["saturn_04_-_Default_0"].geometry}
                    material={materials["04_-_Default"]}
                    ref={myMesh}
                  />
                </group>
                <group
                  name="sun"
                  position={[-0.78, 45.38, -489.13]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                >
                  <mesh
                    name="sun_sun_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.sun_sun_0.geometry}
                    material={materials.material}
                    ref={myMesh}
                  />
                </group>
                <group
                  name="Upiter"
                  position={[559.94, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                >
                  <mesh
                    name="Upiter_jupiter_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Upiter_jupiter_0.geometry}
                    material={materials.jupiter}
                    ref={myMesh}
                  />
                </group>
                <group
                  name="uranus"
                  position={[-780.14, 41.05, -919.5]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                >
                  <mesh
                    name="uranus_Uranus_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.uranus_Uranus_0.geometry}
                    material={materials.Uranus}
                    ref={myMesh}
                  />
                </group>
                <group
                  name="venus"
                  position={[-182.21, 41.05, -359.33]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                >
                  <mesh
                    name="venus_venus_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.venus_venus_0.geometry}
                    material={materials.venus}
                    ref={myMesh}
                  />
                </group>
                <group
                  name="zemia"
                  position={[-21.51, 41.05, -162.1]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                >
                  <group name="blue" position={[0, -0.03, 0]}>
                    <mesh
                      name="blue_03_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["blue_03_-_Default_0"].geometry}
                      material={materials["03_-_Default"]}
                      ref={myMesh}
                    />
                  </group>
                  <group name="cloud" position={[0, -0.03, 0]} ref={myMesh}>
                    <mesh
                      name="cloud_oblaci_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.cloud_oblaci_0.geometry}
                      material={materials.oblaci}
                      ref={myMesh}
                    />
                  </group>
                  <group name="earth" position={[0, -0.03, 0]} ref={myMesh}>
                    <mesh
                      name="earth_earth_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.earth_earth_0.geometry}
                      material={materials.earth}
                      ref={myMesh}
                    />
                  </group>
                </group>
                <group
                  name="Circle001"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                />
                <group
                  name="Circle002"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                />
                <group
                  name="Circle003"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                />
                <group
                  name="Circle004"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                />
                <group
                  name="Circle005"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                />
                <group
                  name="Circle006"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                />
                <group
                  name="Circle007"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                />
                <group
                  name="Circle008"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
                />
                <group
                  name="Circle009"
                  position={[-0.81, 41.05, -491.11]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh}
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
