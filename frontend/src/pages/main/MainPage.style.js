import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
`;

const WebWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #4f5b66;
  color: black;
`;

export { MainWrapper, WebWrapper };
