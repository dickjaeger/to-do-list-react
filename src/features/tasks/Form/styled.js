import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    padding: 20px;

    @media (max-width: 767px){
        flex-wrap: wrap;
    }
`

export const Input = styled.input`
    flex-basis: 100px;
    flex-grow: 1;
    overflow: hidden;
    padding: 7px;
    border: 1px solid #ddd;
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