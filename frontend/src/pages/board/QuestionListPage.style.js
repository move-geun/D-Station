import styled from "styled-components";

const Function = styled.div`
  display: flex;
  margin-left: 5%;
  position: absolute;
  top: 150px;
  align-items: center;

  .write {
    position: absolute;
    padding: 10px;
    top: 25px;
    left: 70px;
    border: 1px solid #51e3d4;
    border-radius: 30px;
    text-decoration: none;
    float: right;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #51e3d4;
  }

  .writeBtn {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #51e3d4;
  }

  .search {
    position: absolute;
    padding: 10px;
    top: 50px;
    left: 180px;
    transform: translate(-50%, -50%);
    height: 30px;
    background-color: #fff;
    border: 1px solid #51e3d4;
    border-radius: 30px;
    transition: 0.4s;
    width: 30px;
  }

  .search:hover {
    box-shadow: 0px 0px 0.5px 1px #51e3d4;
    width: 282px;
  }

  .searchBtn {
    text-decoration: none;
    float: right;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #51e3d4;
  }

  .search:hover > .searchBtn {
    background-color: #fff;
  }

  .searchInput {
    display: flex;
    padding: 0;
    width: 0px;
    border: none;
    background: none;
    outline: none;
    float: left;
    font-size: 1rem;
    line-height: 30px;
    transition: 0.4s;
  }

  .search:hover > .searchInput {
    width: 240px;
    padding: 0 6px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 250px;
  left: 150px;
  width: 80%;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  margin-bottom: 0px;
  height: 50px;
`;

export { Container, Page, Function };
