import React, { useEffect } from "react";
import { useState } from "react";
import http from "../../api/http";
import RoadPlanetHTML from "../../components/roadmap/HTMLsection/RoadPlanetHTML";
import { PlanetHTMLWrapper, PlanetThreeWrapper } from "../../components/roadmap/Roadmap.style";
import RoadPlanetThree from "../../components/roadmap/Threesection/RoadPlanetThree";

const PlanetPage = () => {
  
    const [planetData, setPlanetData] = useState('');
    const [satelliteList, setSatelliteList] = useState();
    useEffect(()=>{}, [planetData, satelliteList]);
    useEffect(()=>{
        const planetUid = 1;
        http.connect_axios.get(`/satellite/list_by_planet?uid=${planetUid}`)
        .then((res)=>{
            console.log("RoadPlanet   ", res.data.list);
            // setPlanetData(res.data);
            setSatelliteList(res.data.list);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);
   

    return(
        <>
            <PlanetThreeWrapper>
                <RoadPlanetThree />
            </PlanetThreeWrapper>
            <PlanetHTMLWrapper>
                <RoadPlanetHTML satallitedata={satelliteList} />
            </PlanetHTMLWrapper>
           
        </>
                
    )
}

export default PlanetPage;




