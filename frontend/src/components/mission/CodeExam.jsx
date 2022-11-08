import React from "react";
import { Container, Title, Content } from "./CodeExam.style";

const CodeExam = () => {
  return (
    <Container>
      <Title>
        <p>문제: 파이썬 기초 문법</p>
      </Title>
      <Content>
        <p>문제내용 : 'Hello Print'를 출력하세요.</p>
        <p>조건 : Python print문 이용하기</p>
      </Content>
    </Container>
  );
};

export default CodeExam;
