import styled from "styled-components";

const Container = styled.div`
  height: max-content;
  border-bottom: solid 1px white;
`;

const Contents = styled.p`
  font-size: 20px;
`;

const Name = styled.p`
  font-size: 15px;
  color: gray;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 10px;
  margin-bottom: 20px;

  .modify {
    border-radius: 10px;
    margin-right: 10px;
    width: 50px;
    height: 30px;
    background-color: transparent;
    border: solid 1px green;
    color: green;
    font-weight: bold;
  }

  .delete {
    border-radius: 10px;
    width: 50px;
    height: 30px;
    background-color: transparent;
    border: solid 1px red;
    color: red;
    font-weight: bold;
  }
`;

export { Container, Contents, Name, ButtonGroup };
