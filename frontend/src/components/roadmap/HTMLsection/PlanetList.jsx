import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../../api/http";
import { ListWrapper } from "./RoadList.style";

const defaultValue = {};
const SatelliteList = (prop = defaultValue) => {
  const galaxyId = useParams().galaxyNo;
  const navigate = useNavigate();
  const [plist, setPList] = useState(null);

  useEffect(() => {
    http.connect_axios
      .get(`/planet/list_by_galaxy?uid=${galaxyId}`)
      .then((res) => {
        setPList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [prop]);

  useEffect(() => {}, [plist]);

  const goToPlanet = (id) => {
    navigate(`/planet/${id}`);
  };

  return (
    <>
      <ListWrapper>
        {plist ? (
          plist.map((item, idx) => {
            return (
              <div
                className="plist"
                key={idx}
                onClick={() => goToPlanet(item.uid)}
              >
                {item.pname}
              </div>
            );
          })
        ) : (
          <div> 데이터를 불러오는 중입니다.</div>
        )}
      </ListWrapper>
    </>
  );
};

export default SatelliteList;
