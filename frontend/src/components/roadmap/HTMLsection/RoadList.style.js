import styled from "styled-components";

const ListWrapper = styled.div`
   
    border-radius: 12px;
    padding: 15px 15px 20px;
    display: grid;
    /* row-gap: 8px; */
    background-color: lightskyblue;
    height: 300px;

    .slist{
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        align-items: center;
        padding: 10px 30px 10px 10px;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
        cursor: pointer;
        transition: transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98);
        /* background-color: #fff; */
    
        &:hover {
            transform: scale(1.1);
            box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
        }
    }
`;





export {ListWrapper};