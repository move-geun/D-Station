import React, { useEffect } from "react";
import { useState } from "react";
import http from "../../api/http";
import RoadPlanetHTML from "../../components/roadmap/HTMLsection/RoadPlanetHTML";
import { AboutPlanetWrapper } from "../../components/roadmap/Roadmap.style";

const PlanetPage = () => {

    const [planetData, setPlanetData] = useState('');
    useEffect(()=>{}, [planetData]);
    useEffect(()=>{
        const planetUid = 1;
        http.connect_axios.get(`/planet/uid?uid=${planetUid}`)
        .then((res)=>{
            console.log("RoadPlanet   ", res);
            setPlanetData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);
   

    return(
        <>
            <AboutPlanetWrapper>
                <RoadPlanetHTML data={planetData} />
            </AboutPlanetWrapper>
  
            
           
        
        </>
    )
}

export default PlanetPage;