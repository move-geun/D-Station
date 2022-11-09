import React from "react";
import { Function, Container, Page } from "./QuestionListPage.style";
import Question from "../../components/board/Question";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";


import { UserIdState } from "../../recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { getUserId } from "../../api/JWT";

const QuestionListPage = () => {
  // const [userId, setUserId] = useRecoilState(UserIdState);
  // const userId = useRecoilValue(UserIdState);
  const userId = getUserId();

  console.log("질문게시판 아이디   ", userId);
  return (
    <div>
      <Function>
        <div className="write">
          <a className="writeBtn" href="./writequestion">
            <CreateIcon />
          </a>
        </div>
        <div className="search">
          <input className="searchInput" type="text" placeholder="search" />
          <a className="searchBtn" href="#">
            <SearchIcon />
          </a>
        </div>
      </Function>
      <Container>
        <Question />

      </Container>
    </div>
  );
};

export default QuestionListPage;
