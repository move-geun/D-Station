import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import SllHTML from "../../components/roadmap/HTMLsection/SllHTML";
import {
  HTMLWrapper,
  ThreeWrapper,
} from "../../components/roadmap/Roadmap.style";
import { SatelliteContatiner } from "./RoadmapPage.style";

import { Canvas } from "@react-three/fiber";
import BaseBackground from "../../components/roadmap/Threesection/Base/BaseBackground";
import { Sll1 } from "../../components/roadmap/Threesection/Satellite/PythonPlanet/Sll1";
import { Sll2 } from "../../components/roadmap/Threesection/Satellite/PythonPlanet/Sll2";
import { Sll3 } from "../../components/roadmap/Threesection/Satellite/PythonPlanet/Sll3";
import { Sll4 } from "../../components/roadmap/Threesection/Satellite/PythonPlanet/Sll4";
import { Sll5 } from "../../components/roadmap/Threesection/Satellite/PythonPlanet/Sll5";
import { Sll6 } from "../../components/roadmap/Threesection/Satellite/PythonPlanet/Sll6";

const SatellitePage = () => {
  const sllId = useParams().sllNo;
  useEffect(() => {
    SllRouter();
  }, []);

  function SllRouter() {
    if (sllId === "1") {
      return <Sll1 />;
    } else if (sllId === "2") {
      return <Sll2 />;
    } else if (sllId === "3") {
      return <Sll3 />;
    } else if (sllId === "4") {
      return <Sll4 />;
    } else if (sllId === "5") {
      return <Sll5 />;
    } else if (sllId === "6") {
      return <Sll6 />;
    }
  }

  return (
    <SatelliteContatiner>
      <ThreeWrapper>
        <Canvas>
          <directionalLight position={[0, 5, 0]} />
          <ambientLight />
          <BaseBackground />
          {SllRouter()}
        </Canvas>
      </ThreeWrapper>
      <HTMLWrapper>
        <SllHTML sUId={sllId} />
      </HTMLWrapper>
    </SatelliteContatiner>
  );
};

export default SatellitePage;
