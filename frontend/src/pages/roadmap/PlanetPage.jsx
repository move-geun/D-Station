import React, { useEffect } from "react";
import { useState } from "react";
import http from "../../api/http";
// import RoadHTML from "../../components/roadmap/HTMLsection/RoadHTML";
import PlanetHTML from "../../components/roadmap/HTMLsection/PlanetHTML";
import { HTMLWrapper, ThreeWrapper } from "../../components/roadmap/Roadmap.style";
import PythonPlanetThree from "../../components/roadmap/Threesection/Planet/PythonPlanetThree";

import { PlanetContatiner } from "./RoadmapPage.style";

const PlanetPage = () => {
  
    const [planetData, setPlanetData] = useState('');
    const [planetUid, setPlanetUid] = useState(null);
    const [satelliteList, setSatelliteList] = useState();
    useEffect(()=>{}, [planetData,planetUid, satelliteList]);
    useEffect(()=>{
        const PId = 1;
        http.connect_axios.get(`/planet/uid?uid=${PId}`)
        .then((res)=>{
            setPlanetData(res.data);
            setPlanetUid(PId);
            // setSatelliteList(res.data.list);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    function PlanetPageHandler() {
        if(planetUid === 1){
            return (<><PythonPlanetThree/></>)
        }else if(planetUid === 2){
            return(<> <div>자바행성펭지</div></>)
        }

    }
   

    return(

        <PlanetContatiner>
           <ThreeWrapper>
                <PythonPlanetThree />
            </ThreeWrapper>
            <HTMLWrapper>
                <PlanetHTML Pdata = {planetData} />
            </HTMLWrapper>

        </PlanetContatiner>

                
    )
}

export default PlanetPage;




