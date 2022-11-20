import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 50px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 40px;
  background-color: transparent;
  border: solid 1px #0a6ecd;
  border-radius: 10px;
  color: #0a6ecd;
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  :hover {
    background-color: #0a6ecd;
    color: white;
    transition: 0.5s;
  }
`;

export { Container, Button };
