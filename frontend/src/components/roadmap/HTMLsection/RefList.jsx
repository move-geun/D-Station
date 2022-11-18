import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../../api/http";
import { ListWrapper } from "./RoadList.style";

const defaultValue = {};
const RefList = (prop = defaultValue) => {
  const navigate = useNavigate();
  const [refList, setRefList] = useState(null);

  useEffect(() => {setRefList(prop.refData)}, [prop]);

  useEffect(() => {}, [refList]);

  const goToRef = (prop) => {
    // navigate("/refredirect", {
    //   state: {url: prop},
    // });

    window.open(`${prop}`, '_blank');
  };

  return (
    <ListWrapper>
    <h3 className="refTitle"> Reference </h3>
    {/* <hr/> */}
        {refList ? (
          refList.map((item, idx) => {
            return (
              <div key={idx} className="rlist" onClick={()=> goToRef(item.rurl)}>{item.title}</div>
            );
          })
        ) : (
          <div> 데이터를 불러오는 중입니다.</div>
        )}
    </ListWrapper>
  );
};

export default RefList;
