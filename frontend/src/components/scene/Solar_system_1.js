import React from "react";
import { useGLTF } from "@react-three/drei";

export function SolarSystemOne(props) {
  const { nodes, materials } = useGLTF("/glb/solarsystem_1.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[2.45, 4.33, -0.55]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Callisto_CallistoShader_0.geometry}
              material={materials.CallistoShader}
            />
            <group position={[-1.05, -1.39, 7509.01]} scale={60}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Earth_EarthShader_0.geometry}
                material={materials.EarthShader}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.EarthMoon_MoonShader_0.geometry}
              material={materials.MoonShader}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.EarthOrbit_OrbitShader_0.geometry}
              material={materials.OrbitShader}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ganymede_GanymedeShader_0.geometry}
              material={materials.GanymedeShader}
            />
            <group position={[23.3, -4.93, 38962.57]} scale={60}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Jupiter_JupiterShader_0.geometry}
                material={materials.JupiterShader}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.JupiterOrbit_OrbitShader_0.geometry}
              material={materials.OrbitShader}
            />
            <group position={[-0.88, -0.19, 11431.39]} scale={60}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mars_MarsShader_0.geometry}
                material={materials.MarsShader}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MarsOrbit_OrbitShader_0.geometry}
              material={materials.OrbitShader}
            />
            <group position={[0.02, -1.5, 2942.37]} scale={60}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mercury_MercuryShader_0.geometry}
                material={materials.MercuryShader}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MercuryOrbit_OrbitShader_0.geometry}
              material={materials.OrbitShader}
            />
            <group position={[0.06, 0.29, 225056.52]} scale={60}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Neptune_NeptuneShader_0.geometry}
                material={materials.NeptuneShader}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.NeptuneOrbit_OrbitShader_0.geometry}
              material={materials.OrbitShader}
            />
            <group position={[2.38, -8.16, 71358.48]} scale={60}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Saturn_SaturnShader_0.geometry}
                material={materials.SaturnShader}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SaturnOrbit_OrbitShader_0.geometry}
              material={materials.OrbitShader}
            />
            <group position={[2.38, -1.05, 71358.49]} scale={60}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.SaturnRings_SaturnRingsShader_0.geometry}
                material={materials.SaturnRingsShader}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sun_SunShader_0.geometry}
              material={materials.SunShader}
            />
            <group position={[-3.98, -7.79, 143679.67]} scale={60}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Uranus_UranusShader_0.geometry}
                material={materials.UranusShader}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.UranusOrbit_OrbitShader_0.geometry}
              material={materials.OrbitShader}
            />
            <group position={[-4.58, -8.56, 143682.97]} scale={60}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.UranusRings_UranusRingsShader_0.geometry}
                material={materials.UranusRingsShader}
              />
            </group>
            <group position={[-0.25, -0.02, 5433.96]} scale={60}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Venus_VenusShader_0.geometry}
                material={materials.VenusShader}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.VenusOrbit_OrbitShader_0.geometry}
              material={materials.OrbitShader}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/solarsystem_1.glb");
