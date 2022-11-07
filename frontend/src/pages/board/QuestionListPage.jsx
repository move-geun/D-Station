import React from "react";
import { Function, Container, Page } from "./QuestionListPage.style";
import Question from "../../components/board/Question";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";

const QuestionListPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "0px" }}>D-Station</h1>
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
