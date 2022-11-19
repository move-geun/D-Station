import React, { useState } from "react";
import { Container, Contents, Name, ButtonGroup } from "./Comment.style";
import { Editor } from "@tinymce/tinymce-react";
import http from "../../api/http";
import isAuthenticated from "../../api/isAuthenticated";
import { getUserId } from "../../api/JWT";
import CommentModify from "./CommentModify";

const Comment = ({ Uid, Nickname, Content, User, JisikinId }) => {
  const userId = getUserId();
  const [show, setShow] = useState(false);

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

  const handleModi = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Name>{Nickname}</Name>
      <Contents>
        <Editor
          apiKey="mv47x1bf7revpqmsvwdqta54w2b390xyi1wmkmlthp83qlkj"
          initialValue={Content}
          init={{
            readonly: 1,
            selector: "textarea",
            skin: "oxide-dark",
            content_css: "dark",
            height: 100,
            menubar: false,
            toolbar: false,
            statusbar: false,
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </Contents>
      {isAuthenticated() && userId == User ? (
        <ButtonGroup>
          <button className="modify" onClick={handleModi}>
            수정
          </button>
          <button className="delete" onClick={del}>
            삭제
          </button>
        </ButtonGroup>
      ) : null}
      {show ? (
        <CommentModify Uid={Uid} JisikinId={JisikinId} Content={Content} />
      ) : null}
    </Container>
  );
};

export default Comment;
