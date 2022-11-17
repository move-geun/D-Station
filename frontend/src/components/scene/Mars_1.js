import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CameraZoom } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export function MarsOne(props) {
  const { nodes, materials } = useGLTF("/glb/mars_1.glb");
  const [cameraZoom, setCameraZoom] = useRecoilState(CameraZoom);
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 8;
    if (cameraZoom) {
      myMesh.current.rotation.y = a;
      myMesh.current.position.x = 800 * (Math.sin(a) * 0.05);
      myMesh.current.position.y = 780 * (Math.sin(a) * 0.05);
      myMesh.current.position.z = 630 * (Math.cos(a) * 0.05);
    } else {
      myMesh.current.position.x = 800 * (Math.sin(a) * 0.05);
      myMesh.current.position.y = 780 * (Math.sin(a) * 0.05);
      myMesh.current.position.z = 630 * (Math.cos(a) * 0.05);
    }
  });

  useEffect(() => {
    console.log(cameraZoom);
  }, [cameraZoom]);
  return (
    <group
      {...props}
      dispose={null}
      scale={0.5}
      ref={myMesh}
      onClick={() => setCameraZoom(false)}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.000001}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Atmosphere_AtmosphereSub_0.geometry}
              material={materials.AtmosphereSub}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mars_MarsSub_0.geometry}
            material={materials.MarsSub}
          />
        </group>
      </group>
    </group>
  );
}
