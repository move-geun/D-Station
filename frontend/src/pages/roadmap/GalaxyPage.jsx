import React from "react";
import { useParams } from "react-router-dom";

import GalaxyHTML from "../../components/roadmap/HTMLsection/GalaxyHTML";

import {
  HTMLWrapper,
  ThreeWrapper,
} from "../../components/roadmap/Roadmap.style";
import { GalaxyContainer } from "./RoadmapPage.style";

import { Canvas } from "@react-three/fiber";
import BaseBackground from "../../components/roadmap/Threesection/Base/BaseBackground";
import { TestFront } from "../../components/scene/TestFront";
import { TestBack } from "../../components/scene/TestBack";
import { TestDev } from "../../components/scene/TestDev";


const GalaxyPage = () => {
  const galaxyId = useParams().galaxyNo;

  function GalaxyRouter() {
    if (galaxyId === "1") { return <TestFront />
    } else if (galaxyId === "2") { return <TestBack />
    } else if (galaxyId === "3") { return <TestDev />}
  }

  return (
    <GalaxyContainer>
      <ThreeWrapper>
        <Canvas>
          <directionalLight position={[0, 5, 0]} />
          <ambientLight />
          <BaseBackground />
          {GalaxyRouter()}
        </Canvas>
      </ThreeWrapper>
      <HTMLWrapper>
        <GalaxyHTML/>
      </HTMLWrapper>
    </GalaxyContainer>
  );
};

export default GalaxyPage;
