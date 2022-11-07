import styled from "styled-components";

const SurveyContainer = styled.div`
  height: 100%;
  background-color: #d5c9e8;
  position: relative;

  img {
    position: absolute;
    right: -30px;
    bottom: 20px;
    width: 40%;
    height: 70%;
    animation: ani 1.5s infinite alternate;
  }
  @keyframes ani {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 20px);
    }
  }
`;

const Bubble = styled.div`
  position: absolute;
  width: 60%;
  height: 60%;
  background-color: white;
  color: black;
  left: 10%;
  top: 10%;
  border-radius: 30px;

  .bubble_container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: black;

    .txt {
      font-size: 30px;
      white-space: normal;
    }
    .location {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    button {
      background-color: #f9b964;
      color: white;
      font-size: 25px;
      font-weight: 700;
      padding: 5px 10px;
      border-radius: 10px;
      white-space: normal;
    }
    button:nth-child(2) {
      background-color: #8ca09c;
    }
  }
`;

export { SurveyContainer, Bubble };
