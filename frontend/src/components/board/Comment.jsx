import React from "react";
import { Container, Contents, Tag } from "./Comment.style";

const Comment = ({ Nickname, Content }) => {
  return (
    <Container>
      <Contents>{Content}</Contents>
      <Tag>{Nickname}</Tag>
    </Container>
  );
};

export default Comment;
