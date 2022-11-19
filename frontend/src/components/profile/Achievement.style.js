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

  .progressbox {
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

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

export { AchieveContainer, Board };
