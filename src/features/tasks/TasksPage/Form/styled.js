import styled from "styled-components";

export const Form = styled.form`
    display: flex;

    @media (max-width: 767px){
        flex-wrap: wrap;
    }
`

export const Button = styled.button`
    padding: 7px;
    border: none;
    background-color: teal;
    color: #fff;
    margin-left: 15px;
    transition: 0.2s;
    cursor: pointer;

    @media (max-width: 767px) {
        flex-grow: 1;
        flex-basis: 100%;
        margin: 10px 0; 
    }

    &:hover {
        background-color: hsl(180, 100%, 27%);
        transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 30%); 
    }
`