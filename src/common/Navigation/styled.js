import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    background-color: teal;
`

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`

export const StyledLink = styled(NavLink)`
    margin: 0 15px;
    color: white;
    font-size: larger;
    text-decoration: none;
    &.active {
        font-weight: bold;
    }
`