import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Earth } from "./Earth";
import { Jupiter } from "./Jupiter";
import { AstronautOne } from "./Astronaut_1";
import { StylezedPlanet } from "./Stylezed_planet";
import { RoundStar } from "./Round_star";
import { Openmap, Galaxy } from "../../recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";

function Marker({ children, ...props }) {
  const [occluded, occlude] = useState();

  return (
    <Html
      transform
      occlude
      onOcclude={occlude}
      style={{
        transition: "all 0.2s",
        opacity: occluded ? 0 : 1,
        transform: `scale(${occluded ? 0.25 : 1})`,
      }}
      {...props}
    >
      {children}
    </Html>
  );
}

export function TestFront(props) {
  const ismapopen = useRecoilValue(Openmap);
  const [galaxy, setGalaxy] = useRecoilState(Galaxy);
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 3;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = -120;
    myMesh.current.position.y = -80;
    myMesh.current.position.z = 10;
    // myMesh.current.position.x = 200 * (Math.sin(a) * 0.005);
    // myMesh.current.position.z = 200 * (Math.cos(a) * 0.005);
  });
  return (
    <group onClick={() => setGalaxy(1)}>
      <group rotation={[0, 0, 0]} ref={myMesh}>
        <Earth />
        <Jupiter />
        <StylezedPlanet />
        <AstronautOne />
        <RoundStar />
      </group>
      {ismapopen ? null : (
        <Marker rotation={[0, 0, 0]} position={[-170, -150, 10]}>
          <div
            style={{
              position: "absolute",
              fontSize: 800,
              letterSpacing: -0.5,
              left: 800,
            }}
          >
            Frontend
          </div>
          <FaMapMarkerAlt style={{ color: "indianred" }} fontSize={800} />
        </Marker>
      )}
    </group>
  );
}
