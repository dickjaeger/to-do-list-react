import styled from "styled-components";

export const Container = styled.main`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`

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

export const Input = styled.input`
    flex-basis: 100px;
    flex-grow: 1;
    overflow: hidden;
    padding: 7px;
    border: 1px solid #ddd;
`

export const ButtonsContainer = styled.div`
    @media (max-width: 767px) {
        align-self: center;
    }
`