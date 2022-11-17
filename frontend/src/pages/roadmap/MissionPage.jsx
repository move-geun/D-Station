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
import { CTIntoThree, QuizIntoThree, TilIntoThree } from "../../recoil/atoms";
import TilEditor from "../../components/til/TilEditor";
import { DecoWood } from "../../components/scene/DecoWood.jsx";
import { Html } from "@react-three/drei";

const MissionPage = () => {
  const misId = useParams().missNo;

  const [quizData, setQuizData] = useState(null);
  const [tilOpen, setTilOpen] = useRecoilState(TilIntoThree);
  const [quizOpen, setQuizOpen] = useRecoilState(QuizIntoThree);
  const [ctOpen, setCTOpen] = useRecoilState(CTIntoThree);
  const [whichOneOpen, setWhichOneOpen] = useState(null);
  const [quizORct, setQuizOrCT] = useState(true);

  useEffect(() => {
    MisRouter();
    getQuizData();
  }, []);

  useEffect(() => {}, [quizData, quizORct]);
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
        setQuizOrCT(false);
        // 퀴즈데이터 요청해서 500 반환하면 코테데이터 요청
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
          {quizOpen === true ? <DecoWood data = {quizData} /> : <Html></Html>}
          
          {MisRouter()}
        </Canvas>
      </ThreeWrapper>
      <HTMLWrapper>
        <MissionHTML mUId={misId} whichOne = {quizORct}/>
      </HTMLWrapper>
    </MissionContainer>
  );
};

export default MissionPage;
