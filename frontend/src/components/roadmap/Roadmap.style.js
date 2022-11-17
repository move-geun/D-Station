import styled from "styled-components";

const HTMLWrapper = styled.div`
    /* width: 30%;
    height: 100%;
    float: right;
    background-color: rgba( 0, 50, 100, 0.42 );
    border-radius: 50px 0 0 50px; */

    width: 30%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgba( 0, 50, 100, 0.5 );
    border-radius: 50px 0 0 50px;
    word-break:break-all;
`;


const ThreeWrapper = styled.div`
    width: 70%;
    height: 100vh;
    float: left;
    position :relative;
    z-index: 1;
`;

const DescWrapper = styled.div`
    height: 30%;
    padding: 4rem 1rem 0rem 1rem;
    /* margin: 0.5rem; */
    /* word-break:break-all; */

    .name{
        height: 50px;
    }

    .des{
        width: 100%;
        /* height: 100px; */
        white-space: normal;
        /* overflow: hidden; */
        text-overflow: ellipsis;
        font-size: small;
    

}
`

const ListWrapper = styled.div`
    height: 70%;
    float: bottom;
    padding: 2rem;
`

const RefListWrapper = styled.div`
    /* margin: 1rem; */
    padding: 1rem;
`

const QuizWrapper = styled.div`
    margin: 1rem;

    .btn{
        position: relative;
        margin: 0 auto;
        width: 10em;
        color: white;
        border: .15em solid white;
        border-radius: 5em;
        text-transform: uppercase;
        text-align: center;
        font-size: 1em;
        line-height: 2em;
        cursor: pointer;  
    }


    .dot{
        content: '';
        position: absolute;
        top: 0;
        width: calc(var(--btn-w)*.2);
        height: 100%;
        border-radius: 100%;
        transition: all 300ms ease;
        display: none;
    }


    .dot:after{
        content: '';
        position: absolute;
        left: calc(50% - .4em);
        top: -.4em;
        height: .8em;
        width: .8em;
        background: gold;
        border-radius: 1em;
        border: .25em solid #fff;
        box-shadow: 0 0 .7em #fff,
        0 0 2em gold;
    }

    .btn:hover .dot,
    .btn:focus .dot {
        animation: atom 2s infinite linear;
        display: block;
    }

    /* @keyframes atom {
        0% {transform: translateX(0) rotate(0);}
        30%{transform: translateX(calc(10em - calc(10em*.2))) rotate(0);}
        50% {transform: translateX(calc(10em - calc(10em*.2))) rotate(180deg);}
        80% {transform: translateX(0) rotate(180deg);}
        100% {transform: translateX(0) rotate(360deg);}
    } */
`

const MissTILWrapper = styled.div`
    margin: 1rem;
    .btn{
        position: relative;
        margin: 0 auto;
        width: 10em;
        color: white;
        border: .15em solid white;
        border-radius: 5em;
        text-transform: uppercase;
        text-align: center;
        font-size: 1em;
        line-height: 2em;
        cursor: pointer;  
    }


    .dot{
        content: '';
        position: absolute;
        top: 0;
        width: calc(var(--btn-w)*.2);
        height: 100%;
        border-radius: 100%;
        transition: all 300ms ease;
        display: none;
    }


    .dot:after{
        content: '';
        position: absolute;
        left: calc(50% - .4em);
        top: -.4em;
        height: .8em;
        width: .8em;
        background: gold;
        border-radius: 1em;
        border: .25em solid #fff;
        box-shadow: 0 0 .7em #fff,
        0 0 2em gold;
    }

    .btn:hover .dot,
    .btn:focus .dot {
        animation: atom 2s infinite linear;
        display: block;
    }

`


export {HTMLWrapper, ThreeWrapper, DescWrapper, ListWrapper, 
    RefListWrapper, QuizWrapper, MissTILWrapper };