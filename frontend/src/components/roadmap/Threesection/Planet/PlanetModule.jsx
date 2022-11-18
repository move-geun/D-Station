import React , {useRef, useState, useEffect}from "react";

import {useFrame, useLoader } from "@react-three/fiber";
import {Object3D, TextureLoader } from "three";
import * as THREE from "three";
import {OrbitControls} from "@react-three/drei";

import EarthDayMap from "../../../../assets/images/PebblesColor.jpg";
import EarthBumpMap from "../../../../assets/images/PebblesBump.png";
import EarthSpecularMap from "../../../../assets/images/PebblesColor.jpg";
import PebbleNormal from "../../../../assets/images/PebblesNormal.jpg";

import { Sll1 } from "../Satellite/PythonPlanet/Sll1";
import { GloSll1 } from "../Satellite/GlobalPlanet/GloSll1";


const defaultValue = {};
export function PlanetModule(prop = defaultValue) {

    const [sllCnt, setSllCnt] = useState(null);
    useEffect(()=>{setSllCnt(prop.sllCnt)}, [prop]);
    useEffect(()=>{}, [sllCnt]);

    // 위성 개수만큼 sll컴포 리턴하기
    function CntHandler(){
        let list, i;

        for(i = 0; i < sllCnt; i++){
            list += <GloSll1/>
        }

        const GloSllList = list;
        console.log("Glolist  ", GloSllList);
        return GloSllList;
    }


    const [colorMap, bumpMap, specularMap, normalMap] = useLoader(
      TextureLoader,[EarthDayMap, EarthBumpMap, EarthSpecularMap, PebbleNormal]
    );

    const object3D = new THREE.Object3D;
    const objRef = useRef();
    const earthRef = useRef();

    //회전을 위해
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        objRef.current.rotation.y += 0.0015;
        earthRef.current.rotation.y = elapsedTime / 6;
    });
  
    return (
      <>
        <pointLight color="#2a2503" position={[2, 1, 1]} intensity={1} />
        <object3D ref={objRef}>
            <mesh 
            ref={earthRef}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial
                map={colorMap}
                metalness={0.4}
                normalMap={normalMap}
                displacementMap={bumpMap}    
                displacementScale={0.5}
                roughness={0.8}            
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
            {CntHandler()}

        </object3D>   
      </>
    );
  }


