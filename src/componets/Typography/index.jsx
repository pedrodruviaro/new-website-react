import styled from "styled-components";

export const SecondaryTitle = styled.h2`
    font-size: 3rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    font-family: ${(props) => props.fontPrimary};
    text-align: center;
    font-weight: 600;

    @media (min-width: 800px) {
        font-size: 3.25rem;
    }
`;

export const TertiaryTitle = styled.h3`
    font-size: 1.25rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    font-family: ${(props) => props.fontPrimary};

    &::after {
        content: "";
        display: block;
        background-color: ${props => props.theme.clrAccent};
        width: 3em;
        margin: .75rem auto 0 auto;
        height: 1px;
    }

    @media (min-width: 800px) {
        font-size: 1.5rem;
    }
`;

export const Paragraph = styled.p`
    line-height: 1.5;
    text-align: ${props => props.align};

    flex: 1;
`;

export const CustomTitle = styled.p`
     background-color: ${props => props.theme.clrAccent};
     color: ${props => props.theme.clrLight};
     font-weight: 300;
     padding: .5rem;
     width: max-content;
     margin: 0 auto;

`