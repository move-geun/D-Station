import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/http";
import { getUserId } from "../../api/JWT";
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
import { CTIntoThree, NavMissionIntoThree, QuizIntoThree, TilIntoThree } from "../../recoil/atoms";
import TilEditor from "../../components/til/TilEditor";
import { DecoWood } from "../../components/scene/DecoWood.jsx";
import { Html } from "@react-three/drei";

const MissionPage = () => {
  const misId = useParams().missNo;

  const [quizData, setQuizData] = useState(null);
  const [quizORct, setQuizOrCT] = useState(true);
  const [doneTilData, setDoneTilData] = useState(null);

  const userId = getUserId();
  const one = useRecoilValue(NavMissionIntoThree);
  const [whichOne, setWhichOne] = useRecoilState(NavMissionIntoThree);

  useEffect(() => {
    MisRouter();
    getQuizData();
    getTilDone();
  }, []);

  useEffect(() => {}, [quizData, quizORct, doneTilData]);

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
        setQuizOrCT(false);
        // 퀴즈데이터 요청해서 500 반환하면 코테데이터 요청
        http.connect_axios
        .get(`/grading/muid?uid=${misId}`)
        .then((res)=>{
         
        })
        .catch((err)=> {console.log(err)})
        console.log(err);   
      });
  }

  async function getTilDone(){
    await http.connect_axios
    .get(`/til/mission?id=${userId}&mUid=${misId}`)
    .then((res)=> {
      console.log(res)
      setDoneTilData(res.data);
      setWhichOne("tilSuccess");
      }
    )
    
      
    .catch((err)=> console.log(err))
  }

  return (
    <MissionContainer>
      <ThreeWrapper>
        {one === "til" ? <TilEditor /> : <div></div>}

        <Canvas>
          <directionalLight position={[0, 5, 0]} />
          <ambientLight />
          <BaseBackground />
          {one === "quiz"? <DecoWood data = {quizData} /> : <Html></Html> }
          {one === "quizSuccess"? <Html> 정답</Html> : <Html/>}
          {one === "code"? <></>:<></>}
          {one === "codeSuccess"? <Html> 코드 풀기 성공 </Html> : <Html/>}
          {doneTilData !== null ? <Html> Til 작성 완료을 완료하였습니다. </Html> : <Html/>}
          
          {MisRouter()}
        </Canvas>
      </ThreeWrapper>
      <HTMLWrapper>
        <MissionHTML mUId={misId} whichOne = {quizORct} doneTilData ={doneTilData}/>
      </HTMLWrapper>
    </MissionContainer>
  );
};

export default MissionPage;
