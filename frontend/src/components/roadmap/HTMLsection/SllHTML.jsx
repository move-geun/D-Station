import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import http from "../../../api/http";

import { AboutPlanetWrapper, DescWrapper, ListWrapper } from "../Roadmap.style";
import MissionList from "./MissionList";
import SatelliteList from "./SatelliteList";

const defaultValue = {};
const SllHTML = (prop = defaultValue) => {
  const sllId = prop.sUId;
  const [sData, setSData] = useState(null);
  const [missonList, setMissionList] = useState(null);

  useEffect(() => {}, [sData]);

  useEffect(() => {
    getSllData();
    getMissionList();
  }, []);

  async function getSllData() {
    await http.connect_axios
      .get(`/satellite/uid?uid=${sllId}`)
      .then((res) => {
        setSData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function getMissionList() {
    await http.connect_axios
      .get(`/mission/list_by_satellite?uid=${sllId}`)
      .then((res) => {
        setMissionList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <DescWrapper>
        {sData !== null ? (
          <>
            <div className="name">
              <h1>{sData.sname}</h1>
            </div>
            <div className="des">{sData.sdescription}</div>
          </>
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </DescWrapper>
      <ListWrapper>
        {missonList !== null ? (
          <MissionList sllUId={sData.uid} />
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </ListWrapper>
    </>
  );
};

export default SllHTML;
