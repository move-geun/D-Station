import React, {useState} from "react";
import { useEffect } from "react";
import http from "../../../api/http";
import { ListWrapper } from "./SllList.style";

const defaultValue = {};
const MissionList = (prop = defaultValue) => {
    const [mlist, setMList] =  useState(null);

    useEffect(()=>{
        console.log("======== ", prop);
        const sllId = prop.sllUId;
        http.connect_axios.get(`/mission/list_by_satellite?uid=${sllId}`)
        .then((res)=>{
            console.log(res);
            setMList(res.data.list);
        })
        .catch((err)=>{ console.log(err)})


    }, [prop]);

    useEffect(()=>{},[mlist]);


    return(
        <>
        <ListWrapper>
            {mlist? (
                mlist.map((item, idx) => {
                    // console.log("itteemm  ", item);
                    return(
                        <div className="slist" key={idx}>{item.mname}</div>
                    )
                })
            ) : (
            <div> 데이터를 불러오는 중입니다.</div>
          )}
          </ListWrapper>
        </>
    )

}

export default MissionList;