import styled from "styled-components";

const Label = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const CodeBox = styled.div`
  justify-content: start;
  margin-left: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-left: 40%;
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
  width: 300px;
  :hover {
    background-color: #0a6ecd;
    color: white;
    transition: 0.5s;
  }
`;

export { Label, CodeBox, ButtonBox, Button };
