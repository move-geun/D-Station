import React from "react";
import {
  SearchWraper,
  ContentWrapper,
  RecoSide,
  SearchSide,
  TitleWrapper,
  SearchFunction,
} from "./SearchMap.style";
import http from "../../api/http";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";

const SearchMap = () => {
  const [content, setContent] = useState(null);
  const [resultList, setResultList] = useState(null);
  // search 값 받기
  const searchHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  // 검색
  const getSearch = async (e) => {
    if (e.keyCode === 13) {
      await http.connect_axios
        .get("satellite/search/", {
          params: { keyword: content },
        })
        .then((res) => {
          setResultList(res.data.list);
          console.log(res.data.list);
        });
    }
  };

  return (
    <SearchWraper>
      <TitleWrapper>
        <div className="title">
          <div>🌌</div>
          <div className="neonText">Navigation</div>
        </div>
        <SearchFunction>
          <div className="search">
            <input
              className="searchInput"
              type="text"
              placeholder="search"
              onChange={(e) => searchHandler(e)}
              onKeyUp={(e) => getSearch(e)}
            />
            <SearchIcon style={{ color: "white" }} />
          </div>
        </SearchFunction>
      </TitleWrapper>
      <ContentWrapper>
        <RecoSide>
          <div className="title">⭐추천 과정</div>
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
          {resultList ? <div className="search_title">검색 결과 🚀</div> : null}

          {resultList
            ? resultList.map((result, idx) => {
                const plink = "/planet/" + result.puid;
                if (result.sname === null) {
                  return (
                    <Stack className="spacing" key={idx}>
                      <Breadcrumbs
                        separator="›"
                        aria-label="breadcrumb"
                        color="white"
                      >
                        <div underline="hover" key="1" color="inherit">
                          {result.gname}
                        </div>
                        <a key="2" color="inherit" href={plink}>
                          {result.pname}
                        </a>
                      </Breadcrumbs>
                    </Stack>
                  );
                } else {
                  const plink = "/planet/" + result.puid;
                  const slink = "/satelite/" + result.suid;
                  return (
                    <Stack className="spacing" key={idx}>
                      <Breadcrumbs
                        separator="›"
                        aria-label="breadcrumb"
                        color="white"
                      >
                        <div underline="hover" key="1" color="inherit">
                          {result.gname}
                        </div>
                        <a key="2" color="inherit" href={plink}>
                          {result.pname}
                        </a>
                        <a key="3" color="text.primary" href={slink}>
                          {result.sname}
                        </a>
                      </Breadcrumbs>
                    </Stack>
                  );
                }
              })
            : null}
        </SearchSide>
      </ContentWrapper>
    </SearchWraper>
  );
};

export default SearchMap;
