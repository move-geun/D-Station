import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
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
  }
`;

const RocketMap = styled.div`
  width: 200px;
  height: 300px;
`;

export { MainWrapper, CanvasWrapper, FootNav, RocketMap };
