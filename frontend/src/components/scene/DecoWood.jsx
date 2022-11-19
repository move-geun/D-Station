import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF, useScroll, OrbitControls } from "@react-three/drei";
import http from "../../api/http";
import { getUserId } from "../../api/JWT";
import { useRecoilState } from "recoil";
import { NavMissionIntoThree } from "../../recoil/atoms";


const defaultValue = {};
export function DecoWood(props = defaultValue) {

  const userId = getUserId();
  const [quizData, setQuizData] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState();
  const { nodes, materials } = useGLTF("/glb/decorative_wooden.glb");
  const [quizResult, setQuizResult] = useState(null);
  const [quizResultMessage, setQuizResultMessage] = useState("");
  const [whichOne, setWhichOne] = useRecoilState(NavMissionIntoThree);

  useEffect(()=>{
    console.log("우드우드", props);
    setQuizData(props.data);
  
  }, [props]);
  useEffect(()=>{}, [quizData, quizAnswer]);
  useEffect(()=>{quizHandler()}, [quizResult])

  function AnsHandler(prop){
    setQuizAnswer(prop);

    const data = {
      id: userId,
      quid: quizData.quid,
      userAnswer: prop,
    }

    http.connect_axios
    .post(`/quiz/correct`, JSON.stringify(data), {
      headers: {
        "Content-Type": `application/json`,
      },
    })
    .then((res)=> {
      console.log("퀴즈 결과 보내기!!!" , res)
      setQuizResult(res.data);
      
    })
    .catch((err)=>{console.log(data)})

  }

  function quizHandler() {
    if(quizResult === true){setWhichOne("quizSuccess");}
    else if(quizResult === false){setWhichOne("quizFail");}
  }

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.board_Mat}
          // position={[-0.07, 1.39, -1.06]}
          scale={0.04}
        />
        <Html
           position={[-0.35, -0.3, 1]}
        >
          <h1>QUIZ</h1>
        </Html>
        <Html
           position={[-5, 10, -1.06]}
          >
            {quizData !== null ? (
              // <div>안뇽</div>
            <p>{quizData.content}</p>
            )
            : 
            (<div>데이터를 불러오는 중입니다.</div>)}

              <span onClick={()=> AnsHandler(true)}>⭕</span>
              <span onClick={()=> AnsHandler(false)}>❌</span>
      
              <div>{quizResultMessage}</div>
          </Html>


      </group>
    </group>
  );
}

useGLTF.preload("/glb/decorative_wooden.glb");
