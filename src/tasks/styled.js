import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding: 20px;
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 7px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`

export const Button = styled.button`
    
    border: none;
    color: #fff;
    height: 30px;
    width: 30px;
    transition: 0.2s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: green;

        &:hover {
            background-color: hsl(120, 100%, 30%);
        }

        &:active {
            background-color: hsl(120, 100%, 35%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: red;

        &:hover {
            background-color: hsl(0, 100%, 55%);
        }

        &:active {
            background-color: hsl(0, 100%, 60%);
        }
    `}
`

export const TextContainer = styled.div`
    word-break: break-word;
    flex-grow: 1;
    margin: 0 15px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`