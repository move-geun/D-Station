import React, {useState} from "react";
import { useEffect } from "react";
import http from "../../../api/http";

const defaultValue = {};
const MissionList = (prop = defaultValue) => {
    const [slist, setSList] =  useState(null);

    useEffect(()=>{
        const planetUId = prop.planetUId; 
      

    }, [prop]);

    useEffect(()=>{},[slist]);


    return(
        <>
            {slist? (
                slist.map((item, idx) => {
                    // console.log("itteemm  ", item);
                    return(
                        <div>{item.uid} {item.sname}</div>
                    )
                })
            ) : (
            <div> 데이터를 불러오는 중입니다.</div>
          )}
        </>
    )

}

export default MissionList;