import styled from "styled-components";

const SearchWraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .title {
    width: 90%;
    font-size: 20px;
    font-style: bold;
    text-align: left;
    margin-top: 10px;
  }

  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
        0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
    }
    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }
  .neonText {
    animation: flicker 1.5s infinite alternate;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RecoSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .title {
    width: 90%;
    font-size: 1.2rem;
    margin: 20px;
    text-align: left;
  }

  .logo_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .logobox {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

const SearchSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .title {
    font-size: 1rem;
  }

  .spacing {
    width: 80%;
    text-align: start;
    margin: 5px 0;
  }

  .search_title {
    width: 100%;
    font-size: 1.2rem;
    text-align: start;
    margin-top: 65px;
    margin-bottom: 10px;
  }
`;

const SearchFunction = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 5%;
  position: relative;
  align-items: center;

  .search {
    position: absolute;
    padding: 10px;
    top: 0px;
    left: 130px;
    transform: translate(-100%, 0);
    height: 30px;
    background-color: #fff;
    border: 1px solid #51e3d4;
    border-radius: 30px;
    transition: 0.4s;
    width: 30px;
  }

  .search:hover {
    box-shadow: 0px 0px 0.5px 1px #51e3d4;
    width: 282px;
  }

  .searchBtn {
    text-decoration: none;
    float: right;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #51e3d4;
  }

  .search:hover > .searchBtn {
    background-color: #fff;
  }

  .searchInput {
    display: flex;
    padding: 0;
    width: 0px;
    border: none;
    background: none;
    outline: none;
    float: left;
    font-size: 1rem;
    line-height: 30px;
    transition: 0.4s;
  }

  .search:hover > .searchInput {
    width: 240px;
    padding: 0 6px;
  }
`;

export { SearchWraper, ContentWrapper, RecoSide, SearchSide, SearchFunction };
