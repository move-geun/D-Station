import React from "react";
import CodeTest from "../../components/mission/CodeTest";
import CodeExam from "../../components/mission/CodeExam";
import { Container } from "./Mission.style";

const Mission = () => {
  return (
    <>
      <Container>
        <div className="left"></div>
        <div className="center"></div>
        <div className="right">
          <CodeExam/>
          <CodeTest />
        </div>
      </Container>
    </>
  );
};

export default Mission;
