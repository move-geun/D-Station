import React from "react";
import { Link } from "react-router-dom";
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

const QuestionDetail = () => {
  return (
    <Container>
      {/* 제목 */}
      <Title>
        <p className="title">제목 들어갈 자리</p>
        <Tag>작성일/조회수/글쓴이</Tag>
      </Title>
      {/* 게시내용 */}
      <Content>내용들어갈 자리</Content>
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
