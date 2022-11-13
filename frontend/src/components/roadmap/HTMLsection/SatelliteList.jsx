import React, {useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import http from "../../../api/http";
import { ListWrapper } from "./SllList.style";

const defaultValue = {};
const SatelliteList = (prop = defaultValue) => {

    const navigate = useNavigate();
    const [slist, setSList] =  useState(null);

    useEffect(()=>{
        const planetUId = prop.planetUId; 
        http.connect_axios.get(`/satellite/list_by_planet?uid=${planetUId}`)
        .then((res)=>{
            console.log(res);
            setSList(res.data.list);
        })
        .catch((err)=>{ console.log(err)})

    }, [prop]);

    useEffect(()=>{},[slist]);

    const goToSll = (id) =>{
        navigate(`/satellite/${id}`);
    }


    return(
        <>
        <ListWrapper>
            {slist? (
                slist.map((item, idx) => {
                    // console.log("itteemm  ", item);
                    return(
                        <div className="slist" onClick={() => goToSll(item.uid)}>{item.uid} {item.sname}</div>
                    )
                })
            ) : (
            <div> 데이터를 불러오는 중입니다.</div>
          )}
          </ListWrapper>
        </>
    )

}

export default SatelliteList;