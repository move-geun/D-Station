import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/http";
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
import { DecoWood } from "../../components/scene/DecoWood.jsx";

const MissionPage = () => {
  const misId = useParams().missNo;
  const tilOpenState = useRecoilValue(TilIntoThree);


  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    MisRouter();
    getQuizData();
  }, []);

  useEffect(() => {}, [tilOpenState, quizData]);

  function MisRouter() {
    if (misId === "1") {
      return <Man />;
    }
  }

  async function getQuizData() {
    await http.connect_axios
      .get(`/quiz?uid=${misId}`)
      .then((res) => {
        console.log(res)
        setQuizData(res.data);
      })
      .catch((err) => {
        
        http.connect_axios
        .get(`/grading/muid?uid=${misId}`)
        .then((res)=>{
          console.log("코테코테", res);
        })
        .catch((err)=> {console.log(err)})
        console.log(err);

        
      });
  }

  return (
    <MissionContainer>
      <ThreeWrapper>
        {tilOpenState === true ? <TilEditor /> : <div>til 안 열었음</div>}
        <Canvas>
          <directionalLight position={[0, 5, 0]} />
          <ambientLight />
          <BaseBackground />
          <DecoWood data = {quizData} />
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
