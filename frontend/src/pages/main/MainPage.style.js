import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const CanvasWrapper = styled.div`
  width: 100%;
  height: 90%;
  background-color: black;
  color: white;
  z-index: 1;
`;

const FootNav = styled.div`
  width: 100%;
  height: 10%;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  .profile {
    margin-left: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .flexWrapInfo {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 24px;
    justify-content: flex-start;

    div {
      margin: 0 8px;
    }
    .expBar {
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      .perbox {
        position: relative;
        background-color: gray;
        margin-top: 5px;
        border-radius: 10px;
        width: 100%;
        height: 20px;

        .nowper {
          position: absolute;
          background-color: tomato;
          border-radius: 10px;
          height: 20px;
          left: -8px;
        }
      }
    }
  }
  .flexWrap {
    width: 50%;
    padding-right: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    svg {
      margin: 0 20px;
    }

    .news {
      position: relative;
    }
  }
`;

const RocketMap = styled.div`
  width: 800px;
  height: 350px;
  background-color: #110f1c;
  position: absolute;
  right: 25%;
  top: 25%;
  border-radius: 3px;
  color: white;
  border: 2px solid rgba(255, 255, 255);
  z-index: 999;
`;

const Newsmap = styled.div`
  width: 400px;
  height: 580px;
  background-color: #110f1c;
  /* background-color: tomato; */
  position: absolute;
  bottom: 50px;
  left: -170px;
  border-radius: 3px;
  color: white;
  border-radius: 20px;
  z-index: 0;
`;

export { MainWrapper, CanvasWrapper, FootNav, RocketMap, Newsmap };
