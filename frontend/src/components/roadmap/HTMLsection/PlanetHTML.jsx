import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { DescWrapper, ListWrapper } from "../Roadmap.style";
import SatelliteList from "./SatelliteList";

const defaultValue = {};
const PlanetHTML = (prop = defaultValue) => {
  const [pData, setPData] = useState(null);
  useEffect(() => {
    if (prop.Pdata.uid) {
      setPData(prop.Pdata);
    }
  }, [prop]);
  useEffect(() => {}, [pData]);

  return (
    <>
      <DescWrapper>
        {pData !== null ? (
          <>
            <div className="name">
              <h1>{pData.pname}</h1>
            </div>
            <div className="des">{pData.pdescription}</div>
          </>
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </DescWrapper>
      <ListWrapper>
        {pData !== null ? (
          <SatelliteList planetUId={pData.uid} />
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </ListWrapper>
    </>
  );
};

export default PlanetHTML;
