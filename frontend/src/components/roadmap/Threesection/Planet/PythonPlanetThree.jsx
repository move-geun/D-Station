import React , {useRef, useState, useEffect}from "react";
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

import EarthDayMap from "../../../../assets/images/pythonLogo.png";
import EarthNormalMap from "../../../../assets/images/earthbump.jpg";
import EarthSpecularMap from "../../../../assets/images/specularmap.jpg";
import EarthCloudsMap from "../../../../assets/images/earthCloud.png";

import { Sll1 } from "../Satellite/PythonPlanet/Sll1";
import { Sll2 } from "../Satellite/PythonPlanet/Sll2";
import { Sll3 } from "../Satellite/PythonPlanet/Sll3";
import { Sll4 } from "../Satellite/PythonPlanet/Sll4";



export function PlanetPython() {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
      TextureLoader,
      [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
    );

    const object3D = new THREE.Object3D;
    const objRef = useRef();
    const earthRef = useRef();
    const moonRef = useRef();

    //회전을 위해
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        objRef.current.rotation.y += 0.0015;
        earthRef.current.rotation.y = elapsedTime / 6;
    });
  
    return (
      <>
        <pointLight color="#2a2503" position={[2, 1, 1]} intensity={1} />
        <Stars
          radius={300}
          depth={60}
          count={7000}
          factor={7}
          saturation={0}
          fade={false}
        />
        <object3D ref={objRef}>
            <mesh 
            ref={earthRef} 
            // position={[-2, 0, -4]}
            >
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial
                map={colorMap}
                metalness={0.4}                
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
            {/* <Sate1 ref={moonRef}/> */}
            <Sll1 ref={moonRef} />
            {/* <Sll2/>
            <Sll3 />
            <Sll4/> */}
        </object3D>   
      </>
    );
  }

  // export function Sate1() {
  //   const [colorMap, bumpMap, specularMap, normalMap] = useLoader(
  //     TextureLoader,[SatelliteColor, SatelliteBump, SatelliteSpecular, SatelliteNormal]
  //   );
  //   // const [hovered, setHover] = useState(false);
  //   const [clickActive, setClickActive] = useState(false);

  //   const sateRef = useRef();
  //   const navigate = useNavigate();

  //   useEffect(()=>{
  //     if(clickActive){
  //       goToSatellite();
  //     }
  //   }, [clickActive])

  //   //회전을 위해
  //   useFrame(({ clock }) => {
  //     const elapsedTime = clock.getElapsedTime();
  //     sateRef.current.rotation.y = elapsedTime / 6;
  //   });

  //   const goToSatellite = () => {
  //       console.log("자료구조 클릭");
  //       navigate("/satellite");
  //   }
  
  //   return (
  //     <>
  //       <mesh 
  //           ref={sateRef} 
  //           position={[3, 0, 0]}
  //           // onPointerOver={(event) => setHover(true)}
  //           // onPointerOut={(event) => setHover(false)}
  //           onClick={()=> setClickActive(true)}
  //       >

  //           {/* {hovered? <Html position={[2, 0.6, 0]}>자료구조</Html> : <></>} */}

  //           <sphereGeometry args={[0.5, 32, 32]} />
  //           <meshPhongMaterial specularMap={specularMap} />
  //           <meshStandardMaterial
  //               map={colorMap}
  //               metalness={0.4}
  //               bumpMap={bumpMap}
  //               normalMap={normalMap}
  //               bumpScale={0.3}
  //           /> 

  //       </mesh>
  //     </>
  //   );
  // }
  
const PythonPlanetThree = () => {
    return(
        <>
            <Canvas>
                <directionalLight position={[0,5,0]}/>
                <ambientLight/>
                <PlanetPython/>
                
            </Canvas>
        </>
    )
};

export default PythonPlanetThree;