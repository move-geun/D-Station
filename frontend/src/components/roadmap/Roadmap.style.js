import styled from "styled-components";

const HTMLWrapper = styled.div`
    width: 30%;
    height: 100%;
    float: right;
    background-color: rgba( 0, 50, 100, 0.42 );
    border-radius: 50px 0 0 50px;
`;


const ThreeWrapper = styled.div`
    width: 70%;
    height: 100%;
    float: left;
`;

const DescWrapper = styled.div`
    height: 30%;

    padding: 2.5rem;
    word-wrap: break-word;

    .name{
        height: 50px;
    }

    .des{
        height: 60%;
        overflow: hidden;
        word-wrap: break-all;
    }
`

const ListWrapper = styled.div`
    height: 70%;
    float: bottom;
    padding: 2rem;
`


export {HTMLWrapper, ThreeWrapper, DescWrapper, ListWrapper};