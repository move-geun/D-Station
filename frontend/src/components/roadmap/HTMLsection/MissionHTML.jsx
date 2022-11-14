import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import http from "../../../api/http";
import {
  DescWrapper,
  MissTILWrapper,
  QuizWrapper,
  RefListWrapper,
} from "../Roadmap.style";

const defaultValue = {};
const MissionHTML = (prop = defaultValue) => {
  const misId = prop.mUId;
  const [mData, setMData] = useState(null);

  useEffect(() => {
    getMissionData();
    getRefListData();
    getQuizData();
  }, []);

  async function getMissionData() {
    await http.connect_axios
      .get(`/mission/uid?uid=${misId}`)
      .then((res) => {
        setMData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getRefListData() {
    await http.connect_axios
        .get(`/reference?uid=${misId}`)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
  }

  async function getQuizData() {
    await http.connect_axios
    .get(`/quiz?uid=${misId}`)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
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
      <RefListWrapper></RefListWrapper>
      <QuizWrapper></QuizWrapper>
      <MissTILWrapper></MissTILWrapper>
    </>
  );
};

export default MissionHTML;
