import styled from "styled-components";

const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 120px;
  height: 50px;
  background-color: transparent;
  border: solid 1px violet;
  color: violet;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.9s, color 0.3;
  :hover {
    background-color: violet;
    color: white;
    transition: 0.7s;
  }
`;

export { ButtonBox, Button };
