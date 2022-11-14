import React from "react";
import { Container, Contents, Name, ButtonGroup } from "./Comment.style";
import http from "../../api/http";
import isAuthenticated from "../../api/isAuthenticated";
import { getUserId } from "../../api/JWT";
import CommentModify from "./CommentModify";

const Comment = ({ Uid, Nickname, Content, User, JisikinId }) => {
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

  const modify = () => {
    <CommentModify />;
  };

  return (
    <Container>
      <Contents>{Content}</Contents>
      <Name>{Nickname}</Name>
      {isAuthenticated() && userId == User ? (
        <ButtonGroup>
          <button className="modify" onClick={modify} value={(Uid, JisikinId)}>
            수정
          </button>
          <button className="delete" onClick={del}>
            삭제
          </button>
        </ButtonGroup>
      ) : null}
    </Container>
  );
};

export default Comment;
