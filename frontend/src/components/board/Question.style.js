import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Carousel = styled.div`
  display: flex;
  padding: 0;
  max-width: 1250px;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  min-width: 150px;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;
`;

export const Ui = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 10%;
  top: 70%;
  width: 80%;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #51e3d4;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
    border: 0;
    transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover {
      background: #666;
    }

    &:focus {
      outline: none;
      border: 1px solid rgba(255, 255, 255, 1);
    }
  }
`;

export const Item3 = styled.div`
  display: flex;
  justify-content: space-between;
`;
