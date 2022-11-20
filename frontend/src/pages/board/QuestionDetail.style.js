import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 5%;
  margin-left: 15%;
  margin-right: 15%;
`;
const Title = styled.div`
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
  margin-top: 0px;
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

  .lst {
    border: solid 1px yellowgreen;
    border-radius: 10px;
    color: yellowgreen;
    :hover {
      background-color: red;
      color: white;
      transition: 0.5s;
    }
  }
`;

const Modi = styled.button`
  margin: 5px;
  width: fit-content;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  border: solid 1px yellow;
  border-radius: 10px;
  color: yellow;
  background-color: transparent;
  :hover {
    background-color: yellow;
    color: black;
    transition: 0.5s;
  }
`;

const Del = styled.button`
  margin: 5px;
  width: fit-content;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  border: solid 1px orangered;
  border-radius: 10px;
  color: orangered;
  background-color: transparent;
  :hover {
    background-color: orangered;
    color: black;
    transition: 0.5s;
  }
`;

const Lst = styled.button`
  margin: 5px;
  width: fit-content;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  border: solid 1px yellowgreen;
  border-radius: 10px;
  color: yellowgreen;
  background-color: transparent;
  :hover {
    background-color: yellowgreen;
    color: white;
    transition: 0.5s;
  }

  .link {
    text-decoration: none;
    color: yellowgreen;
    :hover {
      color: black;
    }
  }
`;

export { Container, Title, Tag, Content, Buttons, Modi, Del, Lst };
