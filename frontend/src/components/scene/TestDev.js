import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { SpaceStationTwo } from "./Space_station_2";
import { SpaceSuit } from "./Space_suit";

export function TestDev(props) {
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 3;
    myMesh.current.rotation.y = a;
    // myMesh.current.position.x = 200 * (Math.sin(a) * 0.005);
    // myMesh.current.position.z = 200 * (Math.cos(a) * 0.005);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]} ref={myMesh}>
        <SpaceStationTwo />
        <SpaceSuit />
      </group>
    </group>
  );
}
