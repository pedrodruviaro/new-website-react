import styled from "styled-components";

export const SecondaryTitle = styled.h2`
    font-size: ${(props) => props.theme.fsh2};
    line-height: 1.1;
    margin: 0;
    font-family: ${(props) => props.fontPrimary};
`;

export const TertiaryTitle = styled.h3`
    font-size: ${(props) => props.theme.fsh3};
    line-height: 1.1;
    margin: 0;
    font-family: ${(props) => props.fontPrimary};
`;

export const Paragraph = styled.p`
    line-height: 1.5;
`;
