import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
  const misId = prop.mUId;
  const [mData, setMData] = useState(null);
  const [refData, setRefData] = useState(null);
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    getMissionData();
    getRefListData();
    getQuizData();
  }, []);

  useEffect(()=>{}, [mData]);
  useEffect(()=>{}, [mData, refData, quizData]);

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
        .then((res)=>{
            setRefData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })      
  }

  async function getQuizData() {
    await http.connect_axios
    .get(`/quiz?uid=${misId}`)
    .then((res)=>{
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  const goUpTil = (prop) => {

  }

  return (
    <>
      <DescWrapper>
        {mData !== null ? (
          <>
            <div className="name">
              <h1>{mData.mname}</h1>
            </div>
            <div className="des">{mData.mdescription}</div>
          </>
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </DescWrapper>
      <RefListWrapper>
          {refData !== null ? (
            <RefList refData={refData}/>
          ) : (
            <div>데이터를 불러오는 중입니다.</div>
          )}
      </RefListWrapper>
      <QuizWrapper>
        <button> 퀴즈 풀기</button>
      </QuizWrapper>
      <MissTILWrapper>
        <TilEditor mUId={misId}/>
        {/* <button onClick={()=> goUpTil(misId)}>TIL작성하기</button> */}
      </MissTILWrapper>
    </>
  );
};

export default MissionHTML;
