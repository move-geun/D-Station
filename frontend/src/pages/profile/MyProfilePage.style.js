import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  /* padding-left: 6rem; */

  .graph {
    margin: 0 auto;
    margin-top: 50px;
    width: 100%;
  }

  .hide {
    width: 100%;
    position: relative;
    margin: 0 auto;

    .hideblack {
      width: 100%;
      height: 65px;
      position: absolute;
      background-color: black;
      bottom: 5px;
    }
  }
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 2rem 0 1rem 0;

  .profile {
    width: 150px;
    height: 150px;
    margin-left: 6rem;
    margin-right: 1rem;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .user {
    font-size: 30px;
  }
  .name {
    font-size: 50px;
    font-style: bold;
    margin-right: 1rem;
  }
`;

const Percent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1rem auto;

  .title {
    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;
    justify-content: space-between;

    .status {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.3rem;
      .per {
        margin: 0 10px;
        color: gray;
      }
    }
  }

  .perbox {
    position: relative;
    margin-top: 1rem;
    background-color: gray;
    border-radius: 10px;
    width: 100%;
    height: 20px;

    .nowper {
      position: absolute;
      background-color: tomato;
      border-radius: 10px;
      height: 20px;
    }
  }
`;

export { Container, Profile, Percent };
