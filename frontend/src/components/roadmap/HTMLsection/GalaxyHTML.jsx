import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../api/http";

import { DescWrapper, ListWrapper } from "../Roadmap.style";
import PlanetList from "./PlanetList";

const GalaxyHTML = () => {
  const galaxyId = useParams().galaxyNo;
  const [gData, setGData] = useState(null);

  // 은하정보 (정보가 없음...)
  useEffect(() => {
    http.connect_axios
      .get(`/galaxy/uid?uid=${galaxyId}`)
      .then((res) => {
        console.log(res);
        setGData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {}, [gData]);

  return (
    <>
      <DescWrapper>
        {gData !== null ? (
          <>
            <div className="name">
              <h1>{gData.gname}</h1>
            </div>
          </>
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </DescWrapper>
      <ListWrapper>
        {gData !== null ? (
          <PlanetList />
        ) : (
          <div>데이터를 불러오는 중입니다.</div>
        )}
      </ListWrapper>
    </>
  );
};

export default GalaxyHTML;
