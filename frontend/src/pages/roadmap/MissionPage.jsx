import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import http from "../../api/http";
import MissionHTML from "../../components/roadmap/HTMLsection/MissionHTML";
import {HTMLWrapper, ThreeWrapper, DescWrapper, ListWrapper} from "../../components/roadmap/Roadmap.style";
import {MissionContainer } from "./RoadmapPage.style";

import { Canvas } from "@react-three/fiber";
import BaseBackground from "../../components/roadmap/Threesection/Base/BaseBackground";
import ManTest from "../../components/roadmap/Threesection/Mission/ManTest";
import { Man } from "../../components/roadmap/Threesection/Mission/Man";


const MissionPage = () => {
    const misId = useParams().misNo;
    useEffect(()=>{MisRouter()},[])

    function MisRouter() {
       if(misId === "1"){return(<><Man/></>)}
    }


    return(
        <MissionContainer>
           <ThreeWrapper>
                <Canvas>
                    <directionalLight position={[0,5,0]}/>
                    <ambientLight/>
                    <BaseBackground />
                    {/* {MisRouter()} */}
                    {/* <Man/> */}

                </Canvas>
            </ThreeWrapper>
            <HTMLWrapper>
                <MissionHTML mUId = {misId}/>
            </HTMLWrapper>

        </MissionContainer>

                
    )
}

export default MissionPage;




