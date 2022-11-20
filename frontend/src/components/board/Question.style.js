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
  margin: 0 0 0 0;
  overflow: hidden;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Ui = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 110%;
  width: 100%;

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
