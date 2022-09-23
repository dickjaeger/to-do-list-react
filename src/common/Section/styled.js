import styled from "styled-components";

export const Section = styled.section`
    background-color: #fff;
    margin: 10px 0;
    box-shadow: #ddd 2px 2px 5px;
`

export const SectionBody = styled.div`
    padding: 20px;
`

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
    padding: 20px;
    margin: 0;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
    }
`

export const Title = styled.h2`
    margin: 0;
`