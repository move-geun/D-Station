import styled from "styled-components";

const StudyWraper = styled.div`
  &:hover {
    cursor: pointer;
    color: tomato;
    transition: all 0.7s cubic-bezier(0.25, 0.8, 0.4, 0.95);
    transform: scale(1.2, 1.2);
  }
`;

export { StudyWraper };
