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
    <>
    <div> Reference </div>
    <hr/>
        {refList ? (
          refList.map((item, idx) => {
            return (
              <div key={idx} onClick={()=> goToRef(item.rurl)}>{item.title}</div>
            );
          })
        ) : (
          <div> 데이터를 불러오는 중입니다.</div>
        )}
    </>
  );
};

export default RefList;
