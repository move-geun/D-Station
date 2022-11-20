import styled from "styled-components";

const GithubContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 500px;
    height: 300px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
`;

const GithubBtn = styled.div`
  background-image: url("../assets/GithubLogInBtn.PNG");
  width: 300px;
  height: 60px;
  background-size: cover;
  border-radius: 8px;
  /* box-shadow: 5px 5px 20px 0.8px gray; */
`;

export { GithubContainer, GithubBtn };
