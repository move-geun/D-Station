import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/http";
import {HTMLWrapper, ThreeWrapper, DescWrapper, ListWrapper} from "../../components/roadmap/Roadmap.style";
import BaseBackground from "../../components/roadmap/Threesection/Base/BaseBackground";
import { PlanetContatiner, SatelliteContatiner } from "./RoadmapPage.style";
import { SatelliteRouter } from "./SatelliteRouter";



const SatellitePage = () => {
    
    const sllId = useParams().sllNo;
    <SatelliteRouter id = {sllId}/>

    useEffect(()=>{
        http.connect_axios.get(`/mission/list_by_satellite?uid=${sllId}`)
        .then((res)=>{
            // console.log(res);
        })
        .catch((err) => {

        })

    }, [])


    return(

        <SatelliteContatiner>
           <ThreeWrapper>
               <BaseBackground />
            </ThreeWrapper>
            <HTMLWrapper>
          
            </HTMLWrapper>

        </SatelliteContatiner>

                
    )
}

export default SatellitePage;




