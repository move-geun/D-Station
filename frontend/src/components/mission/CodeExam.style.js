import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 5% 10% 0% 10%;
  justify-content: center;
`;
const Title = styled.div`
  height: 50px;
  padding-bottom: 20px;
  margin-bottom: 2%;
  border-bottom: solid 2px white;
  p {
    margin: 2% 1%;
    font-size: 50px;
    font-weight: bold;
    color: bisque;
  }
`;

const Content = styled.div`
  float: left;
  white-space: normal;
  font-size: 20px;
  width: 35%;
  height: 600px;
  padding-right: 10px;
  border-right: solid 2px white;
  margin-right: 10px;
  p {
    margin: 1% 1% 2% 5%;
    line-height: 2;
  }
`;

const Box = styled.div`
  float: left;
  width: 50%;
`;

export { Box, Container, Title, Content };
