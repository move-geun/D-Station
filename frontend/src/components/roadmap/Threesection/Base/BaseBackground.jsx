import React , {useRef, useState, useEffect}from "react";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";

import * as THREE from "three";
import {
  Stars,
} from "@react-three/drei";


export function Universe() {
   
    const object3D = new THREE.Object3D;
    const objRef = useRef();


    //회전을 위해
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        // objRef.current.rotation.y += 0.0015;

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
      </>
    );
  }

  const BaseBackground = () => {
    return(
        <>
            <Canvas>
                <directionalLight position={[0,5,0]}/>
                <ambientLight/>
                <Universe/>               
            </Canvas>
        </>
    )
};


export default BaseBackground;