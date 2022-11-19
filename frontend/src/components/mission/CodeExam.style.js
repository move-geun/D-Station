import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 10% 10%;
  justify-content: center;
  /* border: solid 2px white; */
  /* border-radius: 10px; */
`;
const Title = styled.div`
  height: 50px;
  margin-bottom: 5%;
  border-bottom: solid 2px white;

  p {
    margin: 2% 1%;
    font-size: 30px;
    font-weight: bold;
  }
`;

const Content = styled.div`
  font-size: 20px;
  p {
    margin: 1% 1% 2% 1%;
  }
`;

export { Container, Title, Content };
