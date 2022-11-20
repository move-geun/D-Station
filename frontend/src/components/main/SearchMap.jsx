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
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";

const SearchMap = () => {
  const [content, setContent] = useState(null);
  const [resultList, setResultList] = useState(null);
  const navigate = useNavigate();
  // search 값 받기
  const searchHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  // 검색
  const getSearch = async (e) => {
    try {
      if (e.keyCode === 13) {
        await http.connect_axios
          .get("satellite/search/", {
            params: { keyword: content },
          })
          .then((res) => {
            setResultList(res.data.list);
          });
      }
    } catch (err) {
      setResultList("X");
    }
  };

  return (
    <SearchWraper>
      <TitleWrapper>
        <div className="title">
          <div>🌌</div>
          <div className="neonText">Path Finder</div>
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
              <div onClick={() => navigate("/planet/1")}>
                <img src="../assets/python.png" alt="" />
              </div>
              <div onClick={() => navigate("/satellite/136")}>
                <img src="../assets/c.png" alt="" />
              </div>
              <div onClick={() => navigate("/planet/2")}>
                <img src="../assets/java.png" alt="" />
              </div>
            </div>
            <div className="logobox">
              <div onClick={() => navigate("/planet/34")}>
                <img src="../assets/html.png" alt="" />
              </div>
              <div onClick={() => navigate("/planet/35")}>
                <img src="../assets/css.png" alt="" />
              </div>
              <div onClick={() => navigate("/satellite/242")}>
                <img src="../assets/mysql.png" alt="" />
              </div>
            </div>
            <div className="logobox">
              <div onClick={() => navigate("/satellite/350")}>
                <img src="../assets/react.png" alt="" />
              </div>
              <div onClick={() => navigate("/mission/628")}>
                <img src="../assets/springboot.png" alt="" />
              </div>
              <div onClick={() => navigate("/satellite/352")}>
                <img src="../assets/vue.png" alt="" />
              </div>
            </div>
          </div>
        </RecoSide>
        <SearchSide>
          {resultList ? <div className="search_title">검색 결과 🚀</div> : null}

          {resultList
            ? resultList.map((result, idx) => {
                const plink = "/planet/" + result.puid;
                const glink = "/galaxy/" + result.guid;
                if (result.sname === null) {
                  return (
                    <Stack className="spacing" key={idx}>
                      <Breadcrumbs
                        separator="›"
                        aria-label="breadcrumb"
                        color="white"
                      >
                        <a key="1" color="inherit" href={glink}>
                          {result.gname}
                        </a>
                        <a key="2" color="inherit" href={plink}>
                          {result.pname}
                        </a>
                      </Breadcrumbs>
                    </Stack>
                  );
                } else {
                  const glink = "/galaxy/" + result.guid;
                  const plink = "/planet/" + result.puid;
                  const slink = "/satellite/" + result.suid;
                  return (
                    <Stack className="spacing" key={idx}>
                      <Breadcrumbs
                        separator="›"
                        aria-label="breadcrumb"
                        color="white"
                      >
                        <a key="1" color="inherit" href={glink}>
                          {result.gname}
                        </a>
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
