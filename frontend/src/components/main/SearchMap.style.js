import styled from "styled-components";

const SearchWraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .title {
    width: 100%;
    font-size: 20px;
    font-style: bold;
    text-align: left;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RecoSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .title {
    width: 100%;
    font-size: 1rem;
    margin: 20px;
    text-align: left;
  }

  .logo_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .logobox {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

const SearchSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .title {
    font-size: 1rem;
  }
`;

export { SearchWraper, ContentWrapper, RecoSide, SearchSide };
