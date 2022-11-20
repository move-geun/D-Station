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
import CodeExam from "../../components/mission/CodeExam";
import { Canvas } from "@react-three/fiber";
import BaseBackground from "../../components/roadmap/Threesection/Base/BaseBackground";

import { useRecoilState, useRecoilValue } from "recoil";
import { NavMissionIntoThree, TilState } from "../../recoil/atoms";
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
  const tilOne = useRecoilValue(TilState);

  const [whichOne, setWhichOne] = useRecoilState(NavMissionIntoThree);

  useEffect(() => {
    // MisRouter();
    getQuizData();
    getTilDone();
  }, []);

  useEffect(() => {}, [quizData, quizORct, doneTilData]);

  async function getQuizData() {
    await http.connect_axios
      .get(`/quiz?uid=${misId}`)
      .then((res) => {
        console.log(res);
        setQuizData(res.data);
      })
      .catch((err) => {
        setQuizOrCT(false);
        // 퀴즈데이터 요청해서 500 반환하면 코테데이터 요청
        http.connect_axios
          .get(`/grading/muid?uid=${misId}`)
          .then((res) => {
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(err);
      });
  }

  async function getTilDone() {
    await http.connect_axios
      .get(`/til/mission?id=${userId}&mUid=${misId}`)
      .then((res) => {
        setDoneTilData(res.data);
      })

      .catch((err) => console.log(err));
  }


  return (
    <MissionContainer>
      <ThreeWrapper>
        {/* {tilOne ? <></>: <TilEditor /> } */}
        {doneTilData ? 
        (<></>):
        (one === "til" ? (<TilEditor/>): (<></>))}
        <Canvas>
          <directionalLight position={[0, 5, 0]} />
          <ambientLight />
          <BaseBackground />
          {one === "quiz" ? <DecoWood data={quizData} /> : <Html></Html>}
          {one === "quizSuccess" ? <Html> 정답입니다 🍕 </Html> : <Html />}
          {one === "quizFail" ? <Html> 틀렸습니다. 😈 </Html> : <Html />}
          {/* {one === "code" ? <CodeExam Uid={misId} /> : null} */}
          {one === "codeSuccess" ? <Html> 코드 풀기 성공 </Html> : <Html />}
          {/* {one === "tilSuccess" ? <Html> TIL 작성 완료 </Html> : <Html />} */}
          {/* {doneTilData !== null ? <Html> Til 작성 완료을 완료하였습니다. </Html> : <Html/>} */}
          {/* {MisRouter()} */}
        </Canvas>
      </ThreeWrapper>
      <HTMLWrapper>
        <MissionHTML
          mUId={misId}
          whichOne={quizORct}
          doneTilData={doneTilData}
        />
      </HTMLWrapper>
    </MissionContainer>
  );
};

export default MissionPage;
