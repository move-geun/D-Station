import React, {useState} from "react";
import { useEffect } from "react";

const defaultValue = {};
const SatelliteList = (prop = defaultValue) => {

    const [slist, setSList] =  useState(null);

    useEffect(()=>{if(prop.data !== null){
        setSList(prop.data);
    }}, [prop]);

    useEffect(()=>{},[slist]);


    return(
        <>
            {slist? (
                slist.map((item, idx) => {
                    return(
                        <div>{item.sname}</div>
                    )
                })
            ) : (
            <div> 데이터를 불러오는 중입니다.</div>
          )}
        </>
    )

}

export default SatelliteList;