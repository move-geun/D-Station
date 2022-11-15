import styled from "styled-components";

const SurveyContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  /* background-color: #d5c9e8; */
  background-color: black;
  position: relative;

  img {
    position: absolute;
    right: 60px;
    bottom: 150px;
    width: 30%;
    height: 50%;
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
  margin-top: 50px;
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

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .nav {
    height: 80px;
  }
`;

const ResultContent = styled.div`
  width: 700px;
  height: 700px;
  background-color: black;
  border-radius: 10px;
  color: black;

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

export { SurveyContainer, Bubble, ResultContainer, ResultContent };
