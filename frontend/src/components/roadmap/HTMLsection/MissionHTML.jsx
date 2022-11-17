import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { CTIntoThree, QuizIntoThree, TilIntoThree } from "../../../recoil/atoms";
import http from "../../../api/http";
import TilEditor from "../../til/TilEditor";

import {
  DescWrapper,
  MissTILWrapper,
  QuizWrapper,
  RefListWrapper,
} from "../Roadmap.style";
import RefList from "./RefList";

const defaultValue = {};
const MissionHTML = (prop = defaultValue) => {
  console.log("코드야 퀴즈야  ", prop);
  const misId = prop.mUId;
  const [mData, setMData] = useState(null);
  const [refData, setRefData] = useState(null);
  const [quizData, setQuizData] = useState(null);


  const [tilOpen, setTilOpen] = useRecoilState(TilIntoThree);
  const [quizOpen, setQuizOpen] = useRecoilState(QuizIntoThree);
  const [ctOpen, setCTOpen] = useRecoilState(CTIntoThree);
  const [quizORct, setQuizOrCT] = useState(null);


  useEffect(() => {
    getMissionData();
    getRefListData();
  }, []);

  useEffect(() => {}, [mData, refData, quizData, quizORct]);
  useEffect(()=>{
    setQuizOrCT(prop.whichOne)},[prop])

  async function getMissionData() {
    await http.connect_axios
      .get(`/mission/uid?uid=${misId}`)
      .then((res) => {
        setMData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getRefListData() {
    await http.connect_axios
      .get(`/reference?uid=${misId}`)
      .then((res) => {
        setRefData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  function goUpTil(prop){
    tilOpen ? 
    setTilOpen(false) 
    : 
    setTilOpen(true);
    setQuizOpen(false);
    setCTOpen(false);
  };

  function goUpQuiz(prop){
    quizOpen ? 
    setQuizOpen(false)
    : 
    setQuizOpen(true);
    setTilOpen(false);
    setCTOpen(false);
 
    
  }

  function goUpCT(prop){
    ctOpen?
    setCTOpen(false)
    :
    setCTOpen(true);
    setTilOpen(false);
    setQuizOpen(false);
  }

  return (
    <>
      <DescWrapper>
        {mData !== null ? (
          <>
            <div className="name">
              <h2>{mData.mname}</h2>
            </div>
            <div className="des">{mData.mdescription}</div>
          </>
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </DescWrapper>
      <RefListWrapper>
        {refData !== null ? (
          <RefList refData={refData} />
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </RefListWrapper>
      <QuizWrapper>
        {quizORct ? 
        (<div className="btn" onClick={() => goUpQuiz(misId)}> 퀴즈 풀기 <div className="dot"></div></div>)
        :
        (<div className="btn" onClick={() => goUpCT(misId)}> 코드 풀기 <div className="dot"></div></div>)
      }
        
      </QuizWrapper>
      <MissTILWrapper>
        <div className="btn" onClick={() => goUpTil(misId)}>TIL작성하기 <div className="dot"></div></div>
      </MissTILWrapper>
    </>
  );
};

export default MissionHTML;
