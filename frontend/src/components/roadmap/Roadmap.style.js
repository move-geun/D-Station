import styled from "styled-components";

const PlanetHTMLWrapper = styled.div`
    width: 30%;
    height: 100%;
    float: right;
    background-color:gray;
    /* opacity: 0.3; */
`;


const PlanetThreeWrapper = styled.div`
    width: 70%;
    height: 100%;
    float: left;
`;

const DescWrapper = styled.div`
    height: 60%;
    background-color: gold;
    padding: 2rem;
`

const ListWrapper = styled.div`
    height: 150px;
    float: bottom;
    padding: 2rem;
    background-color: pink;
`


export {PlanetHTMLWrapper, PlanetThreeWrapper, DescWrapper, ListWrapper};