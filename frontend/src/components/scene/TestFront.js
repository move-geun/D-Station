import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { Earth } from "./Earth";
import { Jupiter } from "./Jupiter";
import { AstronautOne } from "./Astronaut_1";
import { StylezedPlanet } from "./Stylezed_planet";
import { RoundStar } from "./Round_star";

export function TestFront(props) {
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 3;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = 300;
    // myMesh.current.position.x = 200 * (Math.sin(a) * 0.005);
    // myMesh.current.position.z = 200 * (Math.cos(a) * 0.005);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]} ref={myMesh}>
        <Earth />
        <Jupiter />
        <StylezedPlanet />
        <AstronautOne />
        <RoundStar />
      </group>
    </group>
  );
}
