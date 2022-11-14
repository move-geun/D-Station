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
`;

const Newsmap = styled.div`
  width: 350px;
  height: 500px;
  /* background-color: #110f1c; */
  background-color: tomato;
  position: absolute;
  bottom: 45px;
  left: -150px;
  border-radius: 3px;
  color: white;
`;

export { MainWrapper, CanvasWrapper, FootNav, RocketMap, Newsmap };
