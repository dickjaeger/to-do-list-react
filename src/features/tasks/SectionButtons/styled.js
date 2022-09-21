import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: #fff;
    color: teal;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:active {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ddd;
    }
`

export const ButtonsContainer = styled.div`
    @media (max-width: 767px) {
        align-self: center;
    }
`