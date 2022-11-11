import React from "react";
import {
  SearchWraper,
  ContentWrapper,
  RecoSide,
  SearchSide,
} from "./SearchMap.style";

const SearchMap = () => {
  return (
    <SearchWraper>
      <div className="title">바로가기</div>
      <ContentWrapper>
        <RecoSide>
          <div className="title">추천 과정</div>
          <div className="logo_container">
            <div className="logobox">
              <img src="../assets/python.png" alt="" />
              <img src="../assets/c.png" alt="" />
              <img src="../assets/java.png" alt="" />
            </div>
            <div className="logobox">
              <img src="../assets/html.png" alt="" />
              <img src="../assets/css.png" alt="" />
              <img src="../assets/mysql.png" alt="" />
            </div>
            <div className="logobox">
              <img src="../assets/react.png" alt="" />
              <img src="../assets/springboot.png" alt="" />
              <img src="../assets/vue.png" alt="" />
            </div>
            <div className="logobox">
              <img src="../assets/jenkins.png" alt="" />
              <img src="../assets/spring.png" alt="" />
              <img src="../assets/docker.png" alt="" />
            </div>
          </div>
        </RecoSide>
        <SearchSide>
          <div className="title">검색창</div>
        </SearchSide>
      </ContentWrapper>
    </SearchWraper>
  );
};

export default SearchMap;
