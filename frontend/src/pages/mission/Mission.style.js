import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;

  .left {
    float: left;
    width: 40%;
    border: solid 1px yellow;
  }

  .center {
    width: 5%;
  }

  .right {
    float: right;
    width: 60%;
  }
`;

export { Container };
