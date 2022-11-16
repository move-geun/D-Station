import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export function Sll6(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/glb/zophrac.glb");
    // const { nodes, materials, animations } = useGLTF("/glb/moon.glb");
    console.log("!!!!!    ", nodes);
    console.log("22222   ", materials);

  // const { actions } = useAnimations(animations, group);
  // useEffect(() => {
  //   actions.play();
  // });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
      {/* <mesh
        castShadow
        receiveShadow
          geometry={nodes.geo1_MAT_Mask_Hulk2_0.geometry}
          material={materials.COC_iOS_HER_TST_VII_B}
       />    */}
      </group>
    </group>
  );
}

useGLTF.preload("/glb/daredevil_helmet.glb");
  
