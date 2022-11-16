import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import MissionHTML from "../../components/roadmap/HTMLsection/MissionHTML";
import {
  HTMLWrapper,
  ThreeWrapper,
} from "../../components/roadmap/Roadmap.style";
import { MissionContainer } from "./RoadmapPage.style";

import { Canvas } from "@react-three/fiber";
import BaseBackground from "../../components/roadmap/Threesection/Base/BaseBackground";
import { Man } from "../../components/roadmap/Threesection/Mission/Man";
import { useRecoilValue } from "recoil";
import { TilIntoThree } from "../../recoil/atoms";
import TilEditor from "../../components/til/TilEditor";

const MissionPage = () => {
  const misId = useParams().missNo;
  const tilOpenState = useRecoilValue(TilIntoThree);
  useEffect(() => {MisRouter()}, []);
  useEffect(() => {}, [tilOpenState]);

  function MisRouter() {
    if (misId === "1") {
      return (
        <>
          <Man />
        </>
      );
    }
  }

  return (
    <MissionContainer>
      <ThreeWrapper>
      {tilOpenState === true ? <TilEditor /> : <div>til 안 열었음</div>}
        <Canvas>
          <directionalLight position={[0, 5, 0]} />
          <ambientLight />
          <BaseBackground />
          {MisRouter()}
          
        </Canvas>
        
       
      </ThreeWrapper>
      <HTMLWrapper>
        <MissionHTML mUId={misId} />
      </HTMLWrapper>
    </MissionContainer>
  );
};

export default MissionPage;
