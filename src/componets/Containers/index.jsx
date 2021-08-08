import styled from "styled-components"

export const FlexContainer = styled.footer`
    background-color: transparent;

    max-width: 1400px;
    margin: 0 auto;

    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    flex-direction: ${props => props.direction};
    text-align: ${props => props.textAlign};
    gap: ${props => props.gap};

    padding: ${props => props.padding ? props.padding : "1rem 1.5rem"};
    min-height: 8vh;
`

export const ContainerSplit = styled.div`
    display: flex;
    gap: 3rem;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin: 3rem auto;
    max-width: 1280px;

    @media (min-width: 900px) {
        flex-direction: row;
    }
`


export const Container = styled.div`
    padding: 4em;
    max-width: 1440px;
    margin: 0 auto;

    @media (min-width: 800px) {
        font-size: 1.125rem;
    }
`