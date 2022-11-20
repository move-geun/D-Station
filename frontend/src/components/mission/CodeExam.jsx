import React, { useEffect, useState } from "react";
import { Box, Container, Title, Content } from "./CodeExam.style";
import http from "../../api/http";
import CodeTest from "./CodeTest";
import { useLocation, useNavigate } from "react-router-dom";

const CodeExam = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const Uid = location.state;
  const [name, setName] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    http.connect_axios
      .get(`/grading/muid?uid=${Uid}`)
      .then((res) => {
        setName(res.data.name);
        setContent(res.data.content);
      })
      .catch((err) => {
        alert("문제가 존재하지 않습니다.");
        navigate(-1);
      });
  });

  return (
    <Container>
      <Title>
        <p>{name}</p>
      </Title>
      <Content>
        <p>[문제]</p>
        <p>{content}</p>
      </Content>
      <Box>
        <CodeTest Uid={Uid} />
      </Box>
    </Container>
  );
};

export default CodeExam;
