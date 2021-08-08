import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* general styles */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: ${props => props.fontPrimary};
}

html {
    scroll-behavior: smooth;
}

body {
    background-color:  ${props => props.theme.clrBgBody};
    color:  ${props => props.theme.clrDark};
    margin: 0;
    font-family:  ${props => props.theme.fontPrimary};
    font-size:  1rem ;
    line-height: 1;


}

section {
    /* padding: 4em;
    max-width: 1440px;
    margin: 0 auto;

    @media (min-width: 800px) {
        font-size: 1.125rem;
    } */
}

img {
    display: block;
    max-width: 100%;
}

:focus {
    outline: 3px solid  ${props => props.theme.clrAccent};
    outline-offset: 3px;
}
`;



