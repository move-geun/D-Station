import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Component, HeadGroup } from "./WriteQuestionPage.style";
import QuestionEditor from "../../components/board/QuestionEditor";

const WriteQuestionPage = () => {
  return (
    <Component>
      <HeadGroup>
        <h1>⚡CSS 질문하기</h1>
        <a href="/questionlist">
          <CloseIcon
            fontSize="large"
            sx={{
              color: "white",
              borderRadius: "50px",
              marginTop: "25px",
            }}
          />
        </a>
      </HeadGroup>
      <QuestionEditor />
    </Component>
  );
};

export default WriteQuestionPage;
