import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../../api/http";
import { ListWrapper } from "./RoadList.style";

const defaultValue = {};
const MissionList = (prop = defaultValue) => {
  const navigate = useNavigate();
  const [mlist, setMList] = useState(null);

  useEffect(() => {
    const sllId = prop.sllUId;
    http.connect_axios
      .get(`/mission/list_by_satellite?uid=${sllId}`)
      .then((res) => {
        setMList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [prop]);

  useEffect(() => {}, [mlist]);

  const goToMis = (id) => {
    navigate(`/mission/${id}`);
  };

  return (
    <>
      <ListWrapper>
        {mlist ? (
          mlist.map((item, idx) => {
            // console.log("itteemm  ", item);
            return (
              <div
                className="slist"
                key={idx}
                onClick={() => goToMis(item.uid)}
              >
                {item.mname}
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

export default MissionList;
