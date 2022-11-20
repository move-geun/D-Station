import styled from "styled-components";

const HTMLWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
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

const TitleWrapper = styled.div`
  margin: 30px 0 35px 30px;
  text-align: left;
  height: 50px;
  font-size: 30px;
`;

const TitleDes = styled.div`
  margin: 30px 0 10px 30px;
  text-align: left;
  height: 50px;
  font-size: 20px;
`;

const ListAniWrapper = styled.div`
  align-items: center;
  display: grid;
  row-gap: 8px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  .plist {
    font-size: 15px;
    margin: 10px 0px 10px 30px;
    cursor: pointer;
    &:hover {
      transform: scale(0.95);
      box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    }
  }
`;

export { HTMLWrapper, TitleWrapper, TitleDes, ListAniWrapper };
