import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Mars } from "./Mars";
import { Moon } from "./Moon";
import { Taeria } from "./Taeria";
import { MarsOne } from "./Mars_1";
import { SaturnOne } from "./Saturn_1";
import { PlanetTao } from "./Planet_tao_seti_prime";
import { Openmap, Galaxy } from "../../recoil/atoms";
import { useRecoilValue, useRecoilState } from "recoil";

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

export function TestBack(props) {
  const ismapopen = useRecoilValue(Openmap);
  const [galaxy, setGalaxy] = useRecoilState(Galaxy);
  const myMesh = React.useRef();

  const backsetting = () => {
    setGalaxy(2);
  };
  useFrame(() => {
    myMesh.current.position.x = -400;
    myMesh.current.position.y = 50;
    myMesh.current.position.z = -100;
  });
  return (
    <group onClick={() => backsetting()}>
      <group rotation={[0, 0, 0]} ref={myMesh}>
        <SaturnOne />
        <Moon />
        <Taeria />
        <PlanetTao />
        <Mars />
        <MarsOne />
      </group>
      {ismapopen ? null : (
        <Marker rotation={[0, 0, 0]} position={[-440, -50, -100]}>
          <div
            style={{
              position: "absolute",
              fontSize: 800,
              letterSpacing: -0.5,
              left: 800,
            }}
          >
            Backend
          </div>
          <FaMapMarkerAlt style={{ color: "blue" }} fontSize={800} />
        </Marker>
      )}
    </group>
  );
}
