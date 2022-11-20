import styled from "styled-components";

const ListWrapper = styled.div`
  align-items: center;
  border-radius: 12px;
  padding: 15px 15px 20px;
  display: grid;
  row-gap: 8px;
  background-color: rgba(255, 255, 192, 0.1);
  /* height: 300px; */
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);

  .plist {
    font-size: small;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    }
  }

  .slist {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    padding: 10px 30px 10px 10px;
    overflow: hidden;
    border-radius: 10px;
    /* box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23); */
    cursor: pointer;
    transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
      box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
    backdrop-filter: blur(15px);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
    }
  }

  .rlist {
    cursor: pointer;
    transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
      box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

    &:hover {
      transform: scale(1.05);
    }
  }

  .doneTil {
    cursor: pointer;
    transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
      box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export { ListWrapper };
