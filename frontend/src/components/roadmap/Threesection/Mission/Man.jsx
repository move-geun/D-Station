// import React, {useRef} from "react";
// import { useFrame } from "@react-three/fiber";
// import { useGLTF, useAnimations,   OrbitControls, } from "@react-three/drei";
// import { Scene } from "three";


// export function Man() {


// 	const group = useRef();
// 	const myMesh = React.useRef();
// 	// const {nodes, materials } = useGLTF("/glb/burger_lowpoly.glb");
// 	// console.log("======== ", nodes);
// 	// console.log("======== ", materials);

// 	return(
// 		<group ref={group} dispose={null}>
// 			<group name="Scene" ref={myMesh}>
// 			<mesh 
// 				castShadow
// 				receiveShadow
// 				// geometry={nodes.Object_2.geometry}
// 				// material={materials.02_-_Default}
// 				/>

//  				<OrbitControls
//                 enableZoom={true}
//                 enablePan={true}
//                 enableRotate={true}
//                 zoomSpeed={0.6}
//                 panSpeed={0.5}
//                 rotateSpeed={0.4}
                
//             />

// 			</group>
			
// 		</group>
// 	)
// }


// // useGLTF.preload("/glb/burger_lowpoly.glb");