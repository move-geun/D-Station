import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-left: 15%;
  margin-right: 15%;
`;
const Title = styled.div`
  border-bottom: solid 2px white;

  .title {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

const Tag = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: gray;
`;

const Content = styled.div`
  height: fit-content;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 20px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  margin: 5px;
  width: fit-content;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  border: solid 1px;
  border-radius: 10px;
`;

const Comment = styled.div`
  font-size: 30px;
`;

export { Container, Title, Tag, Content, Buttons, Button, Comment };
