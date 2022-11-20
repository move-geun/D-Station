import styled from "styled-components";

const HTMLWrapper = styled.div`
  width: 30%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 50px 0 0 50px;
  word-break: break-all;

  background: rgb(5, 0, 19);
  background: linear-gradient(
    180deg,
    rgba(5, 0, 19, 0.9668242296918768) 0%,
    rgba(10, 9, 50, 1) 30%,
    rgba(11, 29, 53, 1) 60%,
    rgba(5, 27, 25, 1) 100%
  );
`;

const ThreeWrapper = styled.div`
  width: 70%;
  height: 100vh;
  float: left;
  position: relative;
  z-index: 1;
`;

const DescWrapper = styled.div`
  padding: 4.5rem 2rem 0rem 1rem;
  margin: 1rem;

  .name {
    text-align: center;
    height: 50px;
  }

  .des {
    width: 100%;
    white-space: normal;
    font-size: small;
    line-height: 150%;
  }
`;

const ListWrapper = styled.div`
  float: bottom;
  padding: 1rem;
`;

const RefListWrapper = styled.div`
  margin: 0rem 1rem 0rem 1rem;
  padding: 1rem;
`;

const QuizWrapper = styled.div`
  margin: 1rem;

  .btn {
    position: relative;
    margin: 0 auto;
    width: 10em;
    color: white;
    border: 0.15em solid white;
    border-radius: 5em;
    text-transform: uppercase;
    text-align: center;
    font-size: 1em;
    line-height: 2em;
    cursor: pointer;
  }

  .dot {
    content: "";
    position: absolute;
    top: 0;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    transition: all 300ms ease;
    display: none;
  }

  .dot:after {
    content: "";
    position: absolute;
    left: calc(50% - 0.4em);
    top: -0.4em;
    height: 0.5em;
    width: 0.5em;
    background: gold;
    border-radius: 1em;
    border: 0.25em solid #fff;
    box-shadow: 0 0 0.7em #fff, 0 0 2em gold;
  }

  .btn:hover .dot,
  .btn:focus .dot {
    animation: atom 2s infinite linear;
    display: block;
  }

  /* @keyframes atom {
        0% {transform: translateX(0) rotate(0);}
        30%{transform: translateX(calc(10em - calc(10em*.2))) rotate(0);}
        50% {transform: translateX(calc(10em - calc(10em*.2))) rotate(180deg);}
        80% {transform: translateX(0) rotate(180deg);}
        100% {transform: translateX(0) rotate(360deg);}
    } */
`;

const MissTILWrapper = styled.div`
  margin: 0rem 1rem 0rem 1rem;
  padding: 1rem;
  .btn {
    position: relative;
    margin: 0 auto;
    width: 10em;
    color: white;
    border: 0.15em solid white;
    border-radius: 5em;
    text-transform: uppercase;
    text-align: center;
    font-size: 1em;
    line-height: 2em;
    cursor: pointer;
  }

  .dot {
    content: "";
    position: absolute;
    top: 0;
    width: calc(var(--btn-w) * 0.2);
    height: 100%;
    border-radius: 100%;
    transition: all 300ms ease;
    display: none;
  }

  .dot:after {
    content: "";
    position: absolute;
    left: calc(50% - 0.4em);
    top: -0.4em;
    height: 0.8em;
    width: 0.8em;
    background: gold;
    border-radius: 1em;
    border: 0.25em solid #fff;
    box-shadow: 0 0 0.7em #fff, 0 0 2em gold;
  }

  .btn:hover .dot,
  .btn:focus .dot {
    animation: atom 2s infinite linear;
    display: block;
  }
`;

const DoneTilWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
`;

export {
  HTMLWrapper,
  ThreeWrapper,
  DescWrapper,
  ListWrapper,
  RefListWrapper,
  QuizWrapper,
  MissTILWrapper,
  DoneTilWrapper,
};
