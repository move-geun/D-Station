import React from "react";
import {
  SearchWraper,
  ContentWrapper,
  RecoSide,
  SearchSide,
  SearchFunction,
} from "./SearchMap.style";
import SearchIcon from "@mui/icons-material/Search";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";

const SearchMap = () => {
  return (
    <SearchWraper>
      <div className="title">Navigation</div>
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
          <SearchFunction>
            <div className="search">
              <input className="searchInput" type="text" placeholder="search" />
              <SearchIcon />
            </div>
          </SearchFunction>
          <div className="search_title">검색 결과 . . .</div>
          <Stack spacing={2} className="spacing">
            <Breadcrumbs separator="›" aria-label="breadcrumb" color="white">
              <div underline="hover" key="1" color="inherit">
                Start
              </div>
              <div underline="hover" key="2" color="inherit">
                Core
              </div>
              <div key="3" color="text.primary" href="/">
                Breadcrumb
              </div>
            </Breadcrumbs>
          </Stack>
          <Stack spacing={2} className="spacing">
            <Breadcrumbs separator="›" aria-label="breadcrumb" color="white">
              <div underline="hover" key="1" color="inherit">
                Start
              </div>
              <div underline="hover" key="2" color="inherit">
                Core
              </div>
              <div key="3" color="text.primary" href="/">
                Breadcrumb
              </div>
            </Breadcrumbs>
          </Stack>
          <Stack spacing={2} className="spacing">
            <Breadcrumbs separator="›" aria-label="breadcrumb" color="white">
              <div underline="hover" key="1" color="inherit">
                Start
              </div>
              <div underline="hover" key="2" color="inherit">
                Core
              </div>
              <div key="3" color="text.primary" href="/">
                Breadcrumb
              </div>
            </Breadcrumbs>
          </Stack>
        </SearchSide>
      </ContentWrapper>
    </SearchWraper>
  );
};

export default SearchMap;
