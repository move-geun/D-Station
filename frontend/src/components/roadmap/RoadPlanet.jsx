import React from "react";
import { useState } from "react";
import connect_axios from "../../api/connect";

import { AboutPlanetWrapper } from "./Roadmap.style";

const RoadPlanet = () => {

    const [planetName, setPlanetName] = useState('');
    const planetUid = 1;
    connect_axios.get(`/planet/uid?uid=${planetUid}`)
    .then((res)=>{
        console.log("RoadPlanet   ", res);
        setPlanetName(res.data.pname);
    }).catch((err)=>{
        console.log(err);
    })



    return(
        <>
            <AboutPlanetWrapper>
                <h2>{planetName}</h2>
                

            </AboutPlanetWrapper>
            
        
        </>
    )
}

export default RoadPlanet;