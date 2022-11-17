import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import http from "../../api/http";
import PlanetHTML from "../../components/roadmap/HTMLsection/PlanetHTML";

import {HTMLWrapper, ThreeWrapper} from "../../components/roadmap/Roadmap.style";
import { PlanetContatiner } from "./RoadmapPage.style";

import { Canvas } from "@react-three/fiber";
import PythonPlanetThree, { PlanetPython } from "../../components/roadmap/Threesection/Planet/PythonPlanetThree";
import BaseBackground from "../../components/roadmap/Threesection/Base/BaseBackground";

const PlanetPage = () => {
  const planetId = useParams().plantNo;

  function PlantRouter() {
    if (planetId === "1") { return <PlanetPython/>}
    else if(planetId === "2"){return <></>}
  }
  const [planetData, setPlanetData] = useState("");
  const [planetUid, setPlanetUid] = useState(null);
  const [satelliteList, setSatelliteList] = useState();
  useEffect(() => {}, [planetData, planetUid, satelliteList]);
  useEffect(() => {
    http.connect_axios
      .get(`/planet/uid?uid=${planetId}`)
      .then((res) => {
        setPlanetData(res.data);
        setPlanetUid(planetId);
        // setSatelliteList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PlanetContatiner>
      <ThreeWrapper>
        <Canvas>
          <directionalLight position={[0, 5, 0]} />
          <ambientLight />
          <BaseBackground />
          {PlantRouter()}
        </Canvas>
      </ThreeWrapper>
      <HTMLWrapper>
        <PlanetHTML Pdata={planetData} />
      </HTMLWrapper>
    </PlanetContatiner>
  );
};

export default PlanetPage;
