import styled from "styled-components";

export const FlexContainer = styled.section`
    background-color: transparent;

    max-width: 1400px;
    margin: 0 auto;

    display: flex;
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    flex-direction: ${(props) => props.direction};
    text-align: ${(props) => props.textAlign};
    gap: ${(props) => props.gap};
    padding: ${props => props.padding ? props.padding : "3rem"};
    min-height: 8vh;

    @media (min-width: 800px) {
        font-size: 1.125rem;
        padding: ${props => props.padding ? props.padding : "4rem"};

    }
`;

export const ContainerSplit = styled.div`
    display: flex;
    gap: 4.5rem;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin: 3rem auto;
    max-width: 1280px;

    div {
        flex: 1;
    }

    @media (min-width: 900px) {
        flex-direction: row;
    }
`;

export const Container = styled.div`
    padding: ${props => props.padding ? props.padding : "3rem"};
    max-width: 1440px;
    margin: 0 auto;

    @media (min-width: 800px) {
        font-size: 1.125rem;
        padding: ${props => props.padding ? props.padding : "4rem"};

    }
`;
