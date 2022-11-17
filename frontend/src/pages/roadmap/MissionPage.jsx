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
import { useRecoilState, useRecoilValue } from "recoil";
import { QuizIntoThree, TilIntoThree } from "../../recoil/atoms";
import TilEditor from "../../components/til/TilEditor";
import { DecoWood } from "../../components/scene/DecoWood.jsx";
import { Html } from "@react-three/drei";

const MissionPage = () => {
  const misId = useParams().missNo;

  const [quizData, setQuizData] = useState(null);
  const [tilOpen, setTilOpen] = useRecoilState(TilIntoThree);
  const [quizOpen, setQuizOpen] = useRecoilState(QuizIntoThree);
  const [whichOneOpen, setWhichOneOpen] = useState(null);

  useEffect(() => {
    MisRouter();
    getQuizData();
  }, []);

  useEffect(() => {}, [quizData]);
  useEffect(() => { WhichOneOpenHandler()}, [tilOpen, quizOpen]);

  function MisRouter() {
    if (misId === "1") {
      return <Man />;
    }
  }

  function WhichOneOpenHandler(){
    if(tilOpen && quizOpen){setWhichOneOpen(null)}

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
        {tilOpen === true ? <TilEditor /> : <div>til 안 열었음</div>}
        <Canvas>
          <directionalLight position={[0, 5, 0]} />
          <ambientLight />
          <BaseBackground />
          {quizOpen === true ? <DecoWood data = {quizData} /> : <Html>퀴즈 가져오는 중</Html>}
          
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
