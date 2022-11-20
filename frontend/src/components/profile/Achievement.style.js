import styled from "styled-components";

const AchieveContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .title {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

const Board = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 120px;
  background-color: gray;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  img {
    :first-child {
      margin-left: 10px;
    }
    margin: 13px;
    width: 70px;
    height: 70px;
    /* border-radius: 50%; */
  }
`;

const Progressbox = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  .proimg {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  div {
    margin-left: 10px;
  }
`;

export { AchieveContainer, Board, Progressbox };
