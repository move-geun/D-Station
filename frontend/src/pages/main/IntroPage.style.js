import styled from "styled-components";

const IntroWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  .inner {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 100px; */
  }

  .bg-yellow {
    background-color: #f7f6cf;
  }

  .bg-blue {
    background-color: #b6d8f2;
  }

  .bg-pink {
    background-color: #f4cfdf;
  }

  .divider {
    width: 100%;
    height: 5px;
    background-color: gray;
  }
`;

export { IntroWrapper };
