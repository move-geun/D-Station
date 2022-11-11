import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { getUserId } from "../../api/JWT";

const QuestionDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = getUserId();
  const [items, setItems] = useState(null);
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [nickname, setNickname] = useState();
  const [tag, setTag] = useState();
  const [content, setContent] = useState();
  console.log(items);
  console.log(title);

  useEffect(() => {
    const Uid = location.state.id.Uid;
    http.connect_axios.get(`/ask/detail?uid=${Uid}`).then((res) => {
      setItems(res.data);
      setTitle(res.data.title);
      setDate(res.data.theDate);
      setNickname(res.data.nickname);
      setTag(res.data.tag);
      setContent(res.data.content);
    });
  }, []);

  const del = () => {
    const Uid = items.uid;
    http.connect_axios
      .delete(`/ask/detail?uid=${Uid}&userId=${userId}`)
      .then((res) => {
        console.log(res);
        alert("삭제가 완료되었습니다.");
        navigate(`/questionlist`);
      })
      .catch((err) => {
        console.log(err);
        alert("삭제 실패실패!");
      });
  };

  return (
    <Container>
      {/* 제목 */}
      <Title>
        <p className="title">제목: {title}</p>
        <Tag>
          {tag}/{nickname}/{date}
        </Tag>
      </Title>
      {/* 게시내용 */}
      <Content>{content}</Content>
      {/* 버튼그룹 */}
      <Buttons>
        <Button style={{ color: "yellow" }}>수정</Button>
        <Button style={{ color: "orangered" }} onClick={del}>
          삭제
        </Button>
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
