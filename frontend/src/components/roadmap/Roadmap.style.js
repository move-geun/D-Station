import styled from "styled-components";

const HTMLWrapper = styled.div`
    /* width: 30%;
    height: 100%;
    float: right;
    background-color: rgba( 0, 50, 100, 0.42 );
    border-radius: 50px 0 0 50px; */

    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba( 0, 50, 100, 0.42 );
    border-radius: 50px 0 0 50px;
    word-break:break-all;
`;


const ThreeWrapper = styled.div`
    width: 70%;
    height: 100%;
    float: left;
`;

const DescWrapper = styled.div`
    height: 30%;
    padding: 4rem 1rem 1rem 1rem;
    margin: 1rem;
    /* word-break:break-all; */

    .name{
        height: 50px;
    }

    .des{
        width: 100%;
        height: 60%;
        white-space: normal;
        /* overflow: hidden; */
        text-overflow: ellipsis;

}
`

const ListWrapper = styled.div`
    height: 70%;
    float: bottom;
    padding: 2rem;
`

const RefListWrapper = styled.div`
    background-color: lightpink;
`

const QuizWrapper = styled.div`
    background-color: gold;
`

const MissTILWrapper = styled.div`
    background-color: lightgreen;
`


export {HTMLWrapper, ThreeWrapper, DescWrapper, ListWrapper, 
    RefListWrapper, QuizWrapper, MissTILWrapper };