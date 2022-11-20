import React from "react";
import { useGLTF } from "@react-three/drei";

export function SpaceStationTwo(props) {
  const { nodes, materials } = useGLTF("/glb/space_station_2.glb");
  return (
    <group {...props} dispose={null} scale={12}>
      <group rotation={[-1.45, -0.1, 0]} scale={1.19}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation001_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation002_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation003_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation004_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation005_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation006_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation007_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation008_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation009_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation010_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation011_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation012_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation013_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation014_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation015_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation016_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation017_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation018_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation019_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation020_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation021_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation022_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation023_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation024_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation025_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group
            position={[-658.79, -427.54, -105.87]}
            rotation={[-1.56, 0, 1.34]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation026_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group
            position={[334.66, -47.48, -855.53]}
            rotation={[-Math.PI / 2, 0, -1.77]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation027_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation029_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation030_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation031_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation032_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation033_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation034_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spacestation_low_Main_0.geometry}
              material={materials.Main}
            />
          </group>
          <group
            position={[-658.79, -427.54, -105.87]}
            rotation={[-1.56, 0, 1.34]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.emit_low001_emitrED_0.geometry}
              material={materials.emitrED}
            />
          </group>
          <group
            position={[334.66, -47.48, -855.53]}
            rotation={[-Math.PI / 2, 0, -1.77]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.emit_low_emitrED_0.geometry}
              material={materials.emitrED}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.emit_low002_emitrED_0.geometry}
              material={materials.emitrED}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/space_station_2.glb");
