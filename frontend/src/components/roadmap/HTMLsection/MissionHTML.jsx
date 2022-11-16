import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TilIntoThree } from "../../../recoil/atoms";
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

  const [tilOpen, setTilOpen] = useRecoilState(TilIntoThree);

  useEffect(() => {
    getMissionData();
    getRefListData();
  }, []);

  useEffect(() => {}, [mData]);
  useEffect(() => {}, [mData, refData, quizData]);

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

  

  const goUpTil = (prop) => {
    tilOpen ? setTilOpen(false) : setTilOpen(true);
  };

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
        <button> 퀴즈 풀기</button>
      </QuizWrapper>
      <MissTILWrapper>
        <button onClick={() => goUpTil(misId)}>TIL작성하기</button>
      </MissTILWrapper>
    </>
  );
};

export default MissionHTML;
