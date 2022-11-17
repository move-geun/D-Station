import React , {useRef, useState}from "react";
import { useNavigate } from "react-router-dom";

import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import {Object3D, TextureLoader } from "three";
import * as THREE from "three";
import {
  OrbitControls,
  Stars,
  Billboard,
  Html,
} from "@react-three/drei";

import SatelliteColor from "../../../../../assets/images/canyonRockColor.jpg";
import SatelliteBump from "../../../../../assets/images/canyonRockBump.png";
import SatelliteSpecular from "../../../../../assets/images/canyonRockSpecular.jpg";
import SatelliteNormal from "../../../../../assets/images/canyonRockNormal.jpg";
import { useEffect } from "react";

export function Sll4() {
    const [colorMap, bumpMap, specularMap, normalMap] = useLoader(
      TextureLoader,[SatelliteColor, SatelliteBump, SatelliteSpecular, SatelliteNormal]
    );
    // const [hovered, setHover] = useState(false);
    const [clickActive, setClickActive] = useState(false);

    const sateRef = useRef();
    const navigate = useNavigate();

    useEffect(()=>{
      if(clickActive){ goToSatellite()}}, [clickActive]);

    //회전을 위해
    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
      sateRef.current.rotation.y = elapsedTime / 6;
    });

    const goToSatellite = () => {
        navigate("/satellite/4");
    }
  
    return (
      <>
        <mesh 
            ref={sateRef} 
            position={[-3, 0, 1]}
            // onPointerOver={(event) => setHover(true)}
            // onPointerOut={(event) => setHover(false)}
            onClick={()=> setClickActive(true)}
        >

            {/* {hovered? <Html position={[2, 0.6, 0]}>자료구조</Html> : <></>} */}

            <sphereGeometry args={[0.2, 32, 32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial
                map={colorMap}
                metalness={0.4}
                bumpMap={bumpMap}
                normalMap={normalMap}
                bumpScale={0.3}
            /> 
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4}
                
            />

        </mesh>
      </>
    );
  }
  