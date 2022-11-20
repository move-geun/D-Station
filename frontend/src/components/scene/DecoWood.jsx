import React, { useEffect, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import http from "../../api/http";
import { getUserId } from "../../api/JWT";
import { useRecoilState } from "recoil";
import { NavMissionIntoThree } from "../../recoil/atoms";

const defaultValue = {};
export function DecoWood(props = defaultValue) {
  const userId = getUserId();
  const [quizData, setQuizData] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState();
  const { nodes, materials } = useGLTF("/glb/decorative_wooden_plate.glb");
  const [quizResult, setQuizResult] = useState(null);
  const [quizResultMessage, setQuizResultMessage] = useState("");
  const [whichOne, setWhichOne] = useRecoilState(NavMissionIntoThree);
  const [hovered, setHover] = useState(false);

  useEffect(() => {
    setQuizData(props.data);
  }, [props]);
  useEffect(() => {}, [quizData, quizAnswer]);
  useEffect(() => {
    quizHandler();
  }, [quizResult]);
  useEffect(() => {
    if (hovered) {
    }
  }, [hovered]);

  function AnsHandler(prop) {
    setQuizAnswer(prop);

    const data = {
      id: userId,
      quid: quizData.quid,
      userAnswer: prop,
    };

    http.connect_axios
      .post(`/quiz/correct`, JSON.stringify(data), {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        console.log("퀴즈 결과 보내기!!!", res);
        setQuizResult(res.data);
      })
      .catch((err) => {
        console.log(data);
      });
  }

  function quizHandler() {
    if (quizResult === true) {
      setWhichOne("quizSuccess");
    } else if (quizResult === false) {
      setWhichOne("quizFail");
    }
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
        <Html position={[-0.8, 0, 1]}>
          <span
            style={{
              fontSize: 70,
              letterSpacing: -0.5,
              color: "black",
            }}
          >
            QUIZ
          </span>
        </Html>
        <Html position={[-10, 10, -1.06]}>
          {quizData !== null ? (
            <div
              style={{
                fontSize: 30,
                letterSpacing: -0.5,
              }}
            >
              {quizData.content}
            </div>
          ) : (
            <div>데이터를 불러오는 중입니다.</div>
          )}

          <span
            style={{
              position: "absolute",
              fontSize: 100,
              left: 240,
            }}
            onClick={() => AnsHandler(true)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
          >
            ⭕
          </span>
          <span
            style={{
              position: "absolute",
              fontSize: 100,
              left: 370,
            }}
            onClick={() => AnsHandler(false)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
          >
            ❌
          </span>
          <div>{quizResultMessage}</div>
        </Html>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/decorative_wooden_plate.glb");
