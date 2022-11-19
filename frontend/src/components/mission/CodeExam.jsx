import React, { useEffect, useState } from "react";
import { Container, Title, Content } from "./CodeExam.style";
import http from "../../api/http";
import CodeTest from "./CodeTest";

const CodeExam = ({ Uid }) => {
  const [name, setName] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    http.connect_axios
      .get(`/grading/muid?uid=%{Uid}`)
      .then((res) => {
        console.log(res);
        setName(res.name);
        setContent(res.content);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Container>
      <Title>
        <p>문제: {name}</p>
      </Title>
      <Content>
        <p>문제내용 : {content}</p>
        {/* <p>조건 : Python print문 이용하기</p> */}
      </Content>
      <CodeTest />
    </Container>
  );
};

export default CodeExam;
