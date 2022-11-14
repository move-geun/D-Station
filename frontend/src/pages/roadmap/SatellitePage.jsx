import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/http";
import SllHTML from "../../components/roadmap/HTMLsection/SllHTML";
import {HTMLWrapper, ThreeWrapper, DescWrapper, ListWrapper} from "../../components/roadmap/Roadmap.style";
import BaseBackground from "../../components/roadmap/Threesection/Base/BaseBackground";
import { Sll1 } from "../../components/roadmap/Threesection/Satellite/PythonPlanet/Sll1";
import { Sll2 } from "../../components/roadmap/Threesection/Satellite/PythonPlanet/Sll2";
import { PlanetContatiner, SatelliteContatiner } from "./RoadmapPage.style";
import { SatelliteRouter } from "./SatelliteRouter";
// import { Sll1, Sll2, Sll3 } from "../../components/roadmap/Threesection/Satellite/PythonPlanet";


const SatellitePage = () => {
    
    const sllId = useParams().sllNo;
    useEffect(()=>{SllRouter()},[])

    function SllRouter() {
        if(sllId === "1"){ return (<><Sll1/></>)}
        else if(sllId === "2"){return (<><Sll2/></>)}

    }



    return(

        <SatelliteContatiner>
           <ThreeWrapper>
                <Canvas>
                    <directionalLight position={[0,5,0]}/>
                    <ambientLight/>
                    <BaseBackground />
                    {/* {SllRouter()} */}

                </Canvas>
            </ThreeWrapper>
            <HTMLWrapper>
                <SllHTML sUId = {sllId}/>
            </HTMLWrapper>

        </SatelliteContatiner>

                
    )
}

export default SatellitePage;




