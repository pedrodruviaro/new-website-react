import styled from "styled-components"

export const FlexContainer = styled.footer`
    background-color: ${props => props.theme.clrDark};
    color: ${props => props.theme.clrLight};

    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    flex-direction: ${props => props.direction};
    text-align: ${props => props.textAlign};
    gap: ${props => props.gap};

    padding: ${props => props.padding ? props.padding : "1rem 1.5rem"};
    min-height: 8vh;
`