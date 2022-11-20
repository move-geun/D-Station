import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SpaceStationTwo } from "./Space_station_2";
import { SpaceSuit } from "./Space_suit";
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

export function TestDev(props) {
  const ismapopen = useRecoilValue(Openmap);
  const [galaxy, setGalaxy] = useRecoilState(Galaxy);
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 3;
    myMesh.current.rotation.y = a;
    myMesh.current.position.x = 40;
    myMesh.current.position.y = 30;
    myMesh.current.position.z = -100;

    // myMesh.current.position.x = 200 * (Math.sin(a) * 0.005);
    // myMesh.current.position.z = 200 * (Math.cos(a) * 0.005);
  });
  return (
    <group onClick={() => setGalaxy(3)}>
      <group rotation={[0, 0, 0]} ref={myMesh}>
        <SpaceStationTwo />
        <SpaceSuit />
      </group>
      {ismapopen ? null : (
        <Marker rotation={[0, 0, 0]} position={[10, -190, -50]}>
          <div
            style={{
              position: "absolute",
              fontSize: 800,
              letterSpacing: -0.5,
              left: 800,
            }}
          >
            DevOps
          </div>
          <FaMapMarkerAlt style={{ color: "gray" }} fontSize={800} />
        </Marker>
      )}
    </group>
  );
}
