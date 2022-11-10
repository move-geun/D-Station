import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  Title,
  Tag,
  Content,
  Buttons,
  Button,
  Comment,
} from "./QuestionDetail.style";
import CommentEditor from "../../components/board/CommentEditor";
import CommentDetail from "../../components/board/Comment";
import http from "../../api/http";

const QuestionDetail = () => {
  const location = useLocation();
  const [items, setItems] = useState(null);
  const [title, setTitle] = useState();
  console.log(items);

  useEffect(() => {
    const Uid = location.state.id.Uid;
    http.connect_axios.get(`/ask/detail?uid=${Uid}`).then((res) => {
      setItems(res.data);
      setTitle(res.data.title);
    });
  }, []);

  const data = items;

  return (
    <Container>
      {/* 제목 */}
      <Title>
        <p className="title" value={title}>제목: </p>
        <Tag>작성일/조회수/글쓴이</Tag>
      </Title>
      {/* 게시내용 */}
      <Content>내용</Content>
      {/* 버튼그룹 */}
      <Buttons>
        <Button style={{ color: "yellow" }}>수정</Button>
        <Button style={{ color: "orangered" }}>삭제</Button>
        <Button style={{ color: "yellowgreen" }}>
          <Link
            to="/questionlist"
            style={{ textDecoration: "none", color: "yellowgreen" }}
          >
            목록으로
          </Link>
        </Button>
      </Buttons>
      {/* 댓글시작 */}
      <Comment>
        <p>댓글총개수</p>
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
      </Comment>
      <CommentEditor />
    </Container>
  );
};

export default QuestionDetail;
