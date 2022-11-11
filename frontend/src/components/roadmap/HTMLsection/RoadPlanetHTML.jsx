import React from "react";
import { useState } from "react";

import { AboutPlanetWrapper, DescWrapper, ListWrapper } from "../Roadmap.style";
import SatelliteList from "../SatelliteList";

const RoadPlanetHTML = ({satellitedata}) => {

    const satellite = satellitedata;

    return(
        <>
            <DescWrapper>
                <div> 설명 설명</div>
            </DescWrapper>
            <ListWrapper>
                <SatelliteList data = {satellite}/>
            </ListWrapper>
            
        </>
    )
}

export default RoadPlanetHTML;