import * as React from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { Component, HeadGroup } from "./WriteQuestionPage.style";
import QuestionEditor from "../../components/board/QuestionEditor";

const WriteQuestionPage = () => {
  async function postData() {
    try {
      // "http://k7e106.p.ssafy.io:8081/api/ask/?%EB%82%B4%EC%9A%A9=1&%EC%A0%9C%EB%AA%A9=1&SUid=1"
      const response = await axios.post(
        `http://k7e106.p.ssafy.io:8081/api/ask?%EB%82%B4%EC%9A%A9=${"내용이 없슴다"}&%EC%A0%9C%EB%AA%A9=${"제목이없슴다"}&SUid=${1}`
      );
      console.log(response);
      console.alert("게시글이 업로드 되었습니다");
    } catch (error) {
      console.error(error);
    }
  }

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
