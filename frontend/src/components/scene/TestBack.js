import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { Mars } from "./Mars";
import { Moon } from "./Moon";
import { Taeria } from "./Taeria";
import { MarsOne } from "./Mars_1";
import { SaturnOne } from "./Saturn_1";
import { PlanetTao } from "./Planet_tao_seti_prime";

export function TestBack(props) {
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 3;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = -300;
    // myMesh.current.position.x = 200 * (Math.sin(a) * 0.005);
    // myMesh.current.position.z = 200 * (Math.cos(a) * 0.005);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]} ref={myMesh}>
        <SaturnOne />
        <Moon />
        <Taeria />
        <PlanetTao />
        <Mars />
        <MarsOne />
      </group>
    </group>
  );
}
