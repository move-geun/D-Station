import React from "react";
import { Container, Contents, Name, ButtonGroup } from "./Comment.style";
import http from "../../api/http";
import { getUserId } from "../../api/JWT";

const Comment = ({ Uid, Nickname, Content }) => {
  const userId = getUserId();

  const del = () => {
    http.connect_axios
      .delete(`/reply/?uid=${Uid}&userId=${userId}`)
      .then((res) => {
        alert("댓글이 삭제되었습니다.😁😀");
        window.location.reload();
      })
      .catch((err) => {
        alert("댓글 삭제 실패😅");
      });
  };
  return (
    <Container>
      <Contents>{Content}</Contents>
      <Name>{Nickname}</Name>
      <ButtonGroup>
        <button className="modify">수정</button>
        <button className="delete" onClick={del}>
          삭제
        </button>
      </ButtonGroup>
    </Container>
  );
};

export default Comment;
